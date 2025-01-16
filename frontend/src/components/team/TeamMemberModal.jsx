/**
 * TeamMemberModal.jsx
 * Modal component for displaying detailed team member information
 */

const TeamMemberModal = ({ member, onClose }) => {
  if (!member) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold text-gray-900">{member.name}</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/3">
              <img
                src={member.image}
                alt={member.name}
                className="w-full rounded-lg shadow-md"
              />
            </div>
            
            <div className="w-full md:w-2/3 space-y-4">
              {member.role && (
                <div>
                  <h3 className="font-semibold text-gray-900">Role</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              )}
              
              {member.email && (
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <a 
                    href={`mailto:${member.email}`}
                    className="text-primary-600 hover:text-primary-700"
                  >
                    {member.email}
                  </a>
                </div>
              )}
              
              {member.officeHours && (
                <div>
                  <h3 className="font-semibold text-gray-900">Office Hours</h3>
                  <p className="text-gray-600">{member.officeHours}</p>
                </div>
              )}
              
              {member.description && (
                <div>
                  <h3 className="font-semibold text-gray-900">About</h3>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              )}
              
              {member.courses && member.courses.length > 0 && (
                <div>
                  <h3 className="font-semibold text-gray-900">Courses</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    {member.courses.map((course, index) => (
                      <li key={index}>{course}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamMemberModal
