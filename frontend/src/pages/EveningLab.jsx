/**
 * EveningLab.jsx
 * Displays information about the evening lab program, including resources and schedules
 */

import { ExternalLinkIcon } from '@chakra-ui/icons'

const ResourceCard = ({ title, description, link }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center text-primary-600 hover:text-primary-800"
    >
      Visit {title} <ExternalLinkIcon className="ml-2" />
    </a>
  </div>
)

const EveningLab = () => {
  const resources = [
    {
      title: 'Python Tutor',
      description: 'Visualize code execution step by step',
      link: 'https://pythontutor.com/'
    },
    {
      title: 'MDN Web Docs',
      description: 'Documentation for web technologies',
      link: 'https://developer.mozilla.org/'
    },
    {
      title: 'Real Python',
      description: 'Python tutorials and guides',
      link: 'https://realpython.com/'
    },
    {
      title: 'Stack Overflow',
      description: 'Find solutions to coding problems',
      link: 'https://stackoverflow.com/'
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Evening Lab</h1>
        <p className="text-xl text-gray-600">
          Information about our evening lab program and schedules.
        </p>
      </div>

      {/* Resources Section
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Learning & Debugging Resources
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {resources.map((resource, index) => (
            <ResourceCard key={index} {...resource} />
          ))}
        </div>
      </section> */} 

      {/* Check into Lab Button Section */}
      <section className="mb-16 text-center">
        <a
          href="https://bereacollege-my.sharepoint.com/personal/hamiltonn_berea_edu/_layouts/15/listforms.aspx?cid=YmNmNThkYTItYmJkMS00N2UwLTg1NmEtYjU0NWM0ZGVkZDFh&nav=MThhNzhkZWYtYTQ1MC00YTRmLTgyMmItNzFmMzA1NTdhNDFm"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors shadow-md hover:shadow-lg"
        >
          Check into Evening Lab <ExternalLinkIcon className="ml-2 inline" />
        </a>
        <p className="mt-4 text-gray-600">
          Please check in when you arrive at the evening lab session
        </p>
      </section>

      {/* Calendar Section */}
      <section className="bg-white rounded-lg shadow-md p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            TA Evening Lab Schedule
          </h2>
          <div className="prose max-w-none text-gray-600">
            <p className="mb-4">
              Evening lab sessions are held in the computer lab in the CMIT Room 316. 
              TAs are available to help students with their assignments and answer questions.
            </p>
            <p>
              This calendar shows all evening lab sessions and TA availability. 
              TAs can edit this calendar to update their availability and schedule changes.
            </p>
          </div>
        </div>

        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
          <iframe
            src="https://outlook.office365.com/owa/calendar/052f7c3b37654ac5827d0ea10072514c@berea.edu/8dd5c0c4ad234a12ab9355a4f3bbe87116478699180076978996/calendar.html"
            className="w-full h-[600px] border-0"
            title="TA Evening Lab Schedule"
            allowFullScreen
          />
        </div>
      </section>
    </div>
  )
}

export default EveningLab
