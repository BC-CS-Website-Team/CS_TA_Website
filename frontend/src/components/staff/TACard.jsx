/**
 * TACard.jsx
 * Component for displaying TA information in a card format.
 */

import PropTypes from 'prop-types'

const TACard = ({ ta, onClick }) => {
  return (
    <div 
      className="group cursor-pointer transform transition-all duration-200 hover:scale-105"
      onClick={() => onClick(ta)}
    >
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="aspect-w-3 aspect-h-4">
          <img
            src={ta.image}
            alt={ta.name}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600">
            {ta.name}
          </h3>
        </div>
      </div>
    </div>
  )
}

TACard.propTypes = {
  ta: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
}

export default TACard
