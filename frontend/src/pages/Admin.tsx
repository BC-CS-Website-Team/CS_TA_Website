import React, { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { getRoles, getUsers, assignUserRoles, setUserAdminStatus } from '../services/auth'
import { Button, Badge, Card, Input } from '../components/atoms'

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

type SortField = 'name' | 'status'
type SortDir = 'asc' | 'desc'

const PAGE_SIZE = 8

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Returns "First Last" when available, otherwise the user's email. */
const displayName = (u: AppUser): string => {
    const full = [u.first_name, u.last_name].filter(Boolean).join(' ')
    return full || u.email
}

/** Sort indicator arrow for table headers. */
const sortIcon = (field: SortField, sortField: SortField, sortDir: SortDir) => {
    if (field !== sortField) return ' ↕'
    return sortDir === 'asc' ? ' ↑' : ' ↓'
}

// ─── Component ────────────────────────────────────────────────────────────────

const Admin: React.FC = () => {
    const { user, isAuthenticated } = useAuth()
    const [roles, setRoles] = useState<Role[]>([])
    const [users, setUsers] = useState<AppUser[]>([])
    const [selectedUser, setSelectedUser] = useState<AppUser | null>(null)
    const [selectedRoleIds, setSelectedRoleIds] = useState<number[]>([])
    const [message, setMessage] = useState({ type: '', text: '' })

    // Table controls
    const [search, setSearch] = useState('')
    const [sortField, setSortField] = useState<SortField>('name')
    const [sortDir, setSortDir] = useState<SortDir>('asc')
    const [page, setPage] = useState(1)

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

    // ── Filtered + Sorted + Paginated Users ───────────────────────────────────

    const processedUsers = useMemo(() => {
        const q = search.toLowerCase()
        const filtered = users.filter(u =>
            displayName(u).toLowerCase().includes(q) || u.email.toLowerCase().includes(q)
        )
        filtered.sort((a, b) => {
            const cmp = sortField === 'name'
                ? displayName(a).localeCompare(displayName(b))
                : (Number(b.is_superuser) - Number(a.is_superuser))
            return sortDir === 'asc' ? cmp : -cmp
        })
        return filtered
    }, [users, search, sortField, sortDir])

    const totalPages = Math.max(1, Math.ceil(processedUsers.length / PAGE_SIZE))
    const paginatedUsers = processedUsers.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

    const handleSearch = (q: string) => { setSearch(q); setPage(1) }

    const handleSort = (field: SortField) => {
        if (field === sortField) {
            setSortDir(d => d === 'asc' ? 'desc' : 'asc')
        } else {
            setSortField(field)
            setSortDir('asc')
        }
        setPage(1)
    }

    // ── Handlers ──────────────────────────────────────────────────────────────

    const handleSelectUser = (u: AppUser) => {
        setSelectedUser(u)
        setSelectedRoleIds(u.roles.map(r => r.id))
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

            <Card className="p-6">
                <h2 className="text-xl font-bold mb-4 border-b pb-2">Manage Users</h2>

                {/* Search */}
                <div className="mb-4 max-w-sm">
                    <Input
                        id="user-search"
                        placeholder="Search by name or email..."
                        value={search}
                        onChange={e => handleSearch(e.target.value)}
                    />
                </div>

                {/* User Table */}
                <div className="overflow-x-auto rounded-md border border-gray-200">
                    <table className="min-w-full divide-y divide-gray-200 text-sm">
                        <thead className="bg-gray-50">
                            <tr>
                                <th
                                    className="px-4 py-3 text-left font-semibold text-gray-600 cursor-pointer select-none hover:text-gray-900"
                                    onClick={() => handleSort('name')}
                                >
                                    Name{sortIcon('name', sortField, sortDir)}
                                </th>
                                <th className="px-4 py-3 text-left font-semibold text-gray-600">Email</th>
                                <th className="px-4 py-3 text-left font-semibold text-gray-600">Roles</th>
                                <th
                                    className="px-4 py-3 text-left font-semibold text-gray-600 cursor-pointer select-none hover:text-gray-900"
                                    onClick={() => handleSort('status')}
                                >
                                    Status{sortIcon('status', sortField, sortDir)}
                                </th>
                                <th className="px-4 py-3" />
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 bg-white">
                            {paginatedUsers.length > 0 ? paginatedUsers.map(u => (
                                <tr
                                    key={u.id}
                                    className={`hover:bg-gray-50 transition-colors ${selectedUser?.id === u.id ? 'bg-primary-50 ring-1 ring-inset ring-primary-200' : ''}`}
                                >
                                    <td className="px-4 py-3 font-medium text-gray-900">{displayName(u)}</td>
                                    <td className="px-4 py-3 text-gray-500">{u.email}</td>
                                    <td className="px-4 py-3">
                                        <div className="flex flex-wrap gap-1">
                                            {u.roles.length > 0
                                                ? u.roles.map(r => <Badge key={r.id} colorScheme="blue">{r.name}</Badge>)
                                                : <span className="text-gray-400 italic">None</span>}
                                        </div>
                                    </td>
                                    <td className="px-4 py-3">
                                        <Badge colorScheme={u.is_superuser ? 'green' : 'gray'}>
                                            {u.is_superuser ? 'Admin' : 'User'}
                                        </Badge>
                                    </td>
                                    <td className="px-4 py-3 text-right">
                                        <Button
                                            variant="secondary"
                                            className="text-xs py-1 px-3"
                                            onClick={() => handleSelectUser(u)}
                                        >
                                            {selectedUser?.id === u.id ? 'Selected' : 'Manage'}
                                        </Button>
                                    </td>
                                </tr>
                            )) : (
                                <tr>
                                    <td colSpan={5} className="px-4 py-8 text-center text-gray-400 italic">
                                        No users match your search.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex items-center justify-between mt-4 text-sm text-gray-600">
                        <span>Page {page} of {totalPages} ({processedUsers.length} users)</span>
                        <div className="flex gap-2">
                            <Button
                                variant="secondary"
                                className="text-xs py-1 px-3"
                                onClick={() => setPage(p => p - 1)}
                                disabled={page === 1}
                            >
                                Previous
                            </Button>
                            <Button
                                variant="secondary"
                                className="text-xs py-1 px-3"
                                onClick={() => setPage(p => p + 1)}
                                disabled={page === totalPages}
                            >
                                Next
                            </Button>
                        </div>
                    </div>
                )}

                {/* Management Panel — appears below table when a user is selected */}
                {selectedUser && (
                    <div className="mt-6 pt-6 border-t animate-fade-in">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-semibold text-gray-800">
                                Managing: {displayName(selectedUser)}
                                {selectedUser.first_name && (
                                    <span className="ml-2 text-sm font-normal text-gray-500">({selectedUser.email})</span>
                                )}
                            </h3>
                            <button
                                className="text-sm text-gray-400 hover:text-gray-600"
                                onClick={() => setSelectedUser(null)}
                            >
                                ✕ Close
                            </button>
                        </div>

                        {/* Role Checkboxes */}
                        <p className="text-sm font-medium text-gray-700 mb-2">Assign Roles:</p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mb-5 border p-3 rounded bg-gray-50">
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

                        {/* Actions */}
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
