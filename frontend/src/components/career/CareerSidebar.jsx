/**
 * CareerSidebar.jsx
 * Navigation sidebar for career development section
 */

import { NavLink } from 'react-router-dom'

const links = [
  { to: '/career-development', label: 'Overview' },
  { to: '/career-development/resources', label: 'Career Resources' },
  { to: '/career-development/conferences', label: 'Conferences' },
  { to: '/career-development/internships', label: 'Internships' }
]

const CareerSidebar = () => {
  return (
    <nav className="bg-white rounded-lg shadow-md p-4">
      <ul className="space-y-2">
        {links.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                `block px-4 py-2 rounded-md transition-colors ${
                  isActive
                    ? 'bg-primary-100 text-primary-900 font-medium'
                    : 'text-gray-600 hover:bg-gray-50'
                }`
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default CareerSidebar
