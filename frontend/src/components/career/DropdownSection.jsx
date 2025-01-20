/**
 * DropdownSection.jsx
 * Reusable dropdown component for career development sections
 */

import { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

const DropdownSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border rounded-lg mb-4 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 bg-gray-50 hover:bg-gray-100 flex items-center justify-between font-medium text-gray-900"
      >
        <span>{title}</span>
        {isOpen ? (
          <FaChevronUp className="text-gray-500" />
        ) : (
          <FaChevronDown className="text-gray-500" />
        )}
      </button>
      {isOpen && (
        <div className="p-4 bg-white">
          {children}
        </div>
      )}
    </div>
  )
}

export default DropdownSection
