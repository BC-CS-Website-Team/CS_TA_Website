/**
 * ContributorsSidebar.jsx
 * Navigation sidebar for contributors section
 */

import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBook, FaCode, FaServer, FaTools, FaBars, FaTimes } from 'react-icons/fa'

const links = [
    {
        to: '/contributors',
        label: 'Getting Started',
        icon: FaBook,
        exact: true
    },
    {
        to: '/contributors/frontend',
        label: 'Frontend Architecture',
        icon: FaCode
    },
    {
        to: '/contributors/backend',
        label: 'Backend Architecture',
        icon: FaServer
    },
    {
        to: '/contributors/workflow',
        label: 'Workflow & Git',
        icon: FaTools
    }
]

const ContributorsSidebar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <aside className="bg-white shadow-md rounded-lg p-4 w-full h-fit sticky top-24">
            <div className="lg:hidden flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-700">Guide Menu</h2>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-gray-600 focus:outline-none"
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            <nav className={`${isOpen ? 'block' : 'hidden'} lg:block`}>
                <div className="pb-4 mb-4 border-b border-gray-200 hidden lg:block">
                    <h2 className="text-lg font-bold text-gray-900 px-2">
                        Contributors Guide
                    </h2>
                    <p className="px-2 text-xs text-gray-500 mt-1">
                        For new and existing developers
                    </p>
                </div>
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

export default ContributorsSidebar
