/**
 * Footer.jsx
 * Footer component with GitHub link and styling.
 */

import { FaGithub, FaHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 w-full">
      <div className="container px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-6">
            <Link to="/about" className="hover:text-gray-300 transition-colors">
              About This Project
            </Link>
            <a
              href="https://github.com/BC-CS-Website-Team/CS_TA_Website"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors flex items-center gap-2"
            >
              <FaGithub className="text-xl" /> GitHub
            </a>
            <div className="flex items-center gap-2 text-gray-300">
              Made with <FaHeart className="text-red-500" /> by CS TAs
            </div>
          </div>
          <div className="text-sm text-gray-300">
            {new Date().getFullYear()} Berea College CS Department
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer
