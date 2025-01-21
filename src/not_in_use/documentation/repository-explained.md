# CS TA Website Repository Documentation

## Repository Structure

```
CS_TA_Website/
├── documentation/
│   ├── CONTRIBUTING.md
│   └── repository-explained.md
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
│   │   └── [image files]
│   │
│   ├── js/
│   │   ├── JavaScriptInstructions.js
│   │   ├── main.js
│   │   ├── navigation.js
│   │   └── utils.js
│   │
│   └── pages/
│       ├── alumni.html
│       ├── career-development-pages/
│       │   ├── career-development-page.html
│       │   ├── career-resources.html
│       │   ├── conferences.html
│       │   ├── index.css
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
│       │   │   └── carrer-dev-pic/
│       │   │       └── [image files]
│       │   ├── career-dev-committee.html
│       │   ├── committees-sidebar.html
│       │   ├── committees.html
│       │   ├── committees.js
│       │   ├── creative-space-committee/
│       │   │   ├── TeamPics/
│       │   │   │   └── [image files]
│       │   │   └── workshops.html
│       │   ├── creative_space_committee.html
│       │   ├── diversity-in-stem-committee/
│       │   │   ├── diversity-resources.html
│       │   │   ├── images_for_diversity_directory/
│       │   │   │   └── [image files]
│       │   │   └── student_origins_map.html
│       │   ├── diversity_in_stem_committee.html
│       │   ├── tech-ethics/
│       │   └── tech-ethics-committee.html
│       │
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
├── index.html
├── README.md
└── server.py
```

## Core Components and Organization

### Root Directory
- `index.html`: Main entry point and homepage of the website
- `server.py`: Python script for running the application locally
- `README.md`: Project overview and setup instructions

### Documentation Directory
- `CONTRIBUTING.md`: Guidelines for contributors
- `repository-explained.md`: Detailed repository documentation

### Source Directory (`src/`)

#### Components (`components/`)
- `header.html`: Site-wide header component
- `footer.html`: Site-wide footer component
- `navigation.html`: Main navigation menu component
All components are dynamically loaded via JavaScript and inserted into each page.

#### CSS Structure (`css/`)
- Global Styles:
  - `main.css`: Base styles for all pages
  - `responsive.css`: Responsive design rules
  - `sidebar_and_containers.css`: Container and sidebar layouts
- Section-Specific Styles:
  - `career-dev.css`: Career development section styles
  - `creative-space.css`: Creative space section styles
  - `diversity-resources.css`: Diversity section styles
  - Additional specialized stylesheets for specific features

#### JavaScript (`js/`)
- `main.js`: Core functionality for all pages
- `navigation.js`: Component loading and navigation state management
- `utils.js`: Shared utility functions
- `JavaScriptInstructions.js`: Development guidelines and instructions

#### Pages (`pages/`)

##### Standard Section Structure
Each major section follows a consistent pattern:
1. Main page
2. Sidebar file
3. Section JavaScript
4. Content pages
5. Resource directories

##### Section Organization

**Career Development Pages**
- Main page: `career-development-page.html`
- Resource pages:
  - `career-resources.html`
  - `conferences.html`
  - `internship-opportunities.html`
- Styling: `index.css`

**Classes**
- Main page: `classes.html`
- Navigation: `classes-sidebar.html`
- Functionality: `classes.js`
- Content: Multiple class-specific HTML files

**Committees**
- Main components:
  - `committees.html`: Landing page
  - `committees-sidebar.html`: Navigation
  - `committees.js`: Functionality
- Committee sections:
  1. Career Development Committee
     - `career-dev-committee.html`
     - `carrer-dev-pic/`: Team images
  2. Creative Space Committee
     - `creative_space_committee.html`
     - `workshops.html`
     - `TeamPics/`: Team images
  3. Diversity in STEM Committee
     - `diversity_in_stem_committee.html`
     - Supporting pages for resources and initiatives
  4. Tech Ethics Committee
     - `tech-ethics-committee.html`

**Meet the Team**
- Main page: `meet-the-team.html`
- Navigation: `meet-the-team-sidebar.html`
- Functionality: `meet-the-team.js`
- Team pages:
  - `meet-makerspace-tas.html`
  - `meet-programmers.html`
  - `meet-robotics.html`
  - `meet-tas.html`

**Other Pages**
- `alumni.html`: Alumni showcase
- `clubs.html`: CS clubs information
- `evening-lab.html`: Evening lab information
- Student Projects section:
  - `student-projects.html`
  - `world-map.html`

## Page Loading and Integration

1. **Initial Load**
- HTML file loads with required CSS and JavaScript
- Components are dynamically inserted
- Section-specific resources are loaded

2. **Style Application**
- Global styles from `main.css`
- Responsive design from `responsive.css`
- Section-specific CSS
- Container and sidebar styles

3. **JavaScript Functionality**
- Component loading via `navigation.js`
- Global interactions via `main.js`
- Section-specific functionality through dedicated JS files

## Running the Application
1. Open terminal in root directory
2. Execute: `python server.py`
3. Access via local server URL

## Development Guidelines

### Style Implementation
- Use global styles for consistent elements
- Implement section-specific styles in dedicated CSS files
- Follow responsive design patterns in `responsive.css`

### Component Development
- Create reusable components in `components/` directory
- Use standard loading patterns via `navigation.js`
- Maintain consistent structure across sections

### JavaScript Usage
- Implement global functions in `utils.js`
- Use `main.js` for site-wide functionality
- Create section-specific JS files for local features

## Maintenance

### Adding New Sections
1. Create section directory in `pages/`
2. Implement standard file structure:
   - Main HTML file
   - Sidebar navigation
   - Section JavaScript
   - Content pages
3. Add section-specific styles if needed
4. Update global navigation


