/**
 * MeetMakerspace.jsx
 * Page component for displaying Makerspace TAs
 */

import { useState, useEffect } from 'react'
import TeamMemberCard from '../../components/team/TeamMemberCard'
import TeamMemberModal from '../../components/team/TeamMemberModal'
import { loadMakerspaceData } from '../../utils/makerspaceCsvLoader'

const MeetMakerspace = () => {
  const [selectedMember, setSelectedMember] = useState(null)
  const [makerspaceTeam, setMakerspaceTeam] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await loadMakerspaceData();
        setMakerspaceTeam(data);
      } catch (error) {
        console.error('Error loading makerspace data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl text-gray-600">Loading Makerspace Team...</div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Meet Our Makerspace TAs
        </h1>
        <p className="text-gray-600">
          Get to know our skilled Makerspace Teaching Assistants who help bring your creative ideas to life.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Our Makerspace TAs
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

      {/* Hours Section */}
      {makerspaceTeam.length > 0 && (
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Makerspace Hours
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {makerspaceTeam.map(member => (
                <div key={member.id} className="space-y-2">
                  <h3 className="font-semibold text-lg">{member.name}'s Hours</h3>
                  {member.hours?.map((dayHours, dayIndex) => {
                    if (!dayHours || dayHours.length === 0) return null;
                    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                    return dayHours.map((hours, hourIndex) => (
                      <div key={`${dayIndex}-${hourIndex}`} className="text-gray-600">
                        {days[dayIndex]}: {hours.start}:00 - {hours.end}:00
                      </div>
                    ));
                  })}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

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
