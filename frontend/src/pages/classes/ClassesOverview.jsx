import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'

const ClassesOverview = () => {
  const courses = [
    {
      code: 'CSC 226',
      title: 'Software Design and Implementation',
      description: 'In this course, students learn to design and implement software with an emphasis on object-oriented design. The course will include pseudocode, stepwise refinement, and testing for algorithm development. Other programming topics include data types, arrays, structures, functions, and files.',
      path: '/classes/csc226'
    },
    {
      code: 'CSC 236',
      title: 'Data Structures',
      description: 'This course continues the study of software design and implementation from an object-oriented perspective. The design and implementation of software is fundamentally about tradeoffs between how fast our code runs and the amount of memory it consumes while running. We will explore the common structure used to represent data (queues, lists, trees, and hash tables, to name a few), the design tradeoffs we must make when choosing between them, and the experimental analysis of our algorithms and structures as expressed in code.',
      path: '/classes/csc236'
    },
    {
      code: 'CSC 246',
      title: 'Scalable Algorithms & Objects',
      description: 'Weaving ethics as a theme throughout, this course will teach students to utilize professional software engineering techniques and tools as they deepen their understanding of object-oriented design and implementation and utilize more complicated data structures including sets, red-black trees, heaps, graphs, maps, and hash maps/tables. Students will extend their learning about the scalability of algorithms as they explore important algorithmic techniques such as string matching, subsequence matching, regular expressions, backtracking, divide and conquer, greedy strategies, branch and bound, dynamic, and randomization.',
      path: '/classes/csc246'
    }
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-lg shadow-lg p-8 mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">
          Computer Science Classes at Berea College
        </h1>
        <p className="text-primary-100 text-lg">
          Explore our comprehensive computer science curriculum designed to prepare you for success.
        </p>
      </div>
      
      <section className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
          <span className="bg-primary-100 text-primary-700 p-2 rounded-lg mr-3">
            Academic Programs
          </span>
        </h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-4">
            Berea College offers comprehensive programs in Computer Science, including 
            majors and minors designed to prepare students for success in the tech 
            industry or graduate studies. You can read about the available academic 
            paths here:{' '}
            <a
              href="https://www.berea.edu/academics/departments-programs/computer-science/majors-and-minors"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
            >
              Computer Science Majors and Minors
              <ExternalLinkIcon className="ml-1 h-4 w-4" />
            </a>
          </p>
          <p className="text-gray-600">
            The Navigation Bar to the left contains the respective class syllabus, 
            as well as TA provided study guides and outside resources.
          </p>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
          <span className="bg-primary-100 text-primary-700 p-2 rounded-lg mr-3">
            Course Offerings
          </span>
        </h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600">
            Our department provides a wide range of courses covering fundamental 
            concepts, advanced topics, and specialized areas in computer science. 
            A description of each course can be read here:{' '}
            <a
              href="https://berea.smartcatalogiq.com/en/current/catalog/course-descriptions/csc-computer-science/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
            >
              Course Descriptions
              <ExternalLinkIcon className="ml-1 h-4 w-4" />
            </a>
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <span className="bg-primary-100 text-primary-700 p-2 rounded-lg mr-3">
            Required Core Courses
          </span>
        </h2>
        <div className="grid gap-6">
          {courses.map((course) => (
            <div
              key={course.code}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group"
            >
              <div className="p-6">
                <Link
                  to={course.path}
                  className="inline-block text-xl font-bold text-primary-600 hover:text-primary-700 mb-2 group-hover:translate-x-1 transition-transform duration-200"
                >
                  {course.code}: {course.title}
                </Link>
                <p className="text-gray-600 leading-relaxed">{course.description}</p>
              </div>
              <div className="px-6 py-3 bg-gray-50 border-t border-gray-100">
                <Link
                  to={course.path}
                  className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700"
                >
                  View course details
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default ClassesOverview
