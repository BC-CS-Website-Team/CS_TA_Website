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
    }
  ]

  return (
    <div className="prose max-w-none">
      <h1>Computer Science Classes at Berea College</h1>
      
      <section className="mb-8">
        <h2>Academic Programs</h2>
        <p>
          Berea College offers comprehensive programs in Computer Science, including 
          majors and minors designed to prepare students for success in the tech 
          industry or graduate studies. You can read about the available academic 
          paths here:{' '}
          <a
            href="https://www.berea.edu/academics/departments-programs/computer-science/majors-and-minors"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center"
          >
            Computer Science Majors and Minors
            <ExternalLinkIcon className="ml-1" />
          </a>
        </p>
      </section>

      <section className="mb-8">
        <h2>Course Offerings</h2>
        <p>
          Our department provides a wide range of courses covering fundamental 
          concepts, advanced topics, and specialized areas in computer science. 
          A description of each course can be read here:{' '}
          <a
            href="https://berea.smartcatalogiq.com/en/current/catalog/course-descriptions/csc-computer-science/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center"
          >
            Course Descriptions
            <ExternalLinkIcon className="ml-1" />
          </a>
        </p>
      </section>

      <section>
        <h2>Required Core Courses</h2>
        <div className="grid gap-6">
          {courses.map((course) => (
            <div
              key={course.code}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <Link
                to={course.path}
                className="text-xl font-semibold text-primary-600 hover:text-primary-700 no-underline"
              >
                {course.code}: {course.title}
              </Link>
              <p className="mt-2 text-gray-600">{course.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default ClassesOverview
