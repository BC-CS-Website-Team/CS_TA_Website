/**
 * TeamMemberCard.jsx
 * Reusable card component for displaying team member information
 */

const TeamMemberCard = ({ image, name, role, description, onClick }) => {
  return (
    <div 
      className="photo-card bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
      onClick={onClick}
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={`${name}'s profile`}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        {role && (
          <p className="text-sm text-gray-600 mt-1">{role}</p>
        )}
      </div>
    </div>
  )
}

export default TeamMemberCard
