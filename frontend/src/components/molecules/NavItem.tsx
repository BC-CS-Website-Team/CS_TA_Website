
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaCaretDown } from 'react-icons/fa';

export interface NavDropdownItem {
    to: string;
    label: string;
}

export interface NavItemType {
    to: string;
    label: React.ReactNode;
    icon?: React.ElementType;
    dropdown?: NavDropdownItem[];
}

export interface NavItemProps {
    item: NavItemType;
    onClick?: () => void;
    mobile?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ item, onClick, mobile }) => {
    const location = useLocation()
    const isActive = location.pathname === item.to ||
        (item.dropdown && location.pathname.startsWith(item.to))
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    const toggleDropdown = (e: React.MouseEvent) => {
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

export default NavItem;
