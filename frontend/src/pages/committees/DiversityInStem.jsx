const committeeMembers = [
  {
    name: 'Tafreed',
    image: '/diversity-in-stem-committee/images_for_diversity_directory/tafreed.jpg'
  },
  {
    name: 'Arbjosa',
    image: '/diversity-in-stem-committee/images_for_diversity_directory/Arbjosa.jpg'
  },
  {
    name: 'Mahmoud',
    image: '/diversity-in-stem-committee/images_for_diversity_directory/Mahmoud.jpg'
  },
  {
    name: 'Nicholas',
    image: '/diversity-in-stem-committee/images_for_diversity_directory/Nicholas.jpg'
  },
  {
    name: 'America',
    image: '/diversity-in-stem-committee/images_for_diversity_directory/America.jpg'
  },
  {
    name: 'John',
    image: '/diversity-in-stem-committee/images_for_diversity_directory/John.png'
  }
]

const DiversityInStem = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Diversity in STEM Committee
        </h1>
        <p className="text-gray-600">
          The Diversity in STEM Committee is committed to fostering diversity, equity, and inclusion
          within Berea College's STEM programs, with an emphasis on computer science. We strive to create
          an inclusive environment that celebrates differences and empowers underrepresented students to
          thrive in STEM fields.
        </p>
      </div>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Committee Goals
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Design and implement strategies to enhance diversity in STEM programs</li>
            <li>Organize educational initiatives to raise awareness about the value of diversity in technology</li>
            <li>Develop and distribute resources to support underrepresented groups in STEM</li>
            <li>Encourage inclusivity through targeted events and department-level initiatives</li>
            <li>Engage with diversity-focused events, conferences, and external partnerships</li>
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

export default DiversityInStem
