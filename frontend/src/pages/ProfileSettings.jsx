import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const ProfileSettings = () => {
    const { user, isAuthenticated } = useAuth()

    if (!isAuthenticated) {
        return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 max-w-2xl mx-auto">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Profile Settings</h1>
                    <p className="text-xl text-gray-600 mb-8">
                        Please log in to view your profile settings.
                    </p>
                    <Link to="/login" className="inline-block px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors shadow-sm">
                        Login
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="mb-8 border-b pb-4">
                <h1 className="text-3xl font-bold text-gray-900">Profile Settings</h1>
                <p className="text-gray-600 mt-2">Manage your account and preferences.</p>
            </div>

            <div className="bg-white shadow rounded-lg overflow-hidden border border-gray-200">
                <div className="px-4 py-5 sm:px-6 bg-gray-50">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Account Information</h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application status.</p>
                </div>
                <div className="border-t border-gray-200">
                    <dl>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Email address</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user?.email}</dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Account Type</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {user?.is_superuser ? (
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                                        Administrator
                                    </span>
                                ) : (
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                        Standard User
                                    </span>
                                )}
                            </dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Member since</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {user?.created_at ? new Date(user.created_at).toLocaleDateString() : 'N/A'}
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>

            <div className="mt-8 bg-white shadow rounded-lg overflow-hidden border border-gray-200 opacity-75">
                <div className="px-4 py-5 sm:px-6 bg-gray-50 flex justify-between items-center">
                    <div>
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Preferences</h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">Customize your experience.</p>
                    </div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        Coming Soon
                    </span>
                </div>
                <div className="border-t border-gray-200 px-4 py-5 sm:p-6 text-gray-500 italic text-center">
                    Notification settings and theme preferences will be available here.
                </div>
            </div>
        </div>
    )
}

export default ProfileSettings
