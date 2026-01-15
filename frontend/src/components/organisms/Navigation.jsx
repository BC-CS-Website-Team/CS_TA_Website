/**
 * Navigation.jsx
 * Main navigation component for the CS TA Website.
 * Handles the top navigation bar, dropdown menus, and routing.
 */

import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  FaHome, FaUsers, FaBriefcase, FaUserFriends,
  FaChalkboardTeacher, FaProjectDiagram,
  FaClock, FaCaretDown, FaBars, FaTimes
} from 'react-icons/fa'

const navItems = [
  {
    to: '/',
    icon: FaHome,
    label: 'Home'
  },
  {
    to: '/meet-the-team',
    icon: FaUsers,
    label: <span className="whitespace-nowrap">Meet The<br />Team</span>,
    dropdown: [
      { to: '/meet-the-team', label: 'Overview' },
      { to: '/meet-the-team/tas', label: 'Meet CS TAs' },
      { to: '/meet-the-team/programmers', label: 'Meet Programmers' },
      { to: '/meet-the-team/robotics', label: 'Meet Robotics' },
      { to: '/meet-the-team/makerspace', label: 'Meet Makerspace TAs' }
    ]
  },
  {
    to: '/career-development',
    icon: FaBriefcase,
    label: 'Career Development',
    dropdown: [
      { to: '/career-development', label: 'Overview' },
      { to: '/career-development/resources', label: 'Resources' },
      { to: '/career-development/conferences', label: 'Conferences' },
      { to: '/career-development/internships', label: 'Internships' }
    ]
  },
  { to: '/clubs', icon: FaUserFriends, label: 'CS Clubs' },
  { to: '/classes', icon: FaChalkboardTeacher, label: 'Classes' },
  { to: '/student-projects', icon: FaProjectDiagram, label: 'Student Projects' },
  { to: '/evening-lab', icon: FaClock, label: 'Evening Lab' }
]

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
        className={`nav-link flex items-center ${isActive ? 'nav-link-active' : ''} ${mobile ? 'w-full py-3 px-4 hover:bg-gray-50' : ''}`}
      >
        <item.icon className={`w-5 h-5 mr-2 ${mobile ? 'text-gray-500' : ''}`} />
        <div className={`text-center ${mobile ? 'text-left flex-1' : ''}`}>{item.label}</div>
        {item.dropdown && <FaCaretDown className={`ml-1 transition-transform ${isDropdownOpen && mobile ? 'rotate-180' : ''}`} />}
      </Link>

      {item.dropdown && (
        <ul className={`
          ${mobile
            ? `${isDropdownOpen ? 'block' : 'hidden'} bg-gray-50 pl-8`
            : 'dropdown-menu absolute hidden group-hover:block bg-white shadow-lg rounded-md py-2 min-w-[200px] z-50 left-0'}
        `}>
          {item.dropdown.map((dropdownItem) => (
            <li key={dropdownItem.to}>
              <Link
                to={dropdownItem.to}
                onClick={onClick}
                className={`block ${mobile ? 'py-2 px-4 text-gray-600 hover:text-primary-600' : 'dropdown-item px-4 py-2 hover:bg-gray-100'}`}
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

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center" onClick={() => setIsOpen(false)}>
              <img
                className="h-10 w-auto"
                src="/BC_CS_TA_logo.png"
                alt="BC CS TA Logo"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            {navItems.map((item) => (
              <NavItem key={item.to} item={item} />
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <FaTimes className="block h-6 w-6" />
              ) : (
                <FaBars className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} bg-white border-t border-gray-200 shadow-lg max-h-[80vh] overflow-y-auto`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <NavItem
              key={item.to}
              item={item}
              mobile={true}
              onClick={() => {
                if (!item.dropdown) setIsOpen(false)
              }}
            />
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navigation
