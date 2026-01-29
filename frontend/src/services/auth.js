/**
 * auth.js
 * Service for handling authentication API calls and token management.
 */

// Define the API URL based on environment or default to localhost
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

/**
 * Login user
 * @param {string} email 
 * @param {string} password 
 * @returns {Promise<Object>} User object and token
 */
export const login = async (email, password) => {
    const formData = new URLSearchParams();
    formData.append('username', email); // OAuth2 expects 'username'
    formData.append('password', password);

    const response = await fetch(`${API_URL}/auth/token`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData,
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Login failed');
    }

    const data = await response.json();
    if (data.access_token) {
        localStorage.setItem('token', data.access_token);
    }

    return data;
};

/**
 * Register user
 * @param {Object} userData 
 * @returns {Promise<Object>} Registered user data
 */
export const register = async (userData) => {
    const response = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Registration failed');
    }

    return await response.json();
};

/**
 * Get current user profile
 * @returns {Promise<Object>} User profile
 */
export const getCurrentUser = async () => {
    const token = localStorage.getItem('token');
    if (!token) return null;

    const response = await fetch(`${API_URL}/auth/me`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        // If token is invalid or expired, remove it
        localStorage.removeItem('token');
        throw new Error('Failed to fetch user');
    }

    return await response.json();
};

/**
 * Logout user
 */
export const logout = () => {
    localStorage.removeItem('token');
};

/**
 * Check if user is authenticated (simple check)
 * @returns {boolean}
 */
export const isAuthenticated = () => {
    return !!localStorage.getItem('token');
};

// --- Role Management Services ---

export const createRole = async (roleName) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_URL}/auth/roles`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ name: roleName })
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Failed to create role');
    }
    return await response.json();
};

export const getRoles = async () => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_URL}/auth/roles`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    if (!response.ok) throw new Error('Failed to fetch roles');
    return await response.json();
};

export const getUsers = async () => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_URL}/auth/users`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    if (!response.ok) throw new Error('Failed to fetch users');
    return await response.json();
};

export const assignUserRoles = async (userId, roleIds) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_URL}/auth/users/${userId}/roles`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ role_ids: roleIds })
    });
    if (!response.ok) throw new Error('Failed to assign roles');
    return await response.json();
};

export const uploadProfilePicture = async (file) => {
    const token = localStorage.getItem('token');
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch(`${API_URL}/auth/me/profile-picture`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`
        },
        body: formData
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Failed to upload profile picture');
    }

    return await response.json();
};

export const updateUser = async (updateData) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_URL}/auth/me`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(updateData)
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Failed to update profile');
    }

    return await response.json();
};
