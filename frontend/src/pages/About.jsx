/**
 * About.jsx
 * Displays information about the CS TA Website project, its history, and contributors
 */

import { useState } from 'react'
import { FaChevronDown, FaChevronUp, FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const ProjectSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className="mb-8 bg-white rounded-lg shadow-md overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex justify-between items-center bg-primary-600 text-white hover:bg-primary-700 transition-colors"
      >
        <h2 className="text-xl font-semibold">{title}</h2>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      {isOpen && (
        <div className="p-6">
          {children}
        </div>
      )}
    </div>
  )
}

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">About This Project</h1>

      <ProjectSection title="Overview">
        <p className="text-gray-700 mb-4">
          The CS TA Website Project is a collaborative web development effort to create a comprehensive
          website for our Computer Science Teaching Assistant (TA) program. It serves as both a learning
          experience for TAs of various skill levels and a practical tool for showcasing our program.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2 text-gray-900">Key Features</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Home page with program overview</li>
              <li>Committee pages</li>
              <li>Clubs information</li>
              <li>TA profiles</li>
              <li>Contributions showcase</li>
              <li>Alumni section</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2 text-gray-900">Technologies</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>React</li>
              <li>Vite</li>
              <li>TailwindCSS</li>
              <li>Netlify</li>
            </ul>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection title="Project Timeline">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Phase 1: Interactive Learning Experience</h3>
            <p className="text-gray-700">
              The initial phase served as an interactive lesson plan for Teaching Assistants, designed to teach
              web development, foster teamwork, build resumes, and develop presentation skills through hands-on
              experience with real-world project management.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Phase 2: Winter Labor Implementation</h3>
            <p className="text-gray-700">
              During the winter labor period, a select team of TAs collaborated to complete core website content,
              implement essential features, and establish the basic infrastructure for the project.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Phase 3: React Migration and Sustainability</h3>
            <p className="text-gray-700">
              The final phase focused on modernization and long-term sustainability, including migrating to React,
              implementing modern frontend practices, and establishing processes for year-to-year knowledge transfer.
            </p>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection title="Contributing">
        <p className="text-gray-700 mb-4">
          We welcome contributions from all CS TAs! Whether you're fixing a bug, adding a feature, or
          improving documentation, every contribution helps make this project better.
        </p>
        <div className="flex flex-col space-y-4">
          <a
            href="https://github.com/BC-CS-Website-Team/CS_TA_Website"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors w-fit"
          >
            <FaGithub className="mr-2" />
            View on GitHub
          </a>
          <a
            href="https://github.com/BC-CS-Website-Team/CS_TA_Website/graphs/contributors"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors w-fit"
          >
            <FaExternalLinkAlt className="mr-2" />
            View Contributors
          </a>
        </div>
      </ProjectSection>

      <ProjectSection title="Support">
        <p className="text-gray-700 mb-4">
          Need help or have questions? Here's how to get support:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>Check the existing issues on GitHub for similar problems</li>
          <li>Create a new issue with a descriptive title and detailed description</li>
          <li>For urgent matters, contact Nicholas Hamilton at hamiltonn@berea.edu</li>
        </ol>
      </ProjectSection>

      <ProjectSection title="Project Leadership">
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Project Lead 2024-2025</h3>
            <p className="text-gray-700">Nicholas Hamilton</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Project Lead 2025-2026</h3>
            <p className="text-gray-700">TBD</p>
          </div>
        </div>
      </ProjectSection>
    </div>
  )
}

export default About
