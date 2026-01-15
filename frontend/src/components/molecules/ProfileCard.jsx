/**
 * ProfileCard.jsx
 * Generic card component for displaying user profile information.
 * Replaces FacultyCard, MemberCard, and TeamMemberCard.
 */

import PropTypes from 'prop-types'

const ProfileCard = ({ image, name, role, onClick, variant = 'default', className = '' }) => {
    const isRound = variant === 'round'

    return (
        <div
            className={`
        group cursor-pointer bg-white rounded-lg shadow-md overflow-hidden 
        transform transition-all duration-300 hover:scale-105 hover:shadow-xl
        ${isRound ? 'flex flex-col items-center p-4 border border-gray-200' : ''}
        ${className}
      `}
            onClick={onClick}
        >
            <div className={`
        overflow-hidden relative
        ${isRound ? 'w-[150px] h-[150px] rounded-full border border-gray-200 mb-4' : 'aspect-square w-full'}
      `}>
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
            </div>
            <div className={`w-full ${isRound ? 'text-center p-0' : 'p-4 text-center'}`}>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600">
                    {name}
                </h3>
                {role && (
                    <p className="text-sm text-gray-600 mt-1">
                        {role}
                    </p>
                )}
            </div>
        </div>
    )
}

ProfileCard.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string,
    onClick: PropTypes.func,
    variant: PropTypes.oneOf(['default', 'round']),
    className: PropTypes.string,
}

export default ProfileCard
