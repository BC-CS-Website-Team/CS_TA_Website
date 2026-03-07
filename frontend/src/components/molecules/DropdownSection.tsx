/**
 * DropdownSection.jsx
 * Reusable dropdown component for career development sections
 */

import { useState, ReactNode } from 'react'
import { FaChevronUp, FaChevronDown } from 'react-icons/fa'
import Text from '../atoms/Text'

export interface DropdownSectionProps {
  title: string;
  children: ReactNode;
}

const DropdownSection: React.FC<DropdownSectionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border rounded-lg mb-4 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 bg-gray-50 hover:bg-gray-100 flex items-center justify-between font-medium text-gray-900"
      >
        <Text as="span" className="font-medium">{title}</Text>
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
