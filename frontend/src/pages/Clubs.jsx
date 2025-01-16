/**
 * Clubs.jsx
 * Displays CS clubs and diversity resources at Berea College
 */

import { useState } from 'react'
import { Image } from '@chakra-ui/react'
import { FaChevronDown, FaChevronUp, FaExternalLinkAlt } from 'react-icons/fa'

const ClubCard = ({ image, title, description, link }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
    <div className="relative h-48">
      <Image
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-3">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
      >
        Learn more
        <FaExternalLinkAlt className="ml-2 h-4 w-4" />
      </a>
    </div>
  </div>
)

const DropdownSection = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border rounded-lg mb-4 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 bg-gray-50 hover:bg-gray-100 flex items-center justify-between font-semibold text-gray-900"
      >
        <span>{title}</span>
        {isOpen ? (
          <FaChevronUp className="text-gray-500" />
        ) : (
          <FaChevronDown className="text-gray-500" />
        )}
      </button>
      {isOpen && (
        <ul className="p-6 space-y-3 bg-white">
          {items.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-800 inline-flex items-center"
              >
                {item.text}
                <FaExternalLinkAlt className="ml-2 h-3 w-3" />
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

const Clubs = () => {
  const csClubs = [
    {
      image: "/images/nsbe.png",
      title: "National Society of Black Engineers",
      description: "Advancing Black and minority representation in engineering through development programs.",
      link: "https://berea.campuslabs.com/engage/organization/bc-nsbe"
    },
    {
      image: "/images/shpe.png",
      title: "Society of Hispanic Professional Engineers",
      description: "Supporting Hispanic STEM students through leadership, academics, and service.",
      link: "https://berea.campuslabs.com/engage/organization/shpe-berea"
    },
    {
      image: "/images/gwc.jpg",
      title: "Girls Who Code",
      description: "Empowering women in computing, fostering community, and exploring CS beyond the classroom.",
      link: "https://berea.campuslabs.com/engage/organization/gwc-acm"
    },
    {
      image: "/images/codeto.png",
      title: "Code Together",
      description: "Meet fellow programmers, work on projects, and enhance your coding skills.",
      link: "https://berea.campuslabs.com/engage/organization/code-together"
    }
  ]

  const diversityResources = {
    cultural: {
      title: "Cultural and Ethnic Organizations",
      items: [
        { text: "African and African American Studies", link: "https://berea.campuslabs.com/engage/organization/afr" },
        { text: "African Students Association", link: "https://berea.campuslabs.com/engage/organization/africanstudentsassociation" },
        { text: "Arab Student League", link: "https://berea.campuslabs.com/engage/organization/habibisarabstudentleague" },
        { text: "Asian Student Union", link: "https://berea.campuslabs.com/engage/organization/asianstudentunion" },
        { text: "Black Cultural Center", link: "https://berea.campuslabs.com/engage/organization/blackculturalcenter" },
        { text: "Black Male Leadership Initiative", link: "https://berea.campuslabs.com/engage/organization/bmli" },
        { text: "Black Student Union", link: "https://berea.campuslabs.com/engage/organization/blackstudentunion" },
        { text: "Carter G. Woodson Center", link: "https://berea.campuslabs.com/engage/organization/cgwc" },
        { text: "CELTS: Hispanic Outreach Project", link: "https://berea.campuslabs.com/engage/organization/celtshispanicoutreachproject" },
        { text: "Chinese Language And Culture Club", link: "https://berea.campuslabs.com/engage/organization/bereachinese" },
        { text: "Espacio Cultural Latinx (ECL)", link: "https://berea.campuslabs.com/engage/organization/ecl" }
      ]
    },
    health: {
      title: "Health and Accessibility Resources",
      items: [
        { text: "Health Education Advocacy Resource Team (HEART)", link: "https://berea.campuslabs.com/engage/organization/heart" },
        { text: "Disability and Accessibility Services", link: "https://berea.campuslabs.com/engage/organization/das" },
        { text: "Nontraditional Student Association", link: "https://berea.campuslabs.com/engage/organization/ntsp" },
        { text: "Berea College Generation Action", link: "https://berea.campuslabs.com/engage/organization/genaction" }
      ]
    },
    centers: {
      title: "Centers and Initiatives",
      items: [
        { text: "Appalachian Center", link: "https://berea.campuslabs.com/engage/organization/appalachiancenter" },
        { text: "bell hooks Center", link: "https://berea.campuslabs.com/engage/organization/bhc" },
        { text: "Tech Ethics Roundtable", link: "https://berea.campuslabs.com/engage/organization/tech_ethics_roundtable" }
      ]
    },
    religious: {
      title: "Religious and Faith-Based Organizations",
      items: [
        { text: "Bethel Campus Fellowship (interdenominational)", link: "https://berea.campuslabs.com/engage/organization/bethel-campus-fellowship" },
        { text: "Campus Christian Center", link: "https://berea.campuslabs.com/engage/organization/campuschristiancenter" },
        { text: "CRU (interdenominational)", link: "https://berea.campuslabs.com/engage/organization/cru" },
        { text: "InterVarsity Christian Fellowship", link: "https://berea.campuslabs.com/engage/organization/intervarsity" },
        { text: "Muslim Students Association", link: "https://berea.campuslabs.com/engage/organization/muslimstudentassociation" },
        { text: "Newman Catholic Club", link: "https://berea.campuslabs.com/engage/organization/catholicnewmanclub" },
        { text: "Orthodox Christian Fellowship", link: "https://berea.campuslabs.com/engage/organization/ocf" }
      ]
    },
    arts: {
      title: "Music and Dance Clubs",
      items: [
        { text: "Berea Middle Eastern Dance Ensemble", link: "https://berea.campuslabs.com/engage/organization/bereamiddleeasterndanceensemble" },
        { text: "Black Music Ensemble", link: "https://berea.campuslabs.com/engage/organization/blackmusicensemble" },
        { text: "Japanese Taiko and Culture Club", link: "https://berea.campuslabs.com/engage/organization/berea-taiko" }
      ]
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* CS Clubs Section */}
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Computer Science Clubs</h1>
        <p className="text-lg text-gray-600 mb-8">
          At Berea College, our Computer Science clubs provide opportunities for students to explore their interests, 
          develop technical skills, and build community. Whether you're interested in coding, cybersecurity, 
          or tech ethics, there's a place for you to grow and learn.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {csClubs.map((club, index) => (
            <ClubCard key={index} {...club} />
          ))}
        </div>
      </section>

      {/* Diversity Resources Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Diversity Resources and Clubs</h2>
        <p className="text-lg text-gray-600 mb-8">
          Discover other community-building opportunities at Berea College!
        </p>
        <div className="space-y-4">
          {Object.values(diversityResources).map((section, index) => (
            <DropdownSection
              key={index}
              title={section.title}
              items={section.items}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Clubs
