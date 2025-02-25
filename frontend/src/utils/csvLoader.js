import Papa from 'papaparse';

export const loadTeamData = async () => {
  try {
    const response = await fetch('/data/team.csv');
    const csvText = await response.text();
    
    const { data } = Papa.parse(csvText, {
      header: true,
      dynamicTyping: true,
      transform: (value, field) => {
        if (field.endsWith('_json')) {
          try {
            return JSON.parse(value);
          } catch (e) {
            console.error(`Error parsing JSON for field ${field}:`, e);
            return value;
          }
        }
        return value;
      }
    });

    // Process the data to match the expected format
    return data.map(member => {
      // Dynamically import images
      const imagePath = `/images/${member.image}`;
      
      return {
        ...member,
        image: imagePath,
        // Remove the _json suffix from fields
        hours: member.hours_json,
        courses: member.courses_json,
        links: member.links_json
      };
    });
  } catch (error) {
    console.error('Error loading team data:', error);
    return [];
  }
};
