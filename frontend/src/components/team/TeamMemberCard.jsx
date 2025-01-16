/**
 * TeamMemberCard.jsx
 * Reusable card component for displaying team member information
 */

const TeamMemberCard = ({ image, name, role, description, onClick }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform duration-200 hover:scale-105"
      onClick={onClick}
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        {role && (
          <p className="text-sm text-gray-600">{role}</p>
        )}
        {description && (
          <p className="mt-2 text-sm text-gray-500">{description}</p>
        )}
      </div>
    </div>
  )
}

export default TeamMemberCard
