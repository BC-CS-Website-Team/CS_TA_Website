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
