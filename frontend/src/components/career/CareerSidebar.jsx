/**
 * CareerSidebar.jsx
 * Navigation sidebar for career development section
 */

import { NavLink } from 'react-router-dom'
import { FaBriefcase, FaBook, FaUsers, FaLaptopCode } from 'react-icons/fa'

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
  }
]

const CareerSidebar = () => {
  return (
    <aside className="bg-white shadow-md rounded-lg p-4 w-64">
      <nav>
        <ul className="space-y-2">
          {links.map(({ to, label, icon: Icon, exact }) => (
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
