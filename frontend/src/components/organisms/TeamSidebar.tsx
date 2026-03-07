/**
 * TeamSidebar.jsx
 * Sidebar navigation component for the Meet the Team section.
 */

import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaUsers, FaChalkboardTeacher, FaCode, FaRobot, FaTools, FaBars, FaTimes } from 'react-icons/fa'

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

const TeamSidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <aside className="bg-white shadow-md rounded-lg p-4 w-full md:w-64 mb-6 md:mb-0">
      <div className="md:hidden flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-700">Team Menu</h2>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-600 focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <nav className={`${isOpen ? 'block' : 'hidden'} md:block`}>
        <ul className="space-y-2">
          {navItems.map(({ to, icon: Icon, text, exact }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={exact}
                onClick={() => setIsOpen(false)}
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
