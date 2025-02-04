import { useState } from 'react'

const LearningResources = () => {
  const [openSections, setOpenSections] = useState({
    beginners: false,
    git: false
  })

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-lg shadow-lg p-8 mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">Learning Resources</h1>
        <p className="text-primary-100 text-lg">
          A collection of helpful resources to support your learning journey
        </p>
      </div>
      
      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow-lg w-full">
          <button
            onClick={() => toggleSection('beginners')}
            className="w-full p-8 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-150"
          >
            <h3 className="text-2xl font-semibold text-primary-600">For Computer Science Beginners</h3>
            <svg
              className={`w-6 h-6 transform transition-transform duration-200 ${openSections.beginners ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          <div className={`transition-all duration-300 ${openSections.beginners ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            <div className="p-8 border-t space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Welcome to Computer Science!</h4>
                <p className="text-gray-600">Computer Science is your first step into an exciting world of technology and problem-solving! Whether you're starting with Python, Java, or another language, you'll learn how to design software and think algorithmically.</p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">What is a Programming Language?</h4>
                <p className="text-gray-600">Just like humans use languages (English, Spanish, etc.) to communicate with each other, we use programming languages to communicate with computers. Programming languages are known for different strengths - some are beginner-friendly, while others are optimized for specific tasks.</p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Your Coding Workspace: IDEs</h4>
                <p className="text-gray-600">An IDE (Integrated Development Environment) is like Microsoft Word, but for coding:</p>
                <ul className="list-disc pl-6 text-gray-600 mt-2">
                  <li>Just like Word helps you write documents by catching spelling mistakes, IDEs help you write code by catching coding mistakes</li>
                  <li>Word gives you tools like formatting and spell-check; IDEs give you tools like code completion and debugging</li>
                  <li>Word shows you when you've made grammar errors; IDEs show you when you've made syntax errors in your code</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Key Things to Know</h4>
                <ul className="list-disc pl-6 text-gray-600">
                  <li><strong>Don't be afraid to make mistakes!</strong> Making errors and fixing them is a normal part of learning to code</li>
                  <li><strong>Practice is crucial:</strong> Programming is like learning a new language - the more you practice, the better you get</li>
                  <li><strong>Ask questions:</strong> Computer science has its own vocabulary, so don't hesitate to ask when you don't understand a term</li>
                  <li><strong>AI is a fantastic tool, if used correctly!</strong> Understanding the fundamentals of algorithmic thinking is crucial</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Helpful Video Resources</h4>
                <ul className="list-disc pl-6 text-gray-600">
                  <li><a href="https://www.youtube.com/watch?v=XASY30EfGAc" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">"What is a Programming Language? In 60 Seconds"</a></li>
                  <li><a href="https://www.youtube.com/watch?v=6YMec72CEiU" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">"What is Programming?"</a></li>
                  <li><a href="https://www.youtube.com/watch?v=k-EID5_2D9U" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">"File Management Part 1"</a></li>
                  <li><a href="https://www.youtube.com/watch?v=DGd48PGbnBs" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">"File Management Part 2"</a></li>
                  <li><a href="https://www.youtube.com/watch?v=hHcZbXsZtm0" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">"Windows Tutorial - Explaining computer files, folders, and directories"</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg w-full">
          <button
            onClick={() => toggleSection('git')}
            className="w-full p-8 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-150"
          >
            <h3 className="text-2xl font-semibold text-primary-600">Git & GitHub</h3>
            <svg
              className={`w-6 h-6 transform transition-transform duration-200 ${openSections.git ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <div className={`transition-all duration-300 ${openSections.git ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            <div className="p-8 border-t space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">What are Git and GitHub?</h4>
                <p className="text-gray-600">Imagine you're working on a big group project where everyone needs to contribute to a document. Now imagine if you could:</p>
                <ul className="list-disc pl-6 text-gray-600 mt-2">
                  <li>Track every change made to the document</li>
                  <li>Know who made each change and when</li>
                  <li>Go back to any previous version if something goes wrong</li>
                  <li>Work on your own copy without affecting others</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Git: Your Local Version Control</h4>
                <p className="text-gray-600">Git is a tool that runs on your computer (like Microsoft Word or your IDE). It:</p>
                <ul className="list-disc pl-6 text-gray-600 mt-2">
                  <li>Keeps track of all changes to your code files</li>
                  <li>Lets you save different versions of your work</li>
                  <li>Works on your personal computer, even without internet</li>
                  <li>Helps you experiment with changes without breaking your working code</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">GitHub: Your Online Code Storage</h4>
                <p className="text-gray-600">GitHub is like Google Drive, but specifically designed for code. It:</p>
                <ul className="list-disc pl-6 text-gray-600 mt-2">
                  <li>Stores your code online so you can access it from anywhere</li>
                  <li>Lets you share your code with others</li>
                  <li>Makes it easy for multiple people to work on the same project</li>
                  <li>Keeps a backup of your code in case something happens to your computer</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Getting Started Resources</h4>
                <ul className="list-disc pl-6 text-gray-600">
                  <li><a href="https://www.youtube.com/watch?v=8Dd7KRpKeaE" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">Git and GitHub for Beginners - Crash Course</a></li>
                  <li><a href="https://docs.github.com/en/get-started" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">GitHub's Official Getting Started Guide</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LearningResources
