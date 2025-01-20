/**
 * Internships.jsx
 * Internship opportunities page component
 */

import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Image } from '@chakra-ui/react'

const InternshipCard = ({ title, image, description, link }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
    {image && (
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
    )}
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-3">
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary-600 inline-flex items-center"
          >
            {title}
            <ExternalLinkIcon className="ml-1 h-4 w-4" />
          </a>
        ) : (
          title
        )}
      </h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
)

const ExternalResourceCard = ({ title, description, links }) => (
  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    {description && <p className="text-gray-600 mb-4">{description}</p>}
    <ul className="space-y-3">
      {links.map((link, index) => (
        <li key={index}>
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 hover:text-primary-800 inline-flex items-center"
          >
            {link.text}
            <ExternalLinkIcon className="ml-1 h-4 w-4" />
          </a>
          {link.description && (
            <p className="text-sm text-gray-500 mt-1">{link.description}</p>
          )}
        </li>
      ))}
    </ul>
  </div>
)

const Internships = () => {
  const bereaInternships = [
    {
      title: "Student Software Developer",
      image: "/images/ssdt.jpeg",
      description: "The Student Software Developer is an internship opportunity at Berea College. The team currently manages the website for Center For Excellence in Learning Through Service and maintains the Codebase. The team is currently led by Dr. Heggen, Brian Ramsey, and Karina.",
      link: "https://www.linkedin.com/company/berea-college-student-software-development-team"
    },
    {
      title: "Research Opportunities with Professors",
      description: "Berea College offers a range of research opportunities with professors from Computer Science departments, providing students with valuable hands-on experience.",
      link: null
    }
  ]

  const researchHighlight = {
    title: "Research Internship at Purdue University",
    description: "This internship allows Berea College students to work at the Collaborative Research Lab at Purdue University, focusing on machine learning (ML) and artificial intelligence (AI) research. This opportunity provides students with practical research experience in cutting-edge fields alongside Purdue's faculty and researchers."
  }

  const externalResources = {
    title: "External Resources",
    description: "We have compiled a list of resources for each group to make it easier for them to look for internship opportunities.",
    links: [
      {
        url: "https://github.com/SimplifyJobs/Summer2025-Internships?tab=readme-ov-file",
        text: "Simplify's Summer 2025 Internships List"
      },
      {
        url: "https://joinhandshake.com/",
        text: "Handshake",
        description: "Find more opportunities at Handshake"
      },
      {
        url: "https://www.beyondberea.org/channels/student-internships/#uc_jobs_list_widget-11",
        text: "Internship Office Featured Internships"
      },
      {
        url: "https://careerservices.fas.harvard.edu/resources/technology-internships-for-first-years-and-sophomores/",
        text: "Harvard's First-Year and Sophomore Internships",
        description: "Curated list of technology internships specifically for freshmen and sophomores"
      },
      {
        url: "https://www.linkedin.com",
        text: "LinkedIn Job Board",
        description: "Offers a lot of internship opportunities and personalized job alerts"
      }
    ]
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Internship Opportunities
        </h1>
        <p className="text-lg text-gray-600">
          Explore internship opportunities that would help you enhance your education here at Berea.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Internship Opportunities at Berea College
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {bereaInternships.map((internship, index) => (
            <InternshipCard key={index} {...internship} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Research Opportunity</h2>
        <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3">{researchHighlight.title}</h3>
          <p className="text-gray-700">{researchHighlight.description}</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">External Resources</h2>
        <ExternalResourceCard {...externalResources} />
      </section>

      <section>
        <p className="text-gray-600">
          For additional research opportunities, please reach out to professors in the Computer Science Department. 
          They can guide you toward projects that match your interests and goals.
        </p>
      </section>
    </div>
  )
}

export default Internships
