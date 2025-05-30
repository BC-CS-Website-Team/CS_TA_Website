/**
 * MeetTAs.jsx
 * Page component for displaying Teaching Assistants
 */

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import TeamMemberCard from '../../components/team/TeamMemberCard'
import TeamMemberModal from '../../components/team/TeamMemberModal'
import { loadTeamData } from '../../utils/csvLoader'

const MeetTAs = () => {
  const [selectedMember, setSelectedMember] = useState(null)
  const [taData, setTaData] = useState([])

  useEffect(() => {
    const loadData = async () => {
      const data = await loadTeamData();
      setTaData(data);
    };
    loadData();
  }, []);

  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Meet Our TAs
        </h1>
        <p className="text-xl text-gray-600">
          Learn about the dedicated Teaching Assistants in our CS program.
        </p>
      </div>

      {/* Leads Section */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Leads for the CS Department
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Click on a photo for more information about our Leads.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {taData
            .filter(member => member.role === 'Lead')
            .map(member => (
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
        <p className="text-lg text-gray-600 mb-8">
          Click on a photo for more information about our TAs.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {taData
            .filter(member => member.role === 'TA')
            .map(member => (
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

      {/* Previous Years Section */}
      <section className="mt-16 border-t pt-8">
        <h2 className="text-xl font-semibold mb-4">Previous years</h2>
        <ul>
          <li>
            <Link to="/meet-the-team/tas/previous-2024-2025" className="text-primary-600 hover:underline">
              2024-2025
            </Link>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default MeetTAs
