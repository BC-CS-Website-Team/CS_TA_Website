var courses = [
  // 1) Introductory/Exploratory Courses
  {
    "_name": "ENG 102",
    "Title": "Intro Digital Humanities (ENG)",
    "_deps": ["MAT 012"]
  },
  {
    "_name": "BUS 114-CSC",
    "Title": "Business App & Programming (CSC)",
    "_deps": ["MAT 012"]
  },
  {
    "_name": "CSC 114-BUS",
    "Title": "Business App & Programming (BUS)",
    "_deps": ["MAT 012"]
  },
  {
    "_name": "CSC 110",
    "Title": "Craft of Computing",
    "_deps": ["MAT 012"]
  },
  {
    "_name": "CSC 111",
    "Title": "Storytelling/Computer Animation",
    "_deps": ["MAT 012"]
  },
  {
    "_name": "CSC 121",
    "Title": "Introduction to Game Design",
    "_deps": ["MAT 012"]
  },
  {
    "_name": "CSC 124",
    "Title": "Building Better Apps",
    "_deps": ["MAT 012"]
  },
  {
    "_name": "CSC 126",
    "Title": "Intro to Robotics",
    "_deps": ["MAT 012"]
  },
  {
    "_name": "CSC 127",
    "Title": "Intro to Web Design",
    "_deps": ["CSC 110"]
  },
  {
    "_name": "SENS 320",
    "Title": "Intro-Geographic Info Sys GEO",
    "_deps": ["Dummy_SENS320_Prereq"] // Updated to depend on dummy node
  },
  {
    "_name": "PHY 221",
    "Title": "Intro Physics I with Calculus",
    "_deps": ["MAT 135"]
  },

  // 2) Collateral Courses (Math & TAD)
  {
    "_name": "MAT 012",
    "Title": "Foundational Mathematics",
    "_deps": []
  },
  {
    "_name": "MAT 105",
    "Title": "Pre-Calculus",
    "_deps": []
  },
  {
    "_name": "MAT 125",
    "Title": "Intermediate Calculus",
    "_deps": ["MAT 105"]
  },
  {
    "_name": "MAT 214",
    "Title": "Advanced Mathematics I",
    "_deps": ["MAT 125"]
  },
  {
    "_name": "MAT 315",
    "Title": "Advanced Mathematics II",
    "_deps": ["MAT 214"]
  },
  {
    "_name": "MAT 330",
    "Title": "Linear Algebra",
    "_deps": ["MAT 214"]
  },
  {
    "_name": "MAT 433",
    "Title": "Numerical Analysis (MAT/CSC)",
    "_deps": ["MAT 225", "CSC 111", "CSC 114-BUS", "MAT 125", "CSC 126", "CSC 226", "MAT 214", "MAT 315", "MAT 330"]
  },

  {
    "_name": "MAT 312",
    "Title": "Operations Research",
    "_deps": ["MAT 135"]
  },
  {
    "_name": "MAT 415",
    "Title": "Combinatorics",
    "_deps": ["MAT 135"]
  },

  // 3) Design and Documentation Courses
  {
    "_name": "ETAD 130",
    "Title": "Design and Documentation",
    "_deps": []
  },
  {
    "_name": "ETAD 180",
    "Title": "Graphic Com and Design",
    "_deps": ["ETAD 130"]
  },
  {
    "_name": "ETAD 265",
    "Title": "Electricity and Electronics",
    "_deps": ["CSC 110"]
  },
  {
    "_name": "ETAD 330",
    "Title": "Advanced Design & Prototyping",
    "_deps": ["ETAD 130"]
  },
  {
    "_name": "ETAD 382",
    "Title": "Studio in Graphic Design",
    "_deps": ["ETAD 180"]
  },
  {
    "_name": "ETAD 455",
    "Title": "Comp Integrated Manufacturing",
    "_deps": ["ETAD 265"]
  },
  {
    "_name": "ETAD 460",
    "Title": "Electronic System Design",
    "_deps": ["ETAD 265"]
  },

  // 4) Core Courses
  {
    "_name": "CSC 226",
    "Title": "Software Design & Implementation",
    "_deps": ["CSC 110", "CSC 111", "CSC 121", "CSC 124", "CSC 126", "PHY 221"]
  },
  {
    "_name": "CSC 236",
    "Title": "Data Structures",
    "_deps": ["CSC 226"]
  },

  // 5) Foundations Track
  {
    "_name": "CSC 301",
    "Title": "Human Centered Computing",
    "_deps": ["CSC 226"]
  },
  {
    "_name": "CSC 303",
    "Title": "Theory of Computation",
    "_deps": ["CSC 226", "CSC 236", "MAT 105", "MAT 216", "MAT 312", "MAT 315", "MAT 415"]
  },
  {
    "_name": "CSC 433",
    "Title": "Numerical Analysis (MAT/CSC)",
    "_deps": ["MAT 225", "CSC 111", "CSC 114-BUS", "MAT 125", "CSC 126", "CSC 226", "MAT 214", "MAT 315", "MAT 330"]
  },
  {
    "_name": "CSC 440",
    "Title": "Design & Analysis of Algorithms",
    "_deps": ["CSC 236", "MAT 105", "MAT 125", "MAT 214"]
  },
  {
    "_name": "CSC 445",
    "Title": "Comp Complexity & Modeling",
    "_deps": ["CSC 236"]
  },

  // 6) Systems Track Continued
  {
    "_name": "CSC 300",
    "Title": "Embedded Systems",
    "_deps": ["CSC 226", "CSC 236", "ETAD 265"]
  },
  {
    "_name": "CSC 335",
    "Title": "Computer Organization",
    "_deps": ["CSC 226", "CSC 236"]
  },
  {
    "_name": "CSC 410",
    "Title": "Computational Intelligence",
    "_deps": ["CSC 236"]
  },
  {
    "_name": "CSC 420",
    "Title": "Programming Languages",
    "_deps": ["CSC 236"]
  },
  {
    "_name": "CSC 426",
    "Title": "Open Source Software Engineering",
    "_deps": ["CSC 236"]
  },
  {
    "_name": "CSC 412",
    "Title": "Networking",
    "_deps": ["CSC 236"]
  },
  {
    "_name": "CSC 425",
    "Title": "Operating Systems & VMs",
    "_deps": ["CSC 236"]
  },
  {
    "_name": "CSC 450",
    "Title": "Computer Security",
    "_deps": ["CSC 236"]
  },

  // 7) Required Capstone Courses
  {
    "_name": "CSC 493",
    "Title": "Computing Design Practicum",
    "_deps": ["CSC 440"]
  },
  {
    "_name": "CSC 495",
    "Title": "Internship",
    "_deps": ["CSC 440"]
  },

  // 8) Required Collateral Courses
  {
    "_name": "MAT 216",
    "Title": "Discrete Mathematics",
    "_deps": ["MAT 135"]
  },
  {
    "_name": "MAT 135",
    "Title": "Calculus I",
    "_deps": []
  },

  // 9) Electricity and Electronics (Collateral Requirement)

  // 10) Advanced Capstone Linking All
  {
    "_name": "CSC 490",
    "Title": "Capstone Wizardry",
    "_deps": [
      "CSC 412",
      "CSC 425",
      "CSC 440",
      "CSC 330",
      "CSC 450",
      "CSC 301",
      "CSC 303"
    ]
  },

  // 11) Dummy Nodes for "OR" Prerequisites
  {
    "_name": "Dummy_SENS320_Prereq",
    "Title": "MAT 115 or MAT 125",
    "_deps": ["MAT 115", "MAT 125"]
  },

  // 12) Additional Courses (if applicable)
  {
    "_name": "MAT 115",
    "Title": "Intermediate Algebra",
    "_deps": ["MAT 105"]
  },
];
