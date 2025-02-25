import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { writeFileSync } from 'fs';

// Get current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Example programmer data
const programmerData = [
    {
        id: 'finn-programmer',
        name: 'Finn the Programmer',
        image: 'Profile.jpg',
        email: 'finnp@berea.edu',
        role: 'Lead',
        projects: [
            {
                name: "CS TA Website",
                description: "React-based website for CS TA program",
                tech: ["React", "Tailwind", "Node.js"]
            },
            {
                name: "Student Dashboard",
                description: "Dashboard for tracking student progress",
                tech: ["Python", "Django", "PostgreSQL"]
            }
        ],
        skills: [
            "JavaScript",
            "Python",
            "React",
            "Node.js",
            "SQL",
            "Git"
        ],
        links: [
            ["GitHub", "https://github.com/finn"],
            ["LinkedIn", "https://linkedin.com/in/finn"],
            ["Portfolio", "https://finn.dev"]
        ]
    }
    // Add more programmers here as needed
];

// Convert the data to CSV format
const convertToCsv = (data) => {
    // CSV header
    const header = 'id,name,image,email,role,projects_json,skills_json,links_json\n';
    
    // Convert each programmer to a CSV row
    const rows = data.map(member => {
        const fields = [
            member.id,
            member.name,
            member.image,
            member.email,
            member.role,
            JSON.stringify(member.projects),
            JSON.stringify(member.skills),
            JSON.stringify(member.links)
        ].map(field => {
            // Escape fields that contain commas or quotes
            if (typeof field === 'string' && (field.includes(',') || field.includes('"'))) {
                return `"${field.replace(/"/g, '""')}"`;
            }
            return field;
        });
        
        return fields.join(',');
    });

    return header + rows.join('\n');
};

// Main execution
try {
    const csvContent = convertToCsv(programmerData);
    const outputPath = join(__dirname, '../data/programmers.csv');
    
    writeFileSync(outputPath, csvContent);
    console.log('Successfully converted programmer data to CSV!');
    console.log(`CSV file created at: ${outputPath}`);
} catch (error) {
    console.error('Error converting programmer data:', error);
}
