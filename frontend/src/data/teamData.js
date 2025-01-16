/**
 * teamData.js
 * Data for team members across different roles
 */

// Import images
import nicholasImage from '../assets/images/Nicholas.jpg'
import bishalImage from '../assets/images/Bishal.JPG'
import crubaughImage from '../assets/images/CrubaughD.jpg'
import mercyImage from '../assets/images/Mercy-Eze.jpg'
import arbjosaImage from '../assets/images/Arbjosa-Halilaj.jpeg'
import bryannaImage from '../assets/images/Bryanna-Erickson.jpeg'
import davidImage from '../assets/images/David-Olorunpoju-Ess.png'
import profileImage from '../assets/images/Profile.jpg'
import aliImage from '../assets/images/Mohammad-Ali-Ramazan.jpg'
import mahmoudImage from '../assets/images/Maumoud.jpg'
import tojoImage from '../assets/images/Tojo.jpg'
import americaImage from '../assets/images/America.jpg'
import berhaneImage from '../assets/images/Berhane.png'
import johnImage from '../assets/images/John.png'
import gaganImage from '../assets/images/Gagan.jpg'

export const taData = [
  {
    id: 'nicholas-hamilton',
    name: 'Nicholas Hamilton',
    image: nicholasImage,
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
    image: bishalImage,
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
    image: crubaughImage,
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
    id: 'mercy-eze',
    name: 'Mercy Eze',
    image: mercyImage,
    email: 'ezem@berea.edu',
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
    id: 'arbjosa-halilaj',
    name: 'Arbjosa Halilaj',
    image: arbjosaImage,
    email: 'halilaja@berea.edu',
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
    image: bryannaImage,
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
    image: davidImage,
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
    image: profileImage,
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
    image: aliImage,
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
    id: 'mahmoud',
    name: 'Mahmoud',
    image: mahmoudImage,
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
    image: tojoImage,
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
    image: americaImage,
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
    image: berhaneImage,
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
    image: johnImage,
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
    id: 'gagan-phuyal',
    name: 'Gagan Phuyal',
    image: gaganImage,
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
  }
]

export const programmers = [
  // Add programmers here
]

export const roboticsTeam = [
  // Add robotics team members here
]

export const makerspaceTeam = [
  // Add makerspace team members here
]
