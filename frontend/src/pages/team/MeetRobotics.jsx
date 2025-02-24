/**
 * MeetRobotics.jsx
 * Page component for displaying Robotics Team Members
 */

import { useState, useEffect } from 'react'
import TeamMemberCard from '../../components/team/TeamMemberCard'
import TeamMemberModal from '../../components/team/TeamMemberModal'
import { loadRoboticsData } from '../../utils/roboticsCsvLoader'

const MeetRobotics = () => {
  const [selectedMember, setSelectedMember] = useState(null)
  const [roboticsTeam, setRoboticsTeam] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await loadRoboticsData();
        setRoboticsTeam(data);
      } catch (error) {
        console.error('Error loading robotics data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl text-gray-600">Loading Robotics Team...</div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Meet Our Robotics Team
        </h1>
        <p className="text-gray-600">
          Get to know the innovative minds behind our robotics projects.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Our Robotics Team
        </h2>
        <p className="text-gray-600 mb-6">
          Our robotics team works on cutting-edge projects, from autonomous systems to 
          custom-built robots. Each member brings unique skills and passion to create 
          innovative solutions in robotics.
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

      {/* Project Showcase Section */}
      {roboticsTeam.length > 0 && (
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Current Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {roboticsTeam.map(member => 
              member.projects?.map((project, index) => (
                <div 
                  key={`${member.id}-project-${index}`}
                  className="bg-white rounded-lg shadow-md p-6"
                >
                  <div className="mb-2 text-sm text-gray-600">
                    Led by {member.name}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech?.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))
            )}
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

export default MeetRobotics
