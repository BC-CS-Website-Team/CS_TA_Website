/**
 * TeamMemberModal.jsx
 * Modal component for displaying detailed team member information
 */

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
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="p-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/3">
                <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="w-full md:w-2/3 space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{member.name}</h2>
                  {member.role && (
                    <p className="text-xl text-primary-600">{member.role}</p>
                  )}
                </div>
                
                {member.email && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact</h3>
                    <a 
                      href={`mailto:${member.email}`}
                      className="text-primary-600 hover:text-primary-700 flex items-center gap-2"
                    >
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {member.email}
                    </a>
                  </div>
                )}
                
                {member.officeHours && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Office Hours</h3>
                    <p className="text-gray-600">{member.officeHours}</p>
                  </div>
                )}
                
                {member.courses && member.courses.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Courses</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {member.courses.map((course, index) => (
                        <li key={index}>{course}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {member.description && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">About</h3>
                    <p className="text-gray-600 whitespace-pre-line">{member.description}</p>
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
