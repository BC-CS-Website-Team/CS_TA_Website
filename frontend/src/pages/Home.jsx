/**
 * Home.jsx
 * Landing page component for the CS TA Website.
 * Displays faculty profiles, program information, and quick links.
 */

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import FacultyCard from '../components/staff/FacultyCard'
import FacultyModal from '../components/staff/FacultyModal'

const facultyData = [
  {
    id: 'Scott-Heggen',
    name: 'Dr. Scott Heggen',
    image: '/src/assets/images/drHeggen1.jpeg',
    email: 'heggens@berea.edu',
    hours: [
      [{ start: 13, end: 14 }],
      [{ start: 13, end: 14 }],
      [{ start: 13, end: 14 }],
      [{ start: 13, end: 14 }],
      [{ start: 13, end: 14 }],
      [{ start: 13, end: 14 }],
      [{ start: 13, end: 14 }]
    ],
    courses: [
      ["M/W/F", "CSC226(A): Software Design and Implementation", "9:20-10:30"],
      ["M/W/F", "CSC226(B): Software Design and Implementation", "10:40-11:50"]
    ],
    links: [
      ["Slack", "https://bereacs.slack.com/team/U3TH18WAC"],
      ["Berea Profile", "https://www.berea.edu/academics/departments-programs/computer-science/faculty-staff/dr-scott-heggen"]
    ]
  },
  {
    id: 'Jan-Pearce',
    name: 'Dr. Jan Pearce',
    image: '/src/assets/images/drPearce1.jpg',
    email: 'pearcej@berea.edu',
    hours: [
      [{ start: 13, end: 14 }],
      [{ start: 13, end: 14 }],
      [{ start: 13, end: 14 }],
      [{ start: 13, end: 14 }],
      [{ start: 13, end: 14 }],
      [{ start: 13, end: 14 }],
      [{ start: 13, end: 14 }]
    ],
    courses: [
      ["M/W/F", "CSC236: Data Structures", "9:20-10:30"]
    ],
    links: [
      ["Slack", "https://bereacs.slack.com/team/U3TH18WAC"],
      ["Berea Profile", "https://www.berea.edu/academics/departments-programs/computer-science/faculty-staff/dr-jan-pearce"]
    ]
  },
  {
    id: 'Mario-Nakazawa',
    name: 'Dr. Mario Nakazawa',
    image: '/src/assets/images/drNakazawa1.jpg'
  },
  {
    id: 'Jasmine-Jones',
    name: 'Dr. Jasmine Jones',
    image: '/src/assets/images/drJones1.jpg'
  },
  {
    id: 'Jacqueline-Boggs',
    name: 'Dr. Jacqueline "Jacci" Boggs',
    image: '/src/assets/images/drBoggs1.png'
  },
  {
    id: 'Deanna-Wilborne',
    name: 'Prof. Deanna Wilborne',
    image: '/src/assets/images/profWilborne1.jpeg'
  },
  {
    id: 'Brian-Ramsey',
    name: 'Brian Ramsey',
    image: '/src/assets/images/brian1.png'
  }
]

const Home = () => {
  const [selectedFaculty, setSelectedFaculty] = useState(null)

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to the Student Computer Science Website!
          </h1>
          <p className="text-xl text-gray-600">
            Explore our website to learn about our initiatives and meet our team.
          </p>
        </div>

        {/* Faculty Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Computer Science Faculty & Staff
          </h2>
          <p className="text-gray-600 mb-8">
            Click on a photo for more information on each faculty and staff member.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
            {facultyData.map((faculty) => (
              <FacultyCard
                key={faculty.id}
                faculty={faculty}
                onClick={setSelectedFaculty}
              />
            ))}
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="space-y-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Computer Science TAs
            </h2>
            <Link 
              to="/meet-the-team/tas"
              className="btn-primary inline-block"
            >
              Meet Our TAs
            </Link>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Computer Science Courses
            </h2>
            <div className="space-y-4">
              <Link 
                to="/classes"
                className="btn-primary block sm:inline-block sm:mr-4"
              >
                View Our Courses
              </Link>
              <a
                href="https://berea.smartcatalogiq.com/en/current/catalog/departments-of-study/computer-science/computer-and-information-science-b-a/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary block sm:inline-block"
              >
                View the Berea CS Course Catalog
                <ExternalLinkIcon className="inline ml-2" />
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              The Computer Science Department
            </h2>
            <a
              href="https://www.berea.edu/academics/departments-programs/computer-science"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              Info on the Computer Science Department
              <ExternalLinkIcon className="inline ml-2" />
            </a>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              What is Computer Science?
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-4">
                Computer scientists have transformed the world we live in, and with a computer science degree, 
                you can become the next leader in our technology-driven society. With four areas of concentration, 
                hands-on curriculum, a caring and accessible faculty, and numerous labor and co-curricular opportunities, 
                you'll be ready to create the next great advancement in technology. Coming in 2024, our new technology 
                building will support opportunities to explore advanced computing subjects in our interactive robotics 
                and visualization lab, a makerspace designed to foster creativity and exploration, and a hands-on 
                networking and security lab.
              </p>
              <p>
                We've designed an inclusive curriculum that begins with the basics of programming and data structures, 
                and culminates with advanced topics in computer science and a capstone experience. The curriculum is 
                also flexible enough to accommodate students with varying levels of prior programming experience.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Faculty Modal */}
      <FacultyModal
        faculty={selectedFaculty}
        onClose={() => setSelectedFaculty(null)}
      />
    </div>
  )
}

export default Home
