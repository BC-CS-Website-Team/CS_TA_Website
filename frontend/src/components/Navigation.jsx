/**
 * Navigation.jsx
 * Main navigation component for the CS TA Website.
 * Handles the top navigation bar, dropdown menus, and routing.
 */

import { Link, useLocation } from 'react-router-dom'
import { FaHome, FaUsers, FaBriefcase, FaSitemap, FaUserFriends, 
         FaChalkboardTeacher, FaGraduationCap, FaProjectDiagram, 
         FaClock, FaCaretDown } from 'react-icons/fa'

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
  {
    to: '/committees',
    icon: FaSitemap,
    label: 'CS Dept Committees',
    dropdown: [
      { to: '/committees', label: 'Overview' },
      { to: '/committees/tech-ethics', label: 'Tech Ethics Committee' },
      { to: '/committees/career-dev', label: 'Tech Career Development' },
      { to: '/committees/diversity', label: 'Diversity in STEM' },
      { to: '/committees/creative-space', label: 'Creative Space' }
    ]
  },
  { to: '/clubs', icon: FaUserFriends, label: 'CS Clubs' },
  { to: '/classes', icon: FaChalkboardTeacher, label: 'Classes' },
  { to: '/alumni', icon: FaGraduationCap, label: 'Alumni Network' },
  { to: '/student-projects', icon: FaProjectDiagram, label: 'Student Projects' },
  { to: '/evening-lab', icon: FaClock, label: 'Evening Lab' }
]

const NavItem = ({ item }) => {
  const location = useLocation()
  const isActive = location.pathname === item.to || 
                   (item.dropdown && location.pathname.startsWith(item.to))

  return (
    <div className="relative group">
      <Link
        to={item.to}
        className={`nav-link flex items-center ${isActive ? 'nav-link-active' : ''}`}
      >
        <item.icon className="w-5 h-5 mr-2" />
        <div className="text-center">{item.label}</div>
        {item.dropdown && <FaCaretDown className="ml-1" />}
      </Link>

      {item.dropdown && (
        <ul className="dropdown-menu">
          {item.dropdown.map((dropdownItem) => (
            <li key={dropdownItem.to}>
              <Link
                to={dropdownItem.to}
                className="dropdown-item"
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
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img
                className="h-10 w-auto"
                src="/BC_CS_TA_logo.png"
                alt="BC CS TA Logo"
              />
            </Link>
            <ul className="ml-10 flex items-center space-x-4">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavItem item={item} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
