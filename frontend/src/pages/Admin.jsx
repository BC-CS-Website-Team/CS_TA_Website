import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Admin = () => {
    const { user, isAuthenticated } = useAuth()

    // If not logged in or not a superuser, show access denied message
    if (!isAuthenticated || !user?.is_superuser) {
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

    // Admin Dashboard Content
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="mb-8 border-b pb-4">
                <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
                <p className="text-gray-600 mt-2">Welcome, Administrator {user.email}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Placeholder Admin Cards */}
                <div className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-semibold mb-2">Manage Users</h3>
                    <p className="text-gray-600 mb-4">View and manage user accounts and permissions.</p>
                    <button className="text-primary-600 font-medium hover:text-primary-700" disabled>
                        Coming Soon
                    </button>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-semibold mb-2">System Settings</h3>
                    <p className="text-gray-600 mb-4">Configure global application settings.</p>
                    <button className="text-primary-600 font-medium hover:text-primary-700" disabled>
                        Coming Soon
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Admin
