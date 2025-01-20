/**
 * TeamSidebar.jsx
 * Sidebar navigation component for the Meet the Team section.
 */

import { NavLink } from 'react-router-dom'
import { FaUsers, FaChalkboardTeacher, FaCode, FaRobot, FaTools } from 'react-icons/fa'

const navItems = [
  {
    to: '/meet-the-team',
    icon: FaUsers,
    text: 'Overview',
    exact: true
  },
  {
    to: '/meet-the-team/tas',
    icon: FaChalkboardTeacher,
    text: 'Meet CS TAs'
  },
  {
    to: '/meet-the-team/programmers',
    icon: FaCode,
    text: 'Meet Programmers'
  },
  {
    to: '/meet-the-team/robotics',
    icon: FaRobot,
    text: 'Meet Robotics Club'
  },
  {
    to: '/meet-the-team/makerspace',
    icon: FaTools,
    text: 'Meet Makerspace TAs'
  }
]

const TeamSidebar = () => {
  return (
    <aside className="bg-white shadow-md rounded-lg p-4 w-64">
      <nav>
        <ul className="space-y-2">
          {navItems.map(({ to, icon: Icon, text, exact }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={exact}
                className={({ isActive }) =>
                  `flex items-center space-x-2 px-4 py-2 rounded-md transition-colors duration-200
                   ${isActive
                    ? 'bg-primary-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                   }`
                }
              >
                <Icon className="text-xl" />
                <span>{text}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default TeamSidebar
