/**
 * CareerResources.jsx
 * Career resources page component
 */

import { ExternalLinkIcon } from '@chakra-ui/icons'

const ResourceSection = ({ title, items }) => (
  <section className="mb-8">
    <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={index} className="text-gray-600">
          {item.link ? (
            <>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-800 inline-flex items-center"
              >
                {item.text}
                <ExternalLinkIcon className="ml-1 h-4 w-4" />
              </a>
              {item.description && (
                <span className="ml-2">– {item.description}</span>
              )}
            </>
          ) : (
            item.text
          )}
        </li>
      ))}
    </ul>
  </section>
)

const CareerResources = () => {
  const resources = [
    {
      title: "Choosing a Major and Exploring Careers",
      items: [
        {
          link: "https://www.beyondberea.org/channels/choosing-a-major/",
          text: "Choosing a Major",
          description: "Guidance on selecting a major aligned with your career goals"
        },
        {
          text: "Explore career pathways and industries to discover your passions"
        }
      ]
    },
    {
      title: "Finding Opportunities & Employers",
      items: [
        {
          link: "https://www.beyondberea.org/channels/finding-opportunities-employers/",
          text: "Job Search Tips",
          description: "Resources for finding and applying to jobs and internships"
        },
        {
          text: "Learn how to connect with potential employers effectively"
        }
      ]
    },
    {
      title: "Creating Resumes, CVs, and Cover Letters",
      items: [
        {
          link: "https://www.beyondberea.org/channels/creating-resumes-cvs-cover-letters/",
          text: "Resume and CV Building",
          description: "Craft professional resumes and CVs"
        },
        {
          text: "Write compelling cover letters tailored to specific roles"
        }
      ]
    },
    {
      title: "Networking",
      items: [
        {
          link: "https://www.beyondberea.org/channels/networking/",
          text: "Networking Skills",
          description: "Develop strategies for effective networking"
        },
        {
          text: "Connect with professionals and alumni to expand your network"
        }
      ]
    },
    {
      title: "Professional Development",
      items: [
        {
          link: "https://www.beyondberea.org/channels/professional-you/",
          text: "Professional You",
          description: "Learn about professional attire, behavior, and etiquette"
        },
        {
          text: "Prepare for workplace environments and expectations"
        }
      ]
    },
    {
      title: "Interviewing",
      items: [
        {
          link: "https://www.beyondberea.org/channels/interviewing/",
          text: "Interview Preparation",
          description: "Tips for acing interviews and making a great impression"
        },
        {
          text: "Practice common interview questions and techniques"
        }
      ]
    },
    {
      title: "Evaluating Offers",
      items: [
        {
          link: "https://www.beyondberea.org/channels/evaluating-offers/",
          text: "Evaluating Job Offers",
          description: "Understand how to assess job offers and negotiate terms"
        },
        {
          text: "Make informed decisions about your career path"
        }
      ]
    },
    {
      title: "Planning for Graduate School",
      items: [
        {
          link: "https://www.beyondberea.org/channels/planning-for-graduate-school/",
          text: "Graduate School Preparation",
          description: "Guidance on applying to and succeeding in graduate school"
        },
        {
          text: "Explore funding options and application tips"
        }
      ]
    },
    {
      title: "Internship and Funding Opportunities",
      items: [
        {
          link: "https://www.beyondberea.org/channels/student-internships/",
          text: "Student Internships",
          description: "Discover internship opportunities available across various fields"
        },
        {
          text: "Find internships tailored to your interests and career goals"
        },
        {
          link: "https://www.beyondberea.org/channels/take-a-class/",
          text: "Professional Development Courses",
          description: "Explore classes that can enhance your skills and career prospects"
        }
      ]
    }
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Career Development
        </h1>
        <p className="text-lg text-gray-600">
          Welcome to the Career Development Resource Center. Explore guidance, resources, and tools to help you build a successful career journey.
        </p>
      </div>

      {resources.map((section, index) => (
        <ResourceSection
          key={index}
          title={section.title}
          items={section.items}
        />
      ))}
    </div>
  )
}

export default CareerResources
