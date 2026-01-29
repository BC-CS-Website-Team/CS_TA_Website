/**
 * opportunities.js
 * Service for handling opportunity-related API calls.
 */

const API_BASE_URL = 'http://localhost:8000'; // Adjust if environment variable is available

export const fetchOpportunities = async () => {
    const response = await fetch(`${API_BASE_URL}/opportunities`);
    if (!response.ok) {
        throw new Error('Failed to fetch opportunities');
    }
    return response.json();
};

export const createOpportunity = async (data) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/opportunities`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(data),
    });
    if (!response.ok) {
        throw new Error('Failed to create opportunity');
    }
    return response.json();
};

export const updateOpportunity = async (id, data) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/opportunities/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(data),
    });
    if (!response.ok) {
        throw new Error('Failed to update opportunity');
    }
    return response.json();
};

export const deleteOpportunity = async (id) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/opportunities/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });
    if (!response.ok) {
        throw new Error('Failed to delete opportunity');
    }
    return true;
};

export const uploadOpportunityImage = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/opportunities/upload-image`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
        body: formData,
    });

    if (!response.ok) {
        throw new Error('Failed to upload image');
    }
    return response.json();
};
