
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaCaretDown } from 'react-icons/fa';
import PropTypes from 'prop-types';

const NavItem = ({ item, onClick, mobile }) => {
    const location = useLocation()
    const isActive = location.pathname === item.to ||
        (item.dropdown && location.pathname.startsWith(item.to))
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    const toggleDropdown = (e) => {
        if (mobile && item.dropdown) {
            e.preventDefault()
            setIsDropdownOpen(!isDropdownOpen)
        }
    }

    return (
        <div className={`relative group ${mobile ? 'w-full' : ''}`}>
            <Link
                to={item.to}
                onClick={(e) => {
                    if (item.dropdown && mobile) {
                        toggleDropdown(e)
                    } else if (onClick) {
                        onClick()
                    }
                }}
                className={`nav-link ${isActive ? 'nav-link-active' : ''} ${mobile ? 'w-full py-3 px-4 hover:bg-gray-50' : ''}`}
            >
                {item.icon && <item.icon className={`w-5 h-5 mr-2 ${mobile ? 'text-gray-500' : ''}`} />}
                <div className={`text-center ${mobile ? 'text-left flex-1' : ''}`}>{item.label}</div>
                {item.dropdown && <FaCaretDown className={`ml-1 transition-transform ${isDropdownOpen && mobile ? 'rotate-180' : ''}`} />}
            </Link>

            {item.dropdown && (
                <ul className={`
          ${mobile
                        ? `${isDropdownOpen ? 'block' : 'hidden'} bg-gray-50 pl-8`
                        : 'dropdown-menu group-hover:block'}
        `}>
                    {item.dropdown.map((dropdownItem) => (
                        <li key={dropdownItem.to}>
                            <Link
                                to={dropdownItem.to}
                                onClick={onClick}
                                className={`dropdown-item ${mobile ? 'py-2 px-4 text-gray-600 hover:text-primary-600' : ''}`}
                            >
                                {dropdownItem.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

NavItem.propTypes = {
    item: PropTypes.shape({
        to: PropTypes.string.isRequired,
        label: PropTypes.node.isRequired,
        icon: PropTypes.elementType,
        dropdown: PropTypes.arrayOf(PropTypes.shape({
            to: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired
        }))
    }).isRequired,
    onClick: PropTypes.func,
    mobile: PropTypes.bool
}

export default NavItem;
