# CS TA Website Repository Structure and Documentation

## Overview
This document explains the structure, organization, and interconnections of the CS TA Website repository. It includes details about component relationships, file dependencies, and how to run the application.

## Directory Structure
```
CS_TA_Website/
├── src/
│   ├── components/
│   │   ├── footer.html
│   │   ├── header.html
│   │   └── navigation.html
│   │
│   ├── css/
│   │   ├── career-dev.css
│   │   ├── creative-space.css
│   │   ├── diversity-resources.css
│   │   ├── evening-lab.css
│   │   ├── internship_opportunity.css
│   │   ├── main.css
│   │   ├── meet_ta.css
│   │   ├── navigation.css
│   │   ├── responsive.css
│   │   └── sidebar_and_containers.css
│   │
│   ├── images/
│   │   ├── [image files]
│   │   └── images_for_diversity_directory/
│   │       └── [image files]
│   │
│   ├── js/
│   │   ├── JavaScriptInstructions.js
│   │   ├── main.js
│   │   ├── navigation.js
│   │   └── utils.js
│   │
│   └── pages/
│       ├── alumni.html
│       ├── career-dev/
│       │   ├── career-resources.html
│       │   ├── carrer-dev-pic/
│       │   │   └── [image files]
│       │   ├── conferences.html
│       │   ├── index.css
│       │   ├── index.html
│       │   └── internship-opportunities.html
│       │
│       ├── classes/
│       │   ├── classes-sidebar.html
│       │   ├── classes.html
│       │   ├── classes.js
│       │   └── [class HTML files]
│       │
│       ├── clubs.html
│       ├── committees/
│       │   ├── career-dev-committee/
│       │   ├── committees-sidebar.html
│       │   ├── committees.html
│       │   ├── committees.js
│       │   ├── creative-space/
│       │   │   ├── index.html
│       │   │   ├── TeamPics/
│       │   │   └── workshops.html
│       │   ├── diversity/
│       │   │   ├── diversity-resources.html
│       │   │   ├── index.html
│       │   │   ├── student_origins_map.html
│       │   │   └── ways.html
│       │   └── tech-ethics/
│       │
│       ├── contributions.html
│       ├── contributors.html
│       ├── evening-lab.html
│       ├── meet-the-team/
│       │   ├── meet-makerspace-tas.html
│       │   ├── meet-programmers.html
│       │   ├── meet-robotics.html
│       │   ├── meet-tas.html
│       │   ├── meet-the-team-sidebar.html
│       │   ├── meet-the-team.html
│       │   └── meet-the-team.js
│       │
│       └── student-projects/
│           ├── student-projects.html
│           └── world-map.html
│
├── .gitignore
├── README.md
├── index.html
└── server.py
```

## Core Components and Connections

### CSS Structure and Relationships
- **Global Styles**
  - `main.css`: Applied to all pages, providing base styles
  - `responsive.css`: Ensures responsive design across all devices
  - `sidebar_and_containers.css`: Provides consistent container and sidebar styling
- **Section-Specific Styles**
  - Each section (career-dev, creative-space, etc.) has its own CSS file
  - Section CSS files only apply to their respective pages
  - Handle unique layouts and components specific to each section

### JavaScript Integration
- **Main Files**
  - `main.js`: Loaded on all pages, provides core functionality
  - `navigation.js`: Handles dynamic component loading and navigation state
  - `utils.js`: Contains shared utility functions
- **Section-Specific Scripts**
  - Each major section (classes, meet-the-team) has its own JavaScript file
  - Handles functionality specific to that section
  - Imported only into relevant pages

### Component System
Components in `src/components/` are dynamically loaded:
- `header.html`: Site-wide header
- `footer.html`: Site-wide footer
- `navigation.html`: Main navigation menu
- All components are loaded by `navigation.js` and inserted into appropriate page locations

## Page Organization Patterns

### Standard Section Structure
Each major section should follow this pattern:
1. Main page (e.g., `classes.html`)
2. Sidebar file (e.g., `classes-sidebar.html`)
3. Section JavaScript (e.g., `classes.js`)
4. Individual content pages

### Current Implementation Status
- **Fully Implemented**
  - classes/
  - meet-the-team/
- **In Progress**
  - committees/
- **Needs Reorganization**
  - career-dev/

## How It All Connects

1. **Initial Page Load**
   - HTML file loads with CSS and JavaScript links
   - `main.js` and `navigation.js` execute
   - Components are dynamically inserted

2. **Dynamic Component Loading**
   - `navigation.js` fetches and inserts header, footer, and navigation
   - Current page is highlighted in navigation
   - Section-specific sidebars are loaded if applicable

3. **Style Application**
   - Global styles from `main.css` apply first
   - Responsive styles from `responsive.css` apply
   - Section-specific CSS applies last for customization

4. **JavaScript Functionality**
   - `main.js` handles global interactions
   - `navigation.js` manages navigation state
   - Section-specific JavaScript handles local functionality

## Running the Application

To run locally:
1. Open terminal in root directory
2. Run command: `python server.py`
3. Access site through local server URL

## Future Improvements

1. **Structural Updates**
   - Reorganize career-dev/ to match standard pattern
   - Complete committees/ reorganization
   - Ensure consistent sidebar implementation

2. **Component System**
   - Consider implementing a more robust component loading system
   - Standardize component integration across sections

3. **Documentation**
   - Maintain up-to-date documentation of component relationships

