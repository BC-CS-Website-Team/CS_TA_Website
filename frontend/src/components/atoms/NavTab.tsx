import React, { ReactNode } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';

export interface NavTabProps extends Omit<NavLinkProps, 'to'> {
    to: string;
    children: ReactNode;
    end?: boolean;
    className?: string;
}

const NavTab: React.FC<NavTabProps> = ({ to, children, end = false, className = '', ...props }) => {
    const baseClasses = "px-4 py-2 sm:px-6 sm:py-3 rounded-full font-medium capitalize transition-colors whitespace-nowrap";
    const activeClasses = "bg-primary-600 text-white shadow-md";
    const inactiveClasses = "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50";

    return (
        <NavLink
            to={to}
            end={end}
            className={({ isActive }) =>
                `${baseClasses} ${isActive ? activeClasses : inactiveClasses} ${className}`
            }
            {...props}
        >
            {children}
        </NavLink>
    );
};

export default NavTab;
