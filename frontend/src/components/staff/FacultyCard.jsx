/**
 * FacultyCard.jsx
 * Component for displaying faculty member information in a card format.
 */

import PropTypes from 'prop-types'

const FacultyCard = ({ faculty, onClick }) => {
  return (
    <div 
      className="flex flex-col items-center text-center border border-gray-200 rounded-lg p-4 shadow-md hover:shadow-lg 
                 hover:scale-105 hover:border-primary-600 transition-all duration-300 w-full max-w-[200px] mx-auto"
      onClick={() => onClick(faculty)}
    >
      <div className="w-[150px] h-[150px] mb-4 rounded-full border border-gray-200 overflow-hidden group">
        <img
          src={faculty.image}
          alt={faculty.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 m-0">
        {faculty.name}
      </h3>
    </div>
  )
}

FacultyCard.propTypes = {
  faculty: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
}

export default FacultyCard
