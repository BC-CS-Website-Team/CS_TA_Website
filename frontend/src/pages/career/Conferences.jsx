/**
 * Conferences.jsx
 * Conferences page component displaying various conference opportunities
 */

import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Alert, AlertIcon } from '@chakra-ui/react'

const ConferenceCard = ({ name, description, dates, location, registrationLink, videoLink }) => (
  <div className="mb-6 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <h3 className="text-xl font-bold text-gray-900 mb-3">{name}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <ul className="space-y-2">
      <li><span className="font-semibold">Dates:</span> {dates}</li>
      <li><span className="font-semibold">Location:</span> {location}</li>
      {registrationLink && (
        <li>
          <span className="font-semibold">Registration:</span>{' '}
          <a
            href={registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 hover:text-primary-800 inline-flex items-center"
          >
            Register Here
            <ExternalLinkIcon className="ml-1 h-4 w-4" />
          </a>
        </li>
      )}
      {videoLink && (
        <li>
          <span className="font-semibold">Video:</span>{' '}
          <a
            href={videoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 hover:text-primary-800 inline-flex items-center"
          >
            Watch Video
            <ExternalLinkIcon className="ml-1 h-4 w-4" />
          </a>
        </li>
      )}
    </ul>
  </div>
)

const FundingSection = () => (
  <section className="mb-8">
    <h2 className="text-2xl font-bold text-gray-900 mb-4">Funding Opportunities</h2>
    <p className="text-gray-600 mb-4">
      Berea College has several programs that support students in pursuing their dreams beyond Berea. 
      While there are more opportunities, the list below includes the ones that are particularly relevant.
    </p>
    <ul className="space-y-4">
      <li>
        <span className="font-semibold">Google Conference Scholarship:</span>{' '}
        Funds offered by Google for various conferences.{' '}
        <a
          href="https://buildyourfuture.withgoogle.com/scholarships/google-conference-scholarships"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-600 hover:text-primary-800 inline-flex items-center"
        >
          Learn More
          <ExternalLinkIcon className="ml-1 h-4 w-4" />
        </a>
      </li>
      <li>
        <span className="font-semibold">Discovery Funds:</span>{' '}
        Grants to support off-campus educational experiences, such as conference attendance, travel, or independent learning.{' '}
        <a
          href="https://www.berea.edu/discovery-funds"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-600 hover:text-primary-800 inline-flex items-center"
        >
          Learn More
          <ExternalLinkIcon className="ml-1 h-4 w-4" />
        </a>
      </li>
      <li>
        <span className="font-semibold">The CS Department Funds:</span>{' '}
        Grants that are offered by the Computer Science Department on a rolling basis. To apply for these funds, contact{' '}
        <a href="mailto:heggens@berea.edu" className="text-primary-600 hover:text-primary-800">
          Dr. Heggen
        </a>
        {' '}or{' '}
        <a href="mailto:jonesj2@berea.edu" className="text-primary-600 hover:text-primary-800">
          Dr. Jones
        </a>
        {' '}at least 2-3 weeks in advance.
      </li>
    </ul>
    <Alert status="warning" className="mt-4" variant="left-accent">
      <AlertIcon />
      Important: Before applying for the CS fund, we encourage you to apply for off-campus funding opportunities.
    </Alert>
  </section>
)

const PreparationSection = () => (
  <section className="mb-8">
    <h2 className="text-2xl font-bold text-gray-900 mb-4">To Do List</h2>
    <p className="text-gray-600 mb-4">
      Before attending any conference, it's important to prepare well so you maximize your chances of landing an offer.
    </p>
    <ul className="list-disc list-inside space-y-2 text-gray-600">
      <li>Research participating companies in advance</li>
      <li>Update and tailor your resume to highlight relevant skills</li>
      <li>Practice your elevator pitch or personal introduction</li>
      <li>Plan and prepare thoughtful questions for potential employers</li>
      <li>Refresh your LinkedIn profile and ensure consistency with your resume</li>
      <li>Print your resume just in case</li>
      <li>Choose professional attire to present yourself in the best light possible</li>
      <li>Review the conference schedule and plan accordingly</li>
      <li>Set specific goals (e.g., connect with X number of people)</li>
      <li>Stay organized. Keep track of who you speak to and follow up</li>
    </ul>
  </section>
)

const ExperiencesSection = () => (
  <section className="mb-8">
    <h2 className="text-2xl font-bold text-gray-900 mb-4">Articles and Videos</h2>
    <p className="text-gray-600 mb-4">
      Here's a list of articles and videos from our students detailing their conference experiences.
    </p>
    <ul className="space-y-3">
      <li>
        <span className="font-semibold">Ali Ramazani:</span>{' '}
        <a
          href="https://www.youtube.com/watch?v=nQYwJn_9Yj4&t=49s"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-600 hover:text-primary-800 inline-flex items-center"
        >
          Watch Video
          <ExternalLinkIcon className="ml-1 h-4 w-4" />
        </a>
      </li>
      <li>
        <span className="font-semibold">Joyce Nimley:</span>{' '}
        <a
          href="https://www.youtube.com/watch?v=EOBk0X1QctQ"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-600 hover:text-primary-800 inline-flex items-center"
        >
          Watch Video
          <ExternalLinkIcon className="ml-1 h-4 w-4" />
        </a>
      </li>
    </ul>
  </section>
)

const Conferences = () => {
  const conferences = [
    {
      name: "National Society of Black Engineers (NSBE)",
      description: "A four-day event that provides networking, professional and personal development, and celebratory activities. The theme for 2025 is Inspire! Excel! Impact!",
      dates: "March 20 - 24, 2025",
      location: "Atlanta, Georgia",
      registrationLink: "https://convention.nsbe.org/registration-2024/#rates",
      videoLink: "https://www.youtube.com/watch?v=YOUR_NSBE_VIDEO_LINK"
    },
    {
      name: "Society of Hispanic Professional Engineers (SHPE)",
      description: "A yearly gathering of Hispanic professionals and students in STEM, focusing on networking, competitions, professional development, career fairs, and awards.",
      dates: "October 2 - 9, 2025",
      location: "Philadelphia, PA Convention Center",
      registrationLink: "https://shpe.org/2025-2/",
      videoLink: "https://www.youtube.com/watch?v=YOUR_SHPE_VIDEO_LINK"
    },
    {
      name: "AfroTech",
      description: "A leading U.S. multicultural tech event that celebrates and advances Black professionals by bringing together industry leaders to share insights and collaborate on business opportunities.",
      dates: "November 13 - 16, 2025",
      location: "Houston, Texas",
      registrationLink: "https://attendee-aftc2025.streampoint.com/?utm_campaign=afrotech2025&utm_source=afrotech_website&utm_medium=referral&utm_content=hero&utm_term=buy_ticket",
      videoLink: "https://www.youtube.com/watch?v=nRSCdsF6iiQ"
    },
    {
      name: "Grace Hopper Celebration",
      description: "A significant gathering for women and nonbinary technologists, offering a range of workshops, technical sessions, and networking opportunities both in-person and virtually.",
      dates: "October 8 - 11, 2025",
      location: "Philadelphia, Pennsylvania, at the Pennsylvania Convention Center",
      registrationLink: "https://ghc.anitab.org/register/",
      videoLink: "https://www.youtube.com/watch?v=YOUR_GHC_VIDEO_LINK"
    }
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Conferences</h1>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
        <p className="text-lg text-gray-600 mb-8">
          The Computer Science Department at Berea College organizes and funds various conferences 
          to enhance the professional development of students. These conferences provide opportunities 
          for networking, learning, and sharing knowledge in the field of computer science.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Major Conferences Our Students Attend</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {conferences.map((conference, index) => (
            <ConferenceCard key={index} {...conference} />
          ))}
        </div>
      </section>

      <FundingSection />
      <PreparationSection />
      <ExperiencesSection />
    </div>
  )
}

export default Conferences
