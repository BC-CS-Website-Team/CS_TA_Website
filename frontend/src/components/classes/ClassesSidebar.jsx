import { NavLink } from 'react-router-dom'
import { FaBook, FaChevronRight } from 'react-icons/fa'

const ClassesSidebar = () => {
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
    }
  ]

  return (
    <aside className="w-64 bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Classes</h2>
      <nav>
        <ul className="space-y-2">
          <li>
            <NavLink
              to="/classes"
              end
              className={({ isActive }) =>
                `flex items-center px-4 py-2 rounded-md transition-colors ${
                  isActive
                    ? 'bg-primary-50 text-primary-700'
                    : 'text-gray-700 hover:bg-gray-50'
                }`
              }
            >
              <FaBook className="mr-3" />
              Overview
            </NavLink>
          </li>
          {classes.map((classItem) => (
            <li key={classItem.id}>
              <NavLink
                to={classItem.path}
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 rounded-md transition-colors ${
                    isActive
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`
                }
              >
                <FaChevronRight className="mr-3" />
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
