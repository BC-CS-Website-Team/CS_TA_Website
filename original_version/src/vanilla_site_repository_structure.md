# CS TA Website Repository Structure

This document provides a comprehensive overview of the website's structure, components, and functionality.

## Directory Structure

```
src/
├── components/      # Reusable HTML components
├── css/            # Stylesheets
├── images/         # Optimized images
├── js/            # JavaScript files
└── pages/         # Website pages and content
```

## Key Components

### JavaScript Files (`/src/js/`)

1. **main.js**
   - Handles core website functionality
   - Implements smooth scrolling for anchor links
   - Manages dropdown menu interactions
   - Contains detailed documentation for maintainability

2. **navigation.js**
   - Manages dynamic component loading
   - Loads navigation, header, and footer components
   - Highlights current page in navigation
   - Handles responsive menu behavior

3. **popupTA.js & popupProStaff.js**
   - Manages modal popups for team member profiles
   - Handles dynamic content loading for staff information
   - Controls modal open/close animations

4. **JavaScriptInstructions.js**
   - Contains documentation and instructions for JavaScript functionality
   - Serves as a reference for maintainers

### HTML Components (`/src/components/`)

1. **navigation.html**
   - Main navigation bar structure
   - Responsive dropdown menus
   - Logo and main site links
   - Integrated with Font Awesome icons

2. **footer.html**
   - Site-wide footer component
   - Contains contact information and links
   - Social media integration

3. **header.html**
   - Site header component
   - Branding elements

## Page Structure

### Meet The Team Section (`/src/pages/meet-the-team/`)
- Overview page with team introduction
- Separate pages for different team categories:
  - CS TAs
  - Programmers
  - Robotics Team
  - Makerspace TAs
- Each page shares the same navigation sidebar

### Career Development (`/src/pages/career-development-pages/`)
- Main overview page
- Resources page
- Conferences information
- Internship opportunities
- Consistent sidebar navigation across section

### Classes (`/src/pages/classes/`)
- Individual pages for each course
- Shared structure for consistency
- Course-specific resources and information

### Committees (`/src/pages/committees/`)
- Overview of all committees
- Individual committee pages
- Shared sidebar navigation

### Course Visualizer (`/src/pages/course_visualizer/`)
- Interactive course prerequisite visualization
- Course planning tools
- Dynamic content loading

## Navigation System

The website uses a hierarchical navigation system:
1. Top-level navigation bar (persistent across all pages)
2. Section-specific sidebars (shared within each major section)
3. Dropdown menus for quick access to subsections

### Sidebar Implementation
- Each major section (Career Development, Committees, etc.) has its own sidebar
- Sidebars are shared among pages within the same category
- Highlights current page for better user orientation

## Image Management

- Images are stored in `/src/images/`
- All images are optimized for web performance
- Original images backed up in `/src/images_backup/`
- SVG files used for icons and simple graphics

## CSS Organization

The CSS is organized by component and functionality:
- Component-specific styles (navigation.css, footer.css)
- Page-specific styles
- Responsive design implementations
- Shared utility classes

## Best Practices

1. **Component Reuse**
   - Common elements are componentized
   - Shared navigation and footer across pages
   - Consistent styling through shared CSS

2. **Performance**
   - Optimized images for faster loading
   - Efficient JavaScript implementation
   - Modular code structure

3. **Maintenance**
   - Clear documentation in code
   - Consistent file naming conventions
   - Organized directory structure

4. **Accessibility**
   - Semantic HTML structure
   - ARIA labels where necessary
   - Responsive design for all devices

## Development Guidelines

1. **Adding New Pages**
   - Use existing templates for consistency
   - Include necessary component imports
   - Follow established CSS patterns

2. **Modifying Navigation**
   - Update navigation.html for global changes
   - Maintain dropdown structure
   - Update highlighting logic in navigation.js

3. **Adding Team Members**
   - Use existing popup templates
   - Optimize member images
   - Update relevant JavaScript data

4. **Style Changes**
   - Modify appropriate CSS files
   - Test responsive breakpoints
   - Maintain consistency with existing design
