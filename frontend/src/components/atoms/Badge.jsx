import React from 'react';

const Badge = ({ type }) => {
    const getBadgeStyle = (type) => {
        switch (type.toLowerCase()) {
            case 'internship':
                return 'bg-blue-100 text-blue-800';
            case 'job':
                return 'bg-green-100 text-green-800';
            case 'hackathon':
                return 'bg-purple-100 text-purple-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getBadgeStyle(type)}`}>
            {type}
        </span>
    );
};

export default Badge;
