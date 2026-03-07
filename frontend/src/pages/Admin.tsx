import React, { useState, useEffect, FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { createRole, getRoles, getUsers, assignUserRoles, setUserAdminStatus } from '../services/auth'
import { Button, Badge, Card, Input } from '../components/atoms'

// ─── Types ───────────────────────────────────────────────────────────────────

interface Role {
    id: number
    name: string
}

interface AppUser {
    id: number
    email: string
    is_superuser: boolean
    roles: Role[]
}

// ─── Component ────────────────────────────────────────────────────────────────

const Admin: React.FC = () => {
    const { user, isAuthenticated } = useAuth()
    const [roles, setRoles] = useState<Role[]>([])
    const [users, setUsers] = useState<AppUser[]>([])
    const [newRoleName, setNewRoleName] = useState('')
    const [selectedUser, setSelectedUser] = useState<AppUser | null>(null)
    const [selectedRoleIds, setSelectedRoleIds] = useState<number[]>([])
    const [message, setMessage] = useState({ type: '', text: '' })

    // ── Data Fetching ──────────────────────────────────────────────────────────

    useEffect(() => {
        if (isAuthenticated && user && 'is_superuser' in user && user.is_superuser) {
            fetchData()
        }
    }, [isAuthenticated, user])

    const fetchData = async () => {
        try {
            const [rolesData, usersData] = await Promise.all([getRoles(), getUsers()])
            setRoles(rolesData)
            setUsers(usersData)
        } catch (err) {
            console.error(err)
            setMessage({ type: 'error', text: 'Failed to load data.' })
        }
    }

    const showMessage = (type: 'success' | 'error', text: string) => {
        setMessage({ type, text })
        setTimeout(() => setMessage({ type: '', text: '' }), 4000)
    }

    // ── Role Handlers ──────────────────────────────────────────────────────────

    const handleCreateRole = async (e: FormEvent) => {
        e.preventDefault()
        try {
            await createRole(newRoleName)
            showMessage('success', `Role "${newRoleName}" created!`)
            setNewRoleName('')
            fetchData()
        } catch (err: any) {
            showMessage('error', err.message)
        }
    }

    const handleUserSelect = (userId: string) => {
        const found = users.find(u => u.id === parseInt(userId))
        setSelectedUser(found ?? null)
        setSelectedRoleIds(found?.roles?.map(r => r.id) ?? [])
    }

    const handleRoleToggle = (roleId: number) => {
        setSelectedRoleIds(prev =>
            prev.includes(roleId) ? prev.filter(id => id !== roleId) : [...prev, roleId]
        )
    }

    const handleAssignRoles = async () => {
        if (!selectedUser) return
        try {
            await assignUserRoles(selectedUser.id, selectedRoleIds)
            showMessage('success', 'Roles updated successfully!')
            fetchData()
        } catch (err: any) {
            showMessage('error', err.message)
        }
    }

    // ── Admin Promotion Handlers ───────────────────────────────────────────────

    const handleToggleAdmin = async (targetUser: AppUser) => {
        const promote = !targetUser.is_superuser
        try {
            await setUserAdminStatus(targetUser.id, promote)
            showMessage('success', `${targetUser.email} is now ${promote ? 'an Admin' : 'a regular User'}.`)
            fetchData()
        } catch (err: any) {
            showMessage('error', err.message)
        }
    }

    // ── Access Guard ───────────────────────────────────────────────────────────

    if (!isAuthenticated || !user || !('is_superuser' in user) || !user.is_superuser) {
        return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
                <div className="bg-red-50 border border-red-200 rounded-lg p-8 max-w-2xl mx-auto">
                    <h1 className="text-3xl font-bold text-red-800 mb-4">Access Denied</h1>
                    <p className="text-lg text-red-700 mb-6">
                        This page is for administrators only. Please contact an administrator if you believe this is an error.
                    </p>
                    <Link to="/" className="text-red-600 hover:text-red-800 font-medium underline">
                        Return to Home
                    </Link>
                </div>
            </div>
        )
    }

    // ── Render ─────────────────────────────────────────────────────────────────

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

            {/* Header */}
            <div className="mb-8 border-b pb-4">
                <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
                <p className="text-gray-600 mt-2">Welcome, Administrator {user.email}</p>
            </div>

            {/* Status Message */}
            {message.text && (
                <div className={`p-4 mb-6 rounded-md ${message.type === 'error' ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'}`}>
                    {message.text}
                </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                {/* ── 1. Create Role ── */}
                <Card className="p-6">
                    <h2 className="text-xl font-bold mb-4 border-b pb-2">Create New Role</h2>
                    <form onSubmit={handleCreateRole} className="space-y-4">
                        <Input
                            id="new-role-name"
                            label="Role Name"
                            placeholder="e.g. TA, Professor"
                            value={newRoleName}
                            onChange={e => setNewRoleName(e.target.value)}
                            required
                        />
                        <Button type="submit" variant="primary" className="w-full">
                            Create Role
                        </Button>
                    </form>

                    <div className="mt-8">
                        <h3 className="font-semibold text-gray-700 mb-2">Existing Roles:</h3>
                        <div className="flex flex-wrap gap-2">
                            {roles.length > 0
                                ? roles.map(role => <Badge key={role.id} colorScheme="gray">{role.name}</Badge>)
                                : <span className="text-gray-500 italic">No roles created yet.</span>
                            }
                        </div>
                    </div>
                </Card>

                {/* ── 2. Assign Roles ── */}
                <Card className="p-6">
                    <h2 className="text-xl font-bold mb-4 border-b pb-2">Manage Users & Roles</h2>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Select User</label>
                        <select
                            className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 border p-2"
                            onChange={e => handleUserSelect(e.target.value)}
                            value={selectedUser?.id ?? ''}
                        >
                            <option value="">-- Choose a User --</option>
                            {users.map(u => (
                                <option key={u.id} value={u.id}>
                                    {u.email} {u.is_superuser ? '(Admin)' : ''}
                                </option>
                            ))}
                        </select>
                    </div>

                    {selectedUser && (
                        <div className="animate-fade-in">
                            <div className="bg-gray-50 p-4 rounded-md mb-4 text-sm">
                                <p><strong>Email:</strong> {selectedUser.email}</p>
                                <p>
                                    <strong>Current Roles:</strong>{' '}
                                    {selectedUser.roles.length > 0
                                        ? selectedUser.roles.map(r => r.name).join(', ')
                                        : 'None'}
                                </p>
                            </div>

                            <h3 className="font-semibold text-gray-700 mb-2">Assign Roles:</h3>
                            <div className="space-y-2 mb-6 max-h-40 overflow-y-auto border p-2 rounded bg-gray-50">
                                {roles.map(role => (
                                    <label key={role.id} className="flex items-center space-x-2 cursor-pointer p-1 hover:bg-gray-100 rounded">
                                        <input
                                            type="checkbox"
                                            checked={selectedRoleIds.includes(role.id)}
                                            onChange={() => handleRoleToggle(role.id)}
                                            className="rounded border-gray-300 text-primary-600 focus:ring-primary-500 h-4 w-4"
                                        />
                                        <span className="text-gray-900">{role.name}</span>
                                    </label>
                                ))}
                            </div>

                            <Button variant="primary" onClick={handleAssignRoles} className="w-full">
                                Update Roles for {selectedUser.email}
                            </Button>
                        </div>
                    )}
                </Card>

                {/* ── 3. Manage Admins ── */}
                <Card className="p-6 lg:col-span-2">
                    <h2 className="text-xl font-bold mb-4 border-b pb-2">Manage Admins</h2>
                    <p className="text-sm text-gray-500 mb-4">
                        Promote any user to admin or remove their admin access. You cannot remove your own admin access.
                    </p>

                    <div className="divide-y divide-gray-100">
                        {users.map(u => {
                            const isSelf = u.email === user.email
                            return (
                                <div key={u.id} className="flex items-center justify-between py-3">
                                    <div className="flex items-center gap-3">
                                        <span className="text-sm text-gray-900">{u.email}</span>
                                        <Badge colorScheme={u.is_superuser ? 'green' : 'gray'}>
                                            {u.is_superuser ? 'Admin' : 'User'}
                                        </Badge>
                                    </div>
                                    <Button
                                        variant={u.is_superuser ? 'danger' : 'primary'}
                                        onClick={() => handleToggleAdmin(u)}
                                        disabled={isSelf}
                                        title={isSelf ? 'You cannot change your own admin status' : undefined}
                                        className={`text-sm px-3 py-1 ${isSelf ? 'opacity-40 cursor-not-allowed' : ''}`}
                                    >
                                        {u.is_superuser ? 'Remove Admin' : 'Make Admin'}
                                    </Button>
                                </div>
                            )
                        })}
                    </div>
                </Card>

            </div>
        </div>
    )
}

export default Admin
