/**
 * MeetMakerspace.jsx
 * Page component for displaying Makerspace TAs
 */

import { useState } from 'react'
import TeamMemberCard from '../../components/team/TeamMemberCard'
import TeamMemberModal from '../../components/team/TeamMemberModal'
import { makerspaceTeam } from '../../data/teamData'

const MeetMakerspace = () => {
  const [selectedMember, setSelectedMember] = useState(null)

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Meet Our Makerspace TAs
        </h1>
        <p className="text-gray-600">
          Learn about our dedicated Makerspace Teaching Assistants who help bring creative ideas to life.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Our Makerspace Team
        </h2>
        <p className="text-gray-600 mb-6">
          Our Makerspace TAs are dedicated to helping students explore and create using various 
          technologies. From 3D printing to electronics, our team provides guidance and support 
          for all kinds of maker projects.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {makerspaceTeam.map(member => (
            <TeamMemberCard
              key={member.id}
              {...member}
              onClick={() => setSelectedMember(member)}
            />
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedMember && (
        <TeamMemberModal
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      )}
    </div>
  )
}

export default MeetMakerspace
