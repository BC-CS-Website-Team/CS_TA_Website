/**
 * TAs.jsx
 * Page component for displaying all Teaching Assistants.
 */

import { useState } from 'react'
import TACard from '../components/staff/TACard'
import TAModal from '../components/staff/TAModal'

const taData = [
  {
    id: 'nicholas-hamilton',
    name: 'Nicholas Hamilton',
    image: '/src/assets/images/Nicholas.jpg',
    email: 'hamiltonn@berea.edu',
    hours: [
      [],
      [{ start: 10, end: 12 }, { start: 12, end: 14 }],
      [],
      [],
      [],
      [],
      []
    ],
    courses: [
      ["M/W/F", "CSC###: Course Title", "10:00-12:00"]
    ],
    links: [
      ["Slack", ""],
      ["LinkedIn", ""]
    ]
  },
  {
    id: 'bishal-timalsina',
    name: 'Bishal Timalsina',
    image: '/src/assets/images/Bishal.JPG',
    email: 'timalsinab@berea.edu',
    hours: [
      [],
      [{ start: 10, end: 12 }, { start: 12, end: 14 }],
      [],
      [],
      [],
      [],
      []
    ],
    courses: [
      ["M/W/F", "CSC###: Course Title", "10:00-12:00"]
    ],
    links: [
      ["Slack", ""],
      ["LinkedIn", ""]
    ]
  },
  // Add more TAs here...
]

const TAs = () => {
  const [selectedTA, setSelectedTA] = useState(null)

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Meet Our Teaching Assistants
          </h1>
          <p className="text-xl text-gray-600">
            Our TAs are here to help you succeed in your computer science journey.
          </p>
        </div>

        {/* TA Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {taData.map((ta) => (
            <TACard
              key={ta.id}
              ta={ta}
              onClick={setSelectedTA}
            />
          ))}
        </div>

        {/* TA Modal */}
        <TAModal
          ta={selectedTA}
          onClose={() => setSelectedTA(null)}
        />
      </main>
    </div>
  )
}

export default TAs
