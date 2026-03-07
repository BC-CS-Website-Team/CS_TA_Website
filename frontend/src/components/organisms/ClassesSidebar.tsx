import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBook, FaChevronRight, FaGraduationCap, FaBars, FaTimes } from 'react-icons/fa'

const ClassesSidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const classes = [
    {
      id: 'csc226',
      name: 'CSC 226',
      title: 'Software Design and Implementation',
      path: '/classes/csc226'
    },
    {
      id: 'csc236',
      name: 'CSC 236',
      title: 'Data Structures',
      path: '/classes/csc236'
    },
    {
      id: 'csc246',
      name: 'CSC 246',
      title: 'Scalable Algorithms & Objects',
      path: '/classes/csc246'
    }
  ]

  return (
    <aside className="bg-white shadow-md rounded-lg p-4 w-full md:w-64 mb-6 md:mb-0">
      <div className="md:hidden flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-700">Classes Menu</h2>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-600 focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <nav className={`${isOpen ? 'block' : 'hidden'} md:block`}>
        <ul className="space-y-2">
          <li>
            <NavLink
              to="/classes/learning-resources"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `flex items-center space-x-2 px-4 py-2 rounded-md transition-colors duration-200 ${isActive
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
                }`
              }
            >
              <FaGraduationCap className="text-xl" />
              <span>Learning Resources</span>
            </NavLink>
          </li>

          <li className="pt-4">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider px-4 mb-2">
              Classes
            </h2>
          </li>

          <li>
            <NavLink
              to="/classes"
              end
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `flex items-center space-x-2 px-4 py-2 rounded-md transition-colors duration-200 ${isActive
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
                }`
              }
            >
              <FaBook className="text-xl" />
              <span>Overview</span>
            </NavLink>
          </li>

          {classes.map((classItem) => (
            <li key={classItem.id}>
              <NavLink
                to={classItem.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `flex items-center space-x-2 px-4 py-2 rounded-md transition-colors duration-200 ${isActive
                    ? 'bg-primary-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                  }`
                }
              >
                <FaChevronRight className="text-xl" />
                <div>
                  <div className="font-medium">{classItem.name}</div>
                  <div className="text-sm text-gray-500">{classItem.title}</div>
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default ClassesSidebar
