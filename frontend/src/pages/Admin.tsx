import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { getRoles, getUsers, assignUserRoles, setUserAdminStatus } from '../services/auth'
import { Button, Badge, Card } from '../components/atoms'

// ─── Types ────────────────────────────────────────────────────────────────────

interface Role {
    id: number
    name: string
}

interface AppUser {
    id: number
    email: string
    first_name: string | null
    last_name: string | null
    is_superuser: boolean
    roles: Role[]
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Returns "First Last" if available, otherwise falls back to email. */
const displayName = (u: AppUser): string => {
    const full = [u.first_name, u.last_name].filter(Boolean).join(' ')
    return full || u.email
}

// ─── Component ────────────────────────────────────────────────────────────────

const Admin: React.FC = () => {
    const { user, isAuthenticated } = useAuth()
    const [roles, setRoles] = useState<Role[]>([])
    const [users, setUsers] = useState<AppUser[]>([])
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

    // ── Handlers ──────────────────────────────────────────────────────────────

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

    const handleToggleAdmin = async () => {
        if (!selectedUser) return
        const promote = !selectedUser.is_superuser
        try {
            await setUserAdminStatus(selectedUser.id, promote)
            showMessage('success', `${displayName(selectedUser)} is now ${promote ? 'an Admin' : 'a regular User'}.`)
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

            {/* Manage Users & Roles — full width */}
            <Card className="p-6">
                <h2 className="text-xl font-bold mb-4 border-b pb-2">Manage Users & Roles</h2>

                {/* User selector */}
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Select User</label>
                    <select
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 border p-2"
                        onChange={e => handleUserSelect(e.target.value)}
                        value={selectedUser?.id ?? ''}
                    >
                        <option value="">-- Choose a User --</option>
                        {users.map(u => (
                            <option key={u.id} value={u.id}>
                                {displayName(u)} {u.is_superuser ? '(Admin)' : ''}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Selected user detail */}
                {selectedUser && (
                    <div className="animate-fade-in">

                        {/* User info */}
                        <div className="bg-gray-50 p-4 rounded-md mb-6 text-sm flex flex-wrap items-center gap-x-6 gap-y-2">
                            <div>
                                <span className="font-semibold text-gray-700">Name: </span>
                                {displayName(selectedUser)}
                            </div>
                            {selectedUser.first_name && (
                                <div>
                                    <span className="font-semibold text-gray-700">Email: </span>
                                    {selectedUser.email}
                                </div>
                            )}
                            <div className="flex items-center gap-2">
                                <span className="font-semibold text-gray-700">Status:</span>
                                <Badge colorScheme={selectedUser.is_superuser ? 'green' : 'gray'}>
                                    {selectedUser.is_superuser ? 'Admin' : 'User'}
                                </Badge>
                            </div>
                            <div>
                                <span className="font-semibold text-gray-700">Current Roles: </span>
                                {selectedUser.roles.length > 0
                                    ? selectedUser.roles.map(r => r.name).join(', ')
                                    : 'None'}
                            </div>
                        </div>

                        {/* Assign Roles */}
                        <h3 className="font-semibold text-gray-700 mb-2">Assign Roles:</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mb-6 border p-3 rounded bg-gray-50">
                            {roles.map(role => (
                                <label key={role.id} className="flex items-center space-x-2 cursor-pointer p-1 hover:bg-gray-100 rounded">
                                    <input
                                        type="checkbox"
                                        checked={selectedRoleIds.includes(role.id)}
                                        onChange={() => handleRoleToggle(role.id)}
                                        className="rounded border-gray-300 text-primary-600 focus:ring-primary-500 h-4 w-4"
                                    />
                                    <span className="text-gray-900 text-sm">{role.name}</span>
                                </label>
                            ))}
                        </div>

                        {/* Actions row */}
                        <div className="flex flex-wrap gap-3">
                            <Button variant="primary" onClick={handleAssignRoles}>
                                Update Roles
                            </Button>
                            <Button
                                variant={selectedUser.is_superuser ? 'danger' : 'secondary'}
                                onClick={handleToggleAdmin}
                                disabled={selectedUser.email === user.email}
                                title={selectedUser.email === user.email ? 'You cannot change your own admin status' : undefined}
                                className={selectedUser.email === user.email ? 'opacity-40 cursor-not-allowed' : ''}
                            >
                                {selectedUser.is_superuser ? 'Remove Admin' : 'Make Admin'}
                            </Button>
                        </div>

                    </div>
                )}
            </Card>

        </div>
    )
}

export default Admin
