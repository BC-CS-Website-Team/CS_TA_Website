/**
 * MeetProgrammers.jsx
 * Page component for displaying Programmers
 */

import { useState, useEffect } from 'react'
import TeamMemberCard from '../../components/team/TeamMemberCard'
import TeamMemberModal from '../../components/team/TeamMemberModal'
import { loadProgrammerData } from '../../utils/programmersCsvLoader'

const MeetProgrammers = () => {
  const [selectedMember, setSelectedMember] = useState(null)
  const [programmers, setProgrammers] = useState([])

  useEffect(() => {
    const loadData = async () => {
      const data = await loadProgrammerData();
      setProgrammers(data);
    };
    loadData();
  }, []);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Meet Our Programmers
        </h1>
        <p className="text-gray-600">
          Get to know the talented programmers in our CS TA community.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Our Programming Team
        </h2>
        <p className="text-gray-600 mb-6">
          Our programming team works on various projects that benefit the Berea College community. 
          From web applications to software tools, our programmers gain real-world development 
          experience while creating solutions for our school.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {programmers.map(member => (
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

export default MeetProgrammers
