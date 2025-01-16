/**
 * CareerDevelopment.jsx
 * Overview page for career development section
 */

import { ExternalLinkIcon } from '@chakra-ui/icons'
import DropdownSection from '../../components/career/DropdownSection'

const CareerDevelopment = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Career Development
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Explore resources and opportunities for your CS career growth.
        </p>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Resources</h2>
        <p className="text-gray-600">
          This section contains the resources available on campus including funding, etc.
        </p>

        <DropdownSection title="Funding">
          <ul className="space-y-3">
            <li>
              <a
                href="https://www.berea.edu/discovery-funds"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-800 flex items-center"
              >
                Discovery Fund
                <ExternalLinkIcon className="ml-1 h-4 w-4" />
              </a>
            </li>
            <li>
              <a
                href="https://forms.gle/a6M6jxWbGtggzQ2W6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-800 flex items-center"
              >
                CS Department Funding
                <ExternalLinkIcon className="ml-1 h-4 w-4" />
              </a>
            </li>
            <li>
              <a
                href="https://buildyourfuture.withgoogle.com/scholarships/google-conference-scholarships"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-800 flex items-center"
              >
                Google Conference Scholarship
                <ExternalLinkIcon className="ml-1 h-4 w-4" />
              </a>
            </li>
            <li>
              <a
                href="https://www.beyondberea.org/funding-opportunities/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-800 flex items-center"
              >
                More Funding Opportunities
                <ExternalLinkIcon className="ml-1 h-4 w-4" />
              </a>
            </li>
          </ul>
        </DropdownSection>

        <DropdownSection title="Tools">
          <ul className="space-y-3">
            <li>
              <a
                href="https://resumeswap.org/create?from=resume.yok.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-800 flex items-center"
              >
                Resume Builder
                <ExternalLinkIcon className="ml-1 h-4 w-4" />
              </a>
            </li>
            <li>
              <a
                href="https://neetcode.io/roadmap"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-800 flex items-center"
              >
                Technical Interview Preparation
                <ExternalLinkIcon className="ml-1 h-4 w-4" />
              </a>
            </li>
          </ul>
        </DropdownSection>

        <div className="py-4">
          <h3 className="text-xl font-semibold mb-2">
            <a
              href="https://www.beyondberea.org/channels/career-development/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-800 flex items-center"
            >
              Career Development Department
              <ExternalLinkIcon className="ml-1 h-4 w-4" />
            </a>
          </h3>
        </div>
      </section>
    </div>
  )
}

export default CareerDevelopment
