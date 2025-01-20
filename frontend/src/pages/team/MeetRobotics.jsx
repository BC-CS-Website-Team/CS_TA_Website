/**
 * MeetRobotics.jsx
 * Page component for displaying Robotics Club members
 */

import { useState } from 'react'
import TeamMemberCard from '../../components/team/TeamMemberCard'
import TeamMemberModal from '../../components/team/TeamMemberModal'
import { roboticsTeam } from '../../data/teamData'

const MeetRobotics = () => {
  const [selectedMember, setSelectedMember] = useState(null)

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Meet Our Robotics Club
        </h1>
        <p className="text-gray-600">
          Discover the innovative minds behind our Robotics Club at Berea College.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Our Robotics Team
        </h2>
        <p className="text-gray-600 mb-6">
          The Robotics Club brings together students passionate about robotics and automation. 
          Our members work on exciting projects, participate in competitions, and explore the 
          fascinating intersection of hardware and software.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {roboticsTeam.map(member => (
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

export default MeetRobotics
