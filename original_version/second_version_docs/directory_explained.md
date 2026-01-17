# Pages Directory Documentation

## Overview
The `pages` directory contains all the main page components for the CS TA Website. Each file or subdirectory represents a distinct route or section of the website.

## Directory Structure

### Root Level Pages
- `Home.jsx` - The main landing page of the website
- `Clubs.jsx` - Information about CS-related clubs
- `EveningLab.jsx` - Details about evening lab sessions

### Subdirectories

#### `/team`
Contains components related to the TA team presentation:
- Houses files like `MeetTAs.jsx` which displays the teaching staff
- Connects with `/src/data/teamData.js` for TA information and data

#### `/classes`
Components related to course information and materials

#### `/career`
Career-related resources and information pages

#### `/committees`
Committee-specific pages and information

#### `/alumni`
Alumni-related content and showcase

#### `/projects`
Project showcase and documentation pages

## Connections with Other Directories

### Data Integration
- Pages connect with `/src/data/` for static content and configuration
- Example: `team/MeetTAs.jsx` uses data from `/src/data/teamData.js`

### Component Usage
- Pages utilize reusable components from `/src/components/`
- These components provide consistent UI elements across different pages

### Layout Integration
- Pages are wrapped in layouts from `/src/layouts/`
- Layouts provide consistent page structure and navigation

### Asset Usage
- Pages can access images and other static assets from `/src/assets/`
- Assets are used for illustrations, icons, and other media content

### Styling
- Pages use styles from `/src/styles/`
- May also contain component-specific CSS modules

### Utility Functions
- Pages can utilize helper functions from `/src/utils/`
- These provide common functionality across different pages

## Best Practices
1. Each page component should be focused on a single responsibility
2. Use shared components from `/components` whenever possible
3. Keep data fetching logic separate from presentation
4. Maintain consistent naming conventions
5. Use lazy loading for optimized performance

## Navigation
Pages are connected through React Router, with routes defined in the main App component. The navigation structure is maintained in the layout components, ensuring consistent navigation across the site.
