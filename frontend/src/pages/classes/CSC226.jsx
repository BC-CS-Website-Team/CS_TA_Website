import { ExternalLinkIcon } from '@chakra-ui/icons'
import { FaBook, FaCode, FaLightbulb } from 'react-icons/fa'

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

const CSC226 = () => {
  const resources = [
    {
      title: 'Course Syllabus',
      description: 'Official course syllabus and requirements',
      link: 'https://example.com/syllabus',
      icon: FaBook
    },
    {
      title: 'Python Documentation',
      description: 'Official Python programming language documentation',
      link: 'https://docs.python.org/3/',
      icon: FaCode
    },
    {
      title: 'Study Guides',
      description: 'TA-created study materials and practice problems',
      link: 'https://example.com/study-guides',
      icon: FaLightbulb
    }
  ]

  return (
    <div className="prose max-w-none">
      <h1>CSC 226: Software Design and Implementation</h1>

      <section className="mb-8">
        <h2>Course Overview</h2>
        <p>
          CSC 226 introduces students to software design and implementation with an 
          emphasis on object-oriented design. You'll learn about:
        </p>
        <ul>
          <li>Object-oriented programming concepts</li>
          <li>Algorithm development using pseudocode</li>
          <li>Stepwise refinement methodology</li>
          <li>Testing and debugging strategies</li>
          <li>Data types and structures</li>
          <li>Functions and file handling</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2>Prerequisites</h2>
        <p>
          A grade of C or higher in CSC 126 or permission of instructor. Strong 
          problem-solving skills and basic programming knowledge are recommended.
        </p>
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
          There are several ways to get help in CSC 226:
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

export default CSC226
