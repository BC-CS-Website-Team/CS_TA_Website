import React from 'react';

interface BadgeProps {
    type?: string;
    colorScheme?: 'green' | 'blue' | 'red' | 'purple' | 'yellow' | 'indigo' | 'gray';
    children?: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ type, colorScheme, children }) => {

    const getColorClass = () => {
        // 1. Priority: Explicit colorScheme
        if (colorScheme) {
            switch (colorScheme) {
                case 'green': return 'bg-green-100 text-green-800';
                case 'blue': return 'bg-blue-100 text-blue-800';
                case 'red': return 'bg-red-100 text-red-800';
                case 'purple': return 'bg-purple-100 text-purple-800';
                case 'yellow': return 'bg-yellow-100 text-yellow-800';
                case 'indigo': return 'bg-indigo-100 text-indigo-800';
                case 'gray': return 'bg-gray-100 text-gray-800';
                default: return 'bg-gray-100 text-gray-800';
            }
        }

        // 2. Fallback: Domain logic based on 'type' (Legacy support)
        if (type) {
            // Safe check for toLowerCase in case type is not a string
            const safeType = String(type).toLowerCase();
            switch (safeType) {
                case 'internship':
                    return 'bg-blue-100 text-blue-800';
                case 'job':
                    return 'bg-green-100 text-green-800';
                case 'hackathon':
                    return 'bg-purple-100 text-purple-800';
                default:
                    return 'bg-gray-100 text-gray-800';
            }
        }

        return 'bg-gray-100 text-gray-800';
    };

    // Content priority: children -> type -> null
    const content = children || type;

    if (!content) return null;

    return (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getColorClass()}`}>
            {content}
        </span>
    );
};

export default Badge;
