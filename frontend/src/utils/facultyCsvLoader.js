import Papa from 'papaparse';

export const loadFacultyData = async () => {
  try {
    const response = await fetch('/data/faculty.csv');
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

    // Filter out invalid entries and process the data
    return data
      .filter(member => member.id && member.name && member.image) // Filter out empty rows
      .map(member => {
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
    console.error('Error loading faculty data:', error);
    return [];
  }
};
