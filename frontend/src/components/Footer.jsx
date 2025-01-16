/**
 * Footer.jsx
 * Footer component with GitHub link and styling.
 */

import { FaGithub, FaHeart } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-primary-600 text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-2">
          <a
            href="https://github.com/BC-CS-Website-Team/CS_TA_Website"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-white hover:text-gray-200 transition-colors duration-200"
          >
            <FaGithub className="text-2xl" />
            <span className="text-lg">GitHub</span>
          </a>
          <p className="text-sm flex items-center space-x-1">
            <span>Made with</span>
            <FaHeart className="text-red-500" />
            <span>by Berea College CS</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
