/**
 * TeamOverview.jsx
 * Overview page for the Meet the Team section.
 */

const TeamOverview = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Meet Our Computer Science Teams
        </h1>
        <p className="text-gray-600">
          The Computer Science Department at Berea College is supported by several dedicated teams 
          that work together to create a comprehensive learning environment. Our labor program 
          includes four primary teams, each contributing unique value to our educational community.
        </p>
      </div>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Computer Science Teaching Assistants
          </h2>
          <p className="text-gray-600">
            Our CS Teaching Assistants are instrumental in supporting student learning across all 
            computer science courses. They provide one-on-one tutoring, lead study sessions, assist 
            in labs, and create educational resources to help their peers succeed in their computer 
            science journey.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Computer Science Programmers
          </h2>
          <p className="text-gray-600">
            The Programming team works on various software development projects that benefit the 
            college community. They develop and maintain applications, websites, and tools that 
            enhance the educational experience while gaining real-world development experience.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Robotics Club
          </h2>
          <p className="text-gray-600">
            The Robotics Club brings together students passionate about robotics and automation. 
            Team members work on exciting projects, participate in competitions, and explore the 
            intersection of hardware and software in practical applications.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Maker Space Teaching Assistants
          </h2>
          <p className="text-gray-600">
            Our Maker Space TAs support students in exploring creative technology projects. They 
            maintain the maker space equipment, provide training on tools and technologies, and 
            assist students in bringing their innovative ideas to life through 3D printing, 
            electronics, and other maker technologies.
          </p>
        </section>
      </div>
    </div>
  )
}

export default TeamOverview
