import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { uploadProfilePicture } from '../services/auth'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

const ProfileSettings = () => {
    const { user, isAuthenticated, refreshUser } = useAuth()
    const [uploading, setUploading] = useState(false)
    const [message, setMessage] = useState({ type: '', text: '' })
    const [selectedFile, setSelectedFile] = useState(null)
    const [previewUrl, setPreviewUrl] = useState(null)

    const handleFileChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            setSelectedFile(file)
            setPreviewUrl(URL.createObjectURL(file))
            setMessage({ type: '', text: '' })
        }
    }

    const handleUpload = async () => {
        if (!selectedFile) return

        setUploading(true)
        setMessage({ type: '', text: '' })

        try {
            await uploadProfilePicture(selectedFile)
            await refreshUser()
            setMessage({ type: 'success', text: 'Profile picture updated successfully!' })
            setSelectedFile(null)
            setPreviewUrl(null)
        } catch (err) {
            setMessage({ type: 'error', text: err.message || 'Failed to upload image.' })
        } finally {
            setUploading(false)
        }
    }

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

            {message.text && (
                <div className={`p-4 mb-6 rounded-md ${message.type === 'error' ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'}`}>
                    {message.text}
                </div>
            )}

            <div className="bg-white shadow rounded-lg overflow-hidden border border-gray-200 mb-8">
                <div className="px-4 py-5 sm:px-6 bg-gray-50 flex items-center justify-between">
                    <div>
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Profile Picture</h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">Update your public profile photo.</p>
                    </div>
                </div>
                <div className="px-4 py-5 sm:p-6 flex flex-col sm:flex-row items-center gap-6">
                    <div className="flex-shrink-0">
                        {previewUrl ? (
                            <img className="h-24 w-24 rounded-full object-cover border-2 border-gray-200" src={previewUrl} alt="Preview" />
                        ) : (
                            user?.profile_picture ? (
                                <img
                                    className="h-24 w-24 rounded-full object-cover border-2 border-gray-200"
                                    src={user.profile_picture.startsWith('http') ? user.profile_picture : `http://localhost:8000${user.profile_picture}`}
                                    alt="Profile"
                                    onError={(e) => {
                                        console.error("Image load failed", e.target.src);
                                        // Fallback to initial if image fails
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'flex';
                                    }}
                                />
                            ) : (
                                <div className="h-24 w-24 rounded-full bg-gray-200 flex items-center justify-center text-gray-400">
                                    <svg className="h-12 w-12" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                </div>
                            )
                        )}
                    </div>

                    <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Change Photo</label>
                        <div className="flex items-center space-x-4">
                            <label className="cursor-pointer bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                                <span>Select Image</span>
                                <input type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
                            </label>
                            {selectedFile && (
                                <span className="text-sm text-gray-500">{selectedFile.name}</span>
                            )}
                            {selectedFile && (
                                <button
                                    onClick={handleUpload}
                                    disabled={uploading}
                                    className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${uploading ? 'opacity-50 cursor-not-allowed' : ''}`}
                                >
                                    {uploading ? 'Uploading...' : 'Upload'}
                                </button>
                            )}
                        </div>
                        <p className="mt-2 text-xs text-gray-500">JPG, GIF or PNG. Max size of 2MB.</p>
                    </div>
                </div>
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
