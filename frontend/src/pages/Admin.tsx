import React, { useState, useEffect, FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { createRole, getRoles, getUsers, assignUserRoles } from '../services/auth'

const Admin: React.FC = () => {
    const { user, isAuthenticated } = useAuth()
    const [roles, setRoles] = useState<any[]>([])
    const [users, setUsers] = useState<any[]>([])
    const [newRoleName, setNewRoleName] = useState('')
    const [selectedUser, setSelectedUser] = useState<any | null>(null)
    const [selectedRoleIds, setSelectedRoleIds] = useState<number[]>([]) // Array of role IDs for multi-select
    const [message, setMessage] = useState({ type: '', text: '' })

    // Fetch data on load
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

    const handleCreateRole = async (e: FormEvent) => {
        e.preventDefault()
        try {
            await createRole(newRoleName)
            setMessage({ type: 'success', text: `Role "${newRoleName}" created!` })
            setNewRoleName('')
            fetchData() // Refresh list
        } catch (err: any) {
            setMessage({ type: 'error', text: err.message })
        }
    }

    const handleUserSelect = (userId: string) => {
        const user = users.find(u => u.id === parseInt(userId))
        setSelectedUser(user)
        // Pre-select existing roles
        setSelectedRoleIds(user?.roles?.map((r: any) => r.id) || [])
    }

    const handleRoleToggle = (roleId: number) => {
        setSelectedRoleIds(prev => {
            if (prev.includes(roleId)) {
                return prev.filter(id => id !== roleId)
            } else {
                return [...prev, roleId]
            }
        })
    }

    const handleAssignRoles = async () => {
        if (!selectedUser) return
        try {
            await assignUserRoles(selectedUser.id, selectedRoleIds)
            setMessage({ type: 'success', text: 'Roles updated successfully!' })
            fetchData() // Refresh user list to show updated roles
        } catch (err: any) {
            setMessage({ type: 'error', text: err.message })
        }
    }

    // If not logged in or not a superuser, show access denied message
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

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="mb-8 border-b pb-4">
                <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
                <p className="text-gray-600 mt-2">Welcome, Administrator {user.email}</p>
            </div>

            {message.text && (
                <div className={`p-4 mb-6 rounded-md ${message.type === 'error' ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'}`}>
                    {message.text}
                </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* 1. Create Role Section */}
                <div className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition-shadow">
                    <h2 className="text-xl font-bold mb-4 border-b pb-2">Create New Role</h2>
                    <form onSubmit={handleCreateRole} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Role Name</label>
                            <input
                                type="text"
                                className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 border p-2"
                                placeholder="e.g. TA, Professor"
                                value={newRoleName}
                                onChange={(e) => setNewRoleName(e.target.value)}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 transition-colors font-medium"
                        >
                            Create Role
                        </button>
                    </form>

                    <div className="mt-8">
                        <h3 className="font-semibold text-gray-700 mb-2">Existing Roles:</h3>
                        <div className="flex flex-wrap gap-2">
                            {roles.length > 0 ? roles.map(role => (
                                <span key={role.id} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                    {role.name}
                                </span>
                            )) : <span className="text-gray-500 italic">No roles created yet.</span>}
                        </div>
                    </div>
                </div>

                {/* 2. Assign Roles Section */}
                <div className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition-shadow">
                    <h2 className="text-xl font-bold mb-4 border-b pb-2">Manage Users & Roles</h2>

                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Select User</label>
                        <select
                            className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 border p-2"
                            onChange={(e) => handleUserSelect(e.target.value)}
                            value={selectedUser?.id || ''}
                        >
                            <option value="">-- Choose a User --</option>
                            {users.map(u => (
                                <option key={u.id} value={u.id}>{u.email} {u.is_superuser ? '(Admin)' : ''}</option>
                            ))}
                        </select>
                    </div>

                    {selectedUser && (
                        <div className="animate-fade-in">
                            <div className="bg-gray-50 p-4 rounded-md mb-4 text-sm">
                                <p><strong>Email:</strong> {selectedUser.email}</p>
                                <p><strong>Current Roles:</strong> {selectedUser.roles.length > 0
                                    ? selectedUser.roles.map((r: any) => r.name).join(', ')
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

                            <button
                                onClick={handleAssignRoles}
                                className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors font-medium"
                            >
                                Update Roles for {selectedUser.email}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
export default Admin
