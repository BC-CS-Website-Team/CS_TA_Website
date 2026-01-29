/**
 * CareerSidebar.jsx
 * Navigation sidebar for career development section
 */

import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBriefcase, FaBook, FaUsers, FaLaptopCode, FaBars, FaTimes, FaLightbulb } from 'react-icons/fa'

const links = [
  {
    to: '/career-development',
    label: 'Overview',
    icon: FaBriefcase,
    exact: true
  },
  {
    to: '/career-development/resources',
    label: 'Career Resources',
    icon: FaBook
  },
  {
    to: '/career-development/conferences',
    label: 'Conferences',
    icon: FaUsers
  },
  {
    to: '/career-development/internships',
    label: 'Internships',
    icon: FaLaptopCode
  },
  {
    to: '/career-development/opportunities',
    label: 'Opportunities',
    icon: FaLightbulb
  }
]

const CareerSidebar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <aside className="bg-white shadow-md rounded-lg p-4 w-full md:w-64 mb-6 md:mb-0">
      <div className="md:hidden flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-700">Menu</h2>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-600 focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <nav className={`${isOpen ? 'block' : 'hidden'} md:block`}>
        <ul className="space-y-2">
          {links.map(({ to, label, icon: Icon, exact }) => (
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
                <span>{label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default CareerSidebar
