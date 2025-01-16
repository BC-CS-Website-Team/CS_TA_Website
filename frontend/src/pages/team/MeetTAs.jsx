/**
 * MeetTAs.jsx
 * Page component for displaying Teaching Assistants
 */

import { useState } from 'react'
import TeamMemberCard from '../../components/team/TeamMemberCard'
import TeamMemberModal from '../../components/team/TeamMemberModal'
import { taLeads, teachingAssistants } from '../../data/teamData'

const MeetTAs = () => {
  const [selectedMember, setSelectedMember] = useState(null)

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Meet Our TAs
        </h1>
        <p className="text-gray-600">
          Learn about the dedicated Teaching Assistants in our CS program.
        </p>
      </div>

      {/* Leads Section */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Leads for the CS Department
        </h2>
        <p className="text-gray-600 mb-6">
          Click on a photo for more information on our Leads.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {taLeads.map(member => (
            <TeamMemberCard
              key={member.id}
              {...member}
              onClick={() => setSelectedMember(member)}
            />
          ))}
        </div>
      </section>

      {/* TAs Section */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Meet Our TAs
        </h2>
        <p className="text-gray-600 mb-6">
          Click on a photo for more information on our TAs.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teachingAssistants.map(member => (
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

export default MeetTAs
