import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const ProjectSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="mb-8 bg-white rounded-lg shadow-md overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-8 text-left flex justify-between items-center bg-primary-600 text-white hover:bg-primary-700 transition-colors duration-150"
      >
        <h2 className="text-2xl font-semibold">{title}</h2>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      <div
        className={`transition-all duration-300 ${
          isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="p-8">{children}</div>
      </div>
    </div>
  );
};

const TAhandbook = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-full">
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-lg shadow-lg p-8 mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">CS TA Handbook</h1>
        <p className="text-primary-100 text-lg">
          A guide for teaching assistants in the computer science department to excel in their role.
        </p>
      </div>

      <ProjectSection title="CS TA Handbook">
        <div className="flex justify-center items-center">
          <iframe
            src="https://docs.google.com/document/d/1NqtHFc1GsaK4AzTIpfe74IpW2Rj8z2nc/preview"
            title="CS TA Handbook"
            className="rounded-lg shadow-lg"
            style={{
              width: '80vw',
              height: '80vh',
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
