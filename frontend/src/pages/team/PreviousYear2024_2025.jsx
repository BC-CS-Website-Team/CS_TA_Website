import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TeamMemberCard from '../../components/team/TeamMemberCard';
import TeamMemberModal from '../../components/team/TeamMemberModal';
import { loadTeamData2024_2025 } from '../../utils/csvLoader2024_2025';

const PreviousYear2024_2025 = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [taData, setTaData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await loadTeamData2024_2025();
      setTaData(data);
    };
    loadData();
  }, []);

  return (
    <div className="space-y-12">
      <div>
        <Link to="/meet-the-team/tas" className="inline-block mb-4 px-4 py-2 bg-primary-600 text-white rounded hover:bg-primary-700 transition-colors">
          ← Back to Current Year
        </Link>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Meet Our TAs (2024-2025)
        </h1>
        <p className="text-xl text-gray-600">
          Learn about the dedicated Teaching Assistants in our CS program for the 2024-2025 academic year.
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
    </div>
  );
};

export default PreviousYear2024_2025;
