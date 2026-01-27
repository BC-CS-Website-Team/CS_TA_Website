/**
 * Navigation.jsx
 * Main navigation component for the CS TA Website.
 * Handles the top navigation bar, dropdown menus, and routing.
 */

import { useState } from 'react'
import { useLocation, useNavigate, Link as RouterLink } from 'react-router-dom'
import {
  FaHome, FaUsers, FaBriefcase, FaUserFriends,
  FaChalkboardTeacher, FaProjectDiagram,
  FaClock, FaCaretDown, FaBars, FaTimes, FaExternalLinkAlt
} from 'react-icons/fa'
import { useAuth } from '../../context/AuthContext'
import { NavItem } from '../molecules'
import { Link, Button, Text } from '../atoms'

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
      { to: '/career-development/internships', label: 'Internships' },
      { to: '/career-development/opportunities', label: 'Opportunities' },

    ]
  },
  { to: '/clubs', icon: FaUserFriends, label: 'CS Clubs' },
  { to: '/classes', icon: FaChalkboardTeacher, label: 'Classes' },
  { to: '/student-projects', icon: FaProjectDiagram, label: 'Student Projects' },
  { to: '/evening-lab', icon: FaClock, label: 'Evening Lab' }
]

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen)

  const handleLogout = () => {
    logout();
    setIsOpen(false);
    navigate('/');
  }

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
          <div className="hidden xl:flex items-center space-x-4">
            {navItems.map((item) => (
              <NavItem key={item.to} item={item} />
            ))}

            <div className="border-l pl-4 ml-4 flex items-center space-x-3">
              {isAuthenticated ? (
                <div className="relative group">
                  <button
                    className="nav-link flex items-center focus:outline-none"
                    onClick={() => { }} // Optional: handle click if needed, but hover handles dropdown
                  >
                    <span className="text-gray-700 text-sm font-medium mr-1">Welcome, {user?.email}</span>
                    <FaCaretDown className="ml-1 text-gray-500" />
                  </button>
                  <ul className="dropdown-menu right-0 left-auto">
                    {user?.is_superuser && (
                      <li>
                        <Link
                          to="/admin"
                          className="dropdown-item font-semibold text-primary-700"
                        >
                          Admin Dashboard
                        </Link>
                      </li>
                    )}
                    <li>
                      <Link
                        to="/profile-settings" // Placeholder link
                        className="dropdown-item"
                      >
                        Profile Settings
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={handleLogout}
                        className="dropdown-item text-red-600 w-full text-left"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              ) : (
                <RouterLink
                  to="/login"
                  className="btn-primary"
                >
                  Login
                </RouterLink>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center">
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
      <div className={`xl:hidden ${isOpen ? 'block' : 'hidden'} bg-white border-t border-gray-200 shadow-lg max-h-[80vh] overflow-y-auto`}>
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

          <div className="border-t pt-4 mt-4 px-2">
            {isAuthenticated ? (
              <div className="space-y-3">
                <div className="px-4 text-gray-700 text-sm font-medium border-b pb-2 mb-2">
                  Signed in as: <span className="block text-gray-900 truncate">{user?.email}</span>
                </div>
                {user?.is_superuser && (
                  <Link
                    to="/admin"
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-left px-4 py-2 text-base font-bold text-primary-700 hover:bg-gray-50 rounded-md"
                  >
                    Admin Dashboard
                  </Link>
                )}
                <Link
                  to="/profile-settings"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-left px-4 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 rounded-md"
                >
                  Profile Settings
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-base font-medium text-red-600 hover:bg-red-50 rounded-md"
                >
                  Logout
                </button>
              </div>
            ) : (
              <RouterLink
                to="/login"
                onClick={() => setIsOpen(false)}
                className="btn-primary w-full text-center block"
              >
                Login
              </RouterLink>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
