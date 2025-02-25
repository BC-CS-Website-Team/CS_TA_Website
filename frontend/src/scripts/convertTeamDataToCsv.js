import { fileURLToPath } from 'url';
import { dirname, join, basename } from 'path';
import { writeFileSync } from 'fs';

// Get current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Manually define the team data with correct image filenames
const taData = [
    {
        id: 'nicholas-hamilton',
        name: 'Nicholas Hamilton',
        image: 'Nicholas.jpg',
        email: 'hamiltonn@berea.edu',
        role: 'Lead',
        hours: [
            [],
            [{ start: 10, end: 12 }, { start: 12, end: 14 }],
            [],
            [],
            [],
            [],
            []
        ],
        courses: [
            ["M/W/F", "CSC###: Course Title", "10:00-12:00"]
        ],
        links: [
            ["Slack", ""],
            ["LinkedIn", ""]
        ]
    },
    {
        id: 'bishal-timalsina',
        name: 'Bishal Timalsina',
        image: 'Bishal.JPG',
        email: 'timalsinab@berea.edu',
        role: 'Lead',
        hours: [
            [],
            [{ start: 10, end: 12 }, { start: 12, end: 14 }],
            [],
            [],
            [],
            [],
            []
        ],
        courses: [
            ["M/W/F", "CSC###: Course Title", "10:00-12:00"]
        ],
        links: [
            ["Slack", ""],
            ["LinkedIn", ""]
        ]
    },
    {
        id: 'joseph-crubaugh',
        name: 'Joseph Crubaugh',
        image: 'CrubaughD.jpg',
        email: 'crubaughd@berea.edu',
        role: 'Lead',
        hours: [
            [],
            [],
            [{ start: 13, end: 15 }],
            [],
            [{ start: 13, end: 15 }],
            [],
            []
        ],
        courses: [
            ["T/Th", "CSC###: Course Title", "13:00-15:00"]
        ],
        links: [
            ["Slack", ""],
            ["LinkedIn", ""]
        ]
    },
    {
        id: 'Nauryzbek Berdi',
        name: 'Nauryzbek Berdi',
        image: 'Berdi.jpg',
        email: 'berdin@berea.edu',
        role: 'TA',
        hours: [
            [],
            [],
            [],
            [{ start: 13, end: 15 }],
            [],
            [],
            []
        ],
        courses: [
            ["M/W/F", "CSC###: Course Title", "13:00-15:00"]
        ],
        links: [
            ["Slack", ""]
        ]
    },
    {
        id: 'bryanna-erickson',
        name: 'Bryanna Erickson',
        image: 'Bryanna-Erickson.jpeg',
        email: 'ericksonb@berea.edu',
        role: 'TA',
        hours: [
            [],
            [],
            [],
            [],
            [{ start: 14, end: 16 }],
            [],
            []
        ],
        courses: [
            ["M/W/F", "CSC###: Course Title", "14:00-16:00"]
        ],
        links: [
            ["Slack", ""]
        ]
    },
    {
        id: 'david-olorunpoju-essang',
        name: 'David Olorunpoju-Essang',
        image: 'David-Olorunpoju-Ess.png',
        email: 'olorunpojuessangd@berea.edu',
        role: 'TA',
        hours: [
            [],
            [],
            [{ start: 15, end: 17 }],
            [],
            [],
            [],
            []
        ],
        courses: [
            ["T/Th", "CSC###: Course Title", "15:00-17:00"]
        ],
        links: [
            ["Slack", ""]
        ]
    },
    {
        id: 'moise',
        name: 'Moise',
        image: 'Profile.jpg',
        email: 'dete-kpinssounonm@berea.edu',
        role: 'TA',
        hours: [
            [],
            [{ start: 15, end: 17 }],
            [],
            [],
            [],
            [],
            []
        ],
        courses: [
            ["M/W/F", "CSC###: Course Title", "15:00-17:00"]
        ],
        links: [
            ["Slack", ""]
        ]
    },
    {
        id: 'ali-ramazani',
        name: 'Ali Ramazani',
        image: 'Mohammad-Ali-Ramazan.jpg',
        email: 'ramazanim@berea.edu',
        role: 'TA',
        hours: [
            [],
            [],
            [],
            [{ start: 15, end: 17 }],
            [],
            [],
            []
        ],
        courses: [
            ["M/W/F", "CSC###: Course Title", "15:00-17:00"]
        ],
        links: [
            ["Slack", ""]
        ]
    },
    {
        id: 'gagan-phuyal',
        name: 'Gagan Phuyal',
        image: 'Gagan.jpg',
        email: 'phuyalg@berea.edu',
        role: 'TA',
        hours: [
            [],
            [],
            [{ start: 14, end: 16 }],
            [],
            [],
            [],
            []
        ],
        courses: [
            ["T/Th", "CSC###: Course Title", "14:00-16:00"]
        ],
        links: [
            ["Slack", ""]
        ]
    },
    {
        id: 'mahmoud',
        name: 'Mahmoud',
        image: 'Maumoud.jpg',
        email: 'leghlimia@berea.edu',
        role: 'TA',
        hours: [
            [],
            [],
            [],
            [],
            [{ start: 13, end: 15 }],
            [],
            []
        ],
        courses: [
            ["T/Th", "CSC###: Course Title", "13:00-15:00"]
        ],
        links: [
            ["Slack", ""]
        ]
    },
    {
        id: 'tojo',
        name: 'Tojo',
        image: 'Tojo.jpg',
        email: 'tojor@berea.edu',
        role: 'TA',
        hours: [
            [],
            [{ start: 13, end: 15 }],
            [],
            [],
            [],
            [],
            []
        ],
        courses: [
            ["M/W/F", "CSC###: Course Title", "13:00-15:00"]
        ],
        links: [
            ["Slack", ""]
        ]
    },
    {
        id: 'america',
        name: 'America',
        image: 'America.jpg',
        email: 'gaonaborgesa@berea.edu',
        role: 'TA',
        hours: [
            [],
            [],
            [{ start: 13, end: 15 }],
            [],
            [],
            [],
            []
        ],
        courses: [
            ["T/Th", "CSC###: Course Title", "13:00-15:00"]
        ],
        links: [
            ["Slack", ""]
        ]
    },
    {
        id: 'berhane',
        name: 'Berhane',
        image: 'Berhane.png',
        email: 'berhaneb@berea.edu',
        role: 'TA',
        hours: [
            [],
            [],
            [],
            [{ start: 14, end: 16 }],
            [],
            [],
            []
        ],
        courses: [
            ["M/W/F", "CSC###: Course Title", "14:00-16:00"]
        ],
        links: [
            ["Slack", ""]
        ]
    },
    {
        id: 'john-cox',
        name: 'John Cox',
        image: 'John.png',
        email: 'coxj@berea.edu',
        role: 'TA',
        hours: [
            [],
            [],
            [],
            [],
            [{ start: 15, end: 17 }],
            [],
            []
        ],
        courses: [
            ["T/Th", "CSC###: Course Title", "15:00-17:00"]
        ],
        links: [
            ["Slack", ""]
        ]
    },
    {
        id: 'Julio Jijon',
        name: 'Julio Jijon',
        image: 'Julio.jpg',
        email: 'Jijonj@berea.edu',
        role: 'TA',
        hours: [
            [],
            [],
            [{ start: 14, end: 16 }],
            [],
            [],
            [],
            []
        ],
        courses: [
            ["T/Th", "CSC###: Course Title", "14:00-16:00"]
        ],
        links: [
            ["Slack", ""]
        ]
    }
];

// Convert the data to CSV format
const convertToCsv = (data) => {
    // CSV header
    const header = 'id,name,image,email,role,hours_json,courses_json,links_json\n';
    
    // Convert each team member to a CSV row
    const rows = data.map(member => {
        const fields = [
            member.id,
            member.name,
            member.image,
            member.email,
            member.role,
            JSON.stringify(member.hours),
            JSON.stringify(member.courses),
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
    const csvContent = convertToCsv(taData);
    const outputPath = join(__dirname, '../data/team.csv');
    
    writeFileSync(outputPath, csvContent);
    console.log('Successfully converted team data to CSV!');
    console.log(`CSV file created at: ${outputPath}`);
} catch (error) {
    console.error('Error converting team data:', error);
}
