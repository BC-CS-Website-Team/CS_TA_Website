/**
 * Footer.jsx
 * Footer component with GitHub link and styling.
 */

import { FaGithub, FaHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white h-16 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link to="/about" className="hover:text-gray-300">
              About
            </Link>
            <a
              href="https://github.com/BC-CS-Website-Team/CS_TA_Website"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              GitHub
            </a>
            <span>|</span>
            <a
              href="mailto:cs@berea.edu"
              className="hover:text-gray-300"
            >
              Contact Us
            </a>
          </div>
          <div className="text-sm">
            {new Date().getFullYear()} Berea College CS Department
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer
