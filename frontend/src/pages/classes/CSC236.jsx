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

const CSC236 = () => {
  const resources = [
    {
      title: 'Course Syllabus',
      description: 'Official course syllabus and requirements',
      link: 'https://example.com/syllabus',
      icon: FaBook
    },
    {
      title: 'Data Structures Visualizations',
      description: 'Interactive visualizations of common data structures',
      link: 'https://www.cs.usfca.edu/~galles/visualization/Algorithms.html',
      icon: FaChartLine
    },
    {
      title: 'Study Guides',
      description: 'TA-created study materials and practice problems',
      link: 'https://example.com/study-guides',
      icon: FaLightbulb
    }
  ]

  const dataStructures = [
    {
      name: 'Lists and Arrays',
      concepts: ['Dynamic Arrays', 'Linked Lists', 'Array Lists']
    },
    {
      name: 'Trees',
      concepts: ['Binary Trees', 'Binary Search Trees', 'AVL Trees', 'Red-Black Trees']
    },
    {
      name: 'Hash Tables',
      concepts: ['Hash Functions', 'Collision Resolution', 'Load Factor']
    },
    {
      name: 'Queues and Stacks',
      concepts: ['FIFO/LIFO', 'Priority Queues', 'Deques']
    }
  ]

  return (
    <div className="prose max-w-none">
      <h1>CSC 236: Data Structures</h1>

      <section className="mb-8">
        <h2>Course Overview</h2>
        <p>
          CSC 236 continues the study of software design and implementation from an 
          object-oriented perspective, with a focus on data structures and algorithm 
          analysis. This course explores:
        </p>
        <ul>
          <li>Common data structures and their implementations</li>
          <li>Algorithm analysis and Big-O notation</li>
          <li>Memory management and efficiency</li>
          <li>Design tradeoffs in data structure selection</li>
          <li>Experimental analysis of algorithms</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2>Prerequisites</h2>
        <p>
          A grade of C or higher in CSC 226 and MAT 135. Strong understanding of 
          object-oriented programming concepts is essential.
        </p>
      </section>

      <section className="mb-8">
        <h2>Key Data Structures</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {dataStructures.map((ds, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {ds.name}
              </h3>
              <ul className="list-disc list-inside text-gray-600">
                {ds.concepts.map((concept, idx) => (
                  <li key={idx}>{concept}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2>Course Resources</h2>
        <div className="grid gap-6 mt-4">
          {resources.map((resource, index) => (
            <ResourceCard key={index} {...resource} />
          ))}
        </div>
      </section>

      <section>
        <h2>Getting Help</h2>
        <p>
          There are several ways to get help in CSC 236:
        </p>
        <ul>
          <li>
            <strong>Office Hours:</strong> Visit your professor during scheduled 
            office hours
          </li>
          <li>
            <strong>Evening Lab:</strong> Get help from TAs in the evening lab 
            sessions
          </li>
          <li>
            <strong>Slack:</strong> Ask questions in the course Slack channel
          </li>
          <li>
            <strong>Study Groups:</strong> Form study groups with your classmates
          </li>
        </ul>
      </section>
    </div>
  )
}

export default CSC236
