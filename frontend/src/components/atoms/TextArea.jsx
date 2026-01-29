import React from 'react';

const TextArea = ({ label, id, value, onChange, placeholder, required = false, rows = 3 }) => {
    return (
        <div className="mb-4">
            {label && (
                <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
                    {label}
                </label>
            )}
            <textarea
                id={id}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                rows={rows}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            />
        </div>
    );
};

export default TextArea;
