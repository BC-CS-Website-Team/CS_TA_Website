import { ExternalLinkIcon } from '@chakra-ui/icons'
import { FaBook, FaCode, FaLightbulb, FaChartLine } from 'react-icons/fa'

const ResourceCard = ({ title, description, link, icon: Icon }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
  >
    <div className="flex items-start">
      <div className="flex-shrink-0">
        <Icon className="h-6 w-6 text-primary-600" />
      </div>
      <div className="ml-4">
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600">
          {title}
        </h3>
        <p className="mt-1 text-gray-600">{description}</p>
      </div>
    </div>
  </a>
)

const CSC246 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">CSC 246</h1>
      <div className="bg-white rounded-lg shadow-lg p-12 text-center">
        <h2 className="text-2xl font-semibold text-primary-600 mb-4">Coming Soon!</h2>
        <p className="text-gray-600">We're working on making this page awesome. Check back later!</p>
      </div>
    </div>
  )
}

export default CSC246
