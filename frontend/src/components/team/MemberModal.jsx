/**
 * MemberModal.jsx
 * Generic modal component for displaying detailed team member information.
 */

import PropTypes from 'prop-types'
import { formatTime } from '../../utils/timeUtils'

const MemberModal = ({ member, onClose }) => {
  if (!member) return null

  const generateTableRow = (hoursPerDay = []) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    return (
      <div className="grid grid-cols-7 gap-2">
        {days.map((day, index) => (
          <div key={day} className="text-center">
            <div className="font-semibold mb-2">{day}</div>
            <div className="space-y-1">
              {hoursPerDay[index]?.map((hours, hourIndex) => (
                <div key={hourIndex} className="bg-gray-100 p-1 rounded">
                  {formatTime(hours.start)} - {formatTime(hours.end)}
                </div>
              )) || <div className="text-gray-400">-</div>}
            </div>
          </div>
        ))}
      </div>
    )
  }

  const generateCourseTabs = (scheduleArray) => {
    return (
      <div className="space-y-2">
        {scheduleArray.map((schedule, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow">
            <div className="font-semibold">{schedule[0]}</div>
            <div className="text-gray-700">{schedule[1]}</div>
            <div className="text-gray-500 text-sm">{schedule[2]}</div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div 
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
          onClick={onClose}
        ></div>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                <div className="flex items-center mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      {member.name}
                    </h3>
                    {member.role && (
                      <p className="text-sm text-gray-600">
                        {member.role}
                      </p>
                    )}
                  </div>
                </div>

                {member.hours && (
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Office Hours</h4>
                    {generateTableRow(member.hours)}
                  </div>
                )}

                {member.courses && (
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Courses</h4>
                    {generateCourseTabs(member.courses)}
                  </div>
                )}

                {member.email && (
                  <div className="space-y-2">
                    <a 
                      href={`mailto:${member.email}`}
                      className="text-primary-600 hover:text-primary-700 block"
                    >
                      {member.email}
                    </a>
                  </div>
                )}

                {member.links && member.links.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {member.links.map((link, index) => (
                      <a
                        key={index}
                        href={link[1]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:text-primary-700 block"
                      >
                        {link[0]}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:mt-0 sm:w-auto sm:text-sm"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

MemberModal.propTypes = {
  member: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    role: PropTypes.string,
    email: PropTypes.string,
    hours: PropTypes.arrayOf(
      PropTypes.arrayOf(
        PropTypes.shape({
          start: PropTypes.number,
          end: PropTypes.number
        })
      )
    ),
    courses: PropTypes.arrayOf(
      PropTypes.arrayOf(PropTypes.string)
    ),
    links: PropTypes.arrayOf(
      PropTypes.arrayOf(PropTypes.string)
    )
  }),
  onClose: PropTypes.func.isRequired,
}

export default MemberModal
