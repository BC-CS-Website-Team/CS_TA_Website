/**
 * MemberCard.jsx
 * Generic card component for displaying team member information.
 */

import PropTypes from 'prop-types'

const MemberCard = ({ member, onClick }) => {
  return (
    <div 
      className="group cursor-pointer transform transition-all duration-200 hover:scale-105"
      onClick={() => onClick(member)}
    >
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="aspect-w-3 aspect-h-4">
          <img
            src={member.image}
            alt={member.name}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600">
            {member.name}
          </h3>
          {member.role && (
            <p className="text-sm text-gray-600">
              {member.role}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

MemberCard.propTypes = {
  member: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    role: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
}

export default MemberCard
