/**
 * TeamMemberModal.jsx
 * Modal component for displaying detailed team member information
 */

import Image from '../atoms/Image'
import Heading from '../atoms/Heading'
import Text from '../atoms/Text'
import Link from '../atoms/Link'
import { FaTimes, FaEnvelope } from 'react-icons/fa'

const TeamMemberModal = ({ member, onClose }) => {
  if (!member) return null

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all"
        onClick={e => e.stopPropagation()}
      >
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 focus:outline-none z-10"
          >
            <FaTimes className="text-2xl" />
          </button>

          <div className="p-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/3">
                <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="w-full md:w-2/3 space-y-6">
                <div>
                  <Heading level={2} className="text-3xl font-bold text-gray-900 mb-2">{member.name}</Heading>
                  {member.role && (
                    <Text className="text-xl text-primary-600">{member.role}</Text>
                  )}
                </div>

                {member.email && (
                  <div>
                    <Heading level={3} className="text-lg font-semibold text-gray-900 mb-2">Contact</Heading>
                    <Link
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-2"
                      external
                    >
                      <FaEnvelope />
                      {member.email}
                    </Link>
                  </div>
                )}

                {member.officeHours && (
                  <div>
                    <Heading level={3} className="text-lg font-semibold text-gray-900 mb-2">Office Hours</Heading>
                    <Text>{member.officeHours}</Text>
                  </div>
                )}

                {member.courses && member.courses.length > 0 && (
                  <div>
                    <Heading level={3} className="text-lg font-semibold text-gray-900 mb-2">Courses</Heading>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {member.courses.map((course, index) => (
                        <li key={index}><Text as="span">{course}</Text></li>
                      ))}
                    </ul>
                  </div>
                )}

                {member.description && (
                  <div>
                    <Heading level={3} className="text-lg font-semibold text-gray-900 mb-2">About</Heading>
                    <Text className="whitespace-pre-line">{member.description}</Text>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamMemberModal
