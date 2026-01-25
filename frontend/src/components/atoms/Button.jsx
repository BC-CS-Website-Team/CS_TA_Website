import React from 'react';

const Button = ({ children, onClick, variant = 'primary', type = 'button', className = '' }) => {
    const baseStyle = "px-4 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200";

    const variants = {
        primary: "bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500",
        secondary: "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 focus:ring-primary-500",
        danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
    };

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${baseStyle} ${variants[variant]} ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
