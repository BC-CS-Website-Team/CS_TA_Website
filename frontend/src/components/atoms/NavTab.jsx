import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavTab = ({ to, children, end = false, className = '' }) => {
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
        >
            {children}
        </NavLink>
    );
};

NavTab.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    end: PropTypes.bool,
    className: PropTypes.string,
};

export default NavTab;
