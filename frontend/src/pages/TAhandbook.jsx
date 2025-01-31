/**
 * About.jsx
 * Displays information about the CS TA Website project, its history, and contributors
 */

import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const ProjectSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="mb-8 bg-white rounded-lg shadow-md overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex justify-between items-center bg-primary-600 text-white hover:bg-primary-700 transition-colors"
      >
        <h2 className="text-xl font-semibold">{title}</h2>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      {isOpen && <div className="p-6">{children}</div>}
    </div>
  );
};

const TAhandbook = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-full">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">CS TA Handbook</h1>

      <ProjectSection title="CS TA Handbook">
        <div className="flex justify-center items-center">
          <iframe
            src="https://docs.google.com/document/d/1NqtHFc1GsaK4AzTIpfe74IpW2Rj8z2nc/preview"
            title="CS TA Handbook"
            className="rounded-lg shadow-lg"
            style={{
              width: '80vw',  // 80% of the viewport width
              height: '80vh', // 80% of the viewport height
              border: 'none',
            }}
            allowFullScreen
          />
        </div>
      </ProjectSection>
    </div>
  );
};

export default TAhandbook;
