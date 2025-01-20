const committeeMembers = [
  {
    name: 'Bishal',
    image: '/career-dev-committee/carrer-dev-pic/Bishal.JPG'
  },
  {
    name: 'Gagan',
    image: '/career-dev-committee/carrer-dev-pic/Gagan.jpg'
  },
  {
    name: 'David O. E.',
    image: '/career-dev-committee/carrer-dev-pic/David-Olorunpoju-Ess.png'
  },
  {
    name: 'Moise',
    image: '/career-dev-committee/carrer-dev-pic/Moise.jpg'
  },
  {
    name: 'Tojo',
    image: '/career-dev-committee/carrer-dev-pic/Tojo.jpg'
  }
]

const CareerDevCommittee = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Career Development Committee
        </h1>
        <p className="text-gray-600">
          The Tech Career Development Committee empowers Berea College Computer Science students by providing
          essential resources and guidance to support their academic and professional journeys. We aim to connect
          students with opportunities and knowledge that pave the way for success in the tech industry.
        </p>
      </div>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Committee Goals
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Develop a centralized repository of career development resources</li>
            <li>Explore and document diverse career paths in computer science</li>
            <li>Provide curated information on conferences, internships, and professional growth opportunities</li>
            <li>Offer workshops or guidelines for building standout personal portfolios</li>
            <li>Encourage active student participation in career development activities</li>
            <li>Enhance connections between students, alumni, and industry professionals</li>
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
      </div>
    </div>
  )
}

export default CareerDevCommittee
