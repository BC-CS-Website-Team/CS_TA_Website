const committeeMembers = [
  {
    name: 'Bryanna',
    image: '/creative-space-committee/TeamPics/Bryanna.png'
  },
  {
    name: 'Joseph',
    image: '/creative-space-committee/TeamPics/David.png'
  },
  {
    name: 'Berhane',
    image: '/creative-space-committee/TeamPics/Berhane.png'
  },
  {
    name: 'Alys',
    image: '/creative-space-committee/TeamPics/Gandalf.png'
  },
  {
    name: 'Dylan',
    image: '/creative-space-committee/TeamPics/Dylan.jpg'
  },
  {
    name: 'Nauryzbek',
    image: '/creative-space-committee/TeamPics/Naury.jpg'
  },
  {
    name: 'Cade',
    image: '/creative-space-committee/TeamPics/Cade.jpg'
  }
]

const CreativeSpace = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Creative Space Committee
        </h1>
        <p className="text-gray-600">
          The Creative Space Committee is dedicated to transforming the physical environment of Berea
          College's Computer Science classrooms and lab room into inspiring, educational, and inclusive
          spaces. Working collaboratively with faculty and staff, our committee will design, create, and
          implement visual elements that enhance learning, promote inclusivity, and foster creativity
          within the Computer Science department.
        </p>
      </div>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Committee Goals
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Collaborate with faculty and staff to identify areas for improvement in classroom and lab design</li>
            <li>Create visually engaging and educational displays that align with the computer science curriculum</li>
            <li>Incorporate inclusive design principles to ensure all students feel represented and welcomed</li>
            <li>Encourage student participation in the design process to reflect diverse perspectives</li>
            <li>Maintain and update creative elements to adapt to evolving needs and feedback</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Meet the Committee
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {committeeMembers.map((member) => (
              <div 
                key={member.name}
                className="flex flex-col items-center bg-white rounded-lg shadow-md p-4"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-40 h-40 object-cover rounded-lg mb-2"
                />
                <p className="text-lg font-medium text-gray-900">{member.name}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600 mb-4">
            Please feel free to reach out to us at <span className="font-semibold">ericksonb@berea.edu</span> or by using the form below:
          </p>
          
          <form 
            action="https://formspree.io/f/xjkvorea" 
            method="POST"
            className="max-w-lg space-y-4"
          >
            <div>
              <input
                type="text"
                name="Name"
                placeholder="Full Name"
                required
                aria-label="Full Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div>
              <input
                type="email"
                name="Email"
                placeholder="Your Email"
                required
                aria-label="Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div>
              <textarea
                name="Message"
                placeholder="Your Message"
                required
                aria-label="Message"
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-6 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </form>
        </section>
      </div>
    </div>
  )
}

export default CreativeSpace
