# CS TA Website Repository Documentation

This document provides a comprehensive overview of the CS TA Website's frontend React application structure, explaining key components, their relationships, and functionality.

## Project Structure

```
frontend/
├── src/
│   ├── assets/
│   │   └── images/          # Image assets for team members and logos
│   ├── components/
│   │   ├── team/           # Team-related components
│   │   │   ├── MemberCard.jsx
│   │   │   ├── MemberModal.jsx
│   │   │   └── TeamSidebar.jsx
│   │   ├── Footer.jsx
│   │   └── Navigation.jsx
│   ├── data/
│   │   └── teamData.js     # Centralized data for team members
│   ├── layouts/
│   │   ├── MainLayout.jsx  # Main application layout
│   │   └── TeamLayout.jsx  # Layout for team-related pages
│   ├── pages/
│   │   ├── team/
│   │   │   ├── MeetTAs.jsx
│   │   │   ├── MeetProgrammers.jsx
│   │   │   ├── MeetRobotics.jsx
│   │   │   ├── MeetMakerspace.jsx
│   │   │   └── TeamOverview.jsx
│   │   └── Home.jsx
│   ├── styles/
│   │   └── index.css       # Global styles
│   ├── utils/
│   │   └── timeUtils.js    # Time formatting utilities
│   └── App.jsx             # Root component and routing
```

## Key Components

### Layouts

#### MainLayout.jsx
- Main application layout wrapper
- Includes navigation and footer
- Renders child components in the main content area

#### TeamLayout.jsx
- Specialized layout for team-related pages
- Includes TeamSidebar for navigation between different team sections
- Manages the layout for all team member pages

### Team Components

#### MemberCard.jsx
- Reusable component for displaying team member cards
- Props:
  - `member`: Object containing member details (name, image, role)
  - `onClick`: Function to handle card click
- Features:
  - Hover animations
  - Responsive image display
  - Role-based styling

#### MemberModal.jsx
- Modal component for displaying detailed team member information
- Props:
  - `member`: Detailed member information
  - `onClose`: Function to close modal
- Features:
  - Office hours display
  - Course information
  - Contact details
  - Social links

#### TeamSidebar.jsx
- Navigation sidebar for team section
- Features:
  - Links to different team pages (TAs, Programmers, etc.)
  - Active state indication
  - Responsive design

### Pages

#### MeetTAs.jsx
- Main page for displaying Teaching Assistants
- Features:
  - Separate sections for Leads and TAs
  - Grid layout for member cards
  - Modal integration for detailed view
- Uses:
  - MemberCard for displaying individual TAs
  - MemberModal for detailed information
  - taData from teamData.js

### Data Management

#### teamData.js
- Centralized data store for all team members
- Exports:
  - `taData`: Array of TA information
  - `programmers`: Array of programmer information
  - `roboticsTeam`: Array of robotics team information
  - `makerspaceTeam`: Array of makerspace team information
- Data structure for team members:
  ```javascript
  {
    id: string,
    name: string,
    image: string,
    email: string,
    role: string,
    hours: array,      // Office hours schedule
    courses: array,    // Course information
    links: array       // Social/professional links
  }
  ```

### Utilities

#### timeUtils.js
- Utility functions for time formatting
- Functions:
  - `formatTime`: Converts decimal time to HH:MM format
  - Used in MemberModal for displaying office hours

## Routing

The application uses React Router for navigation:

```javascript
/                           // Home page
/meet-the-team/            // Team overview
├── /tas                   // Teaching Assistants
├── /programmers           // Programmers
├── /robotics              // Robotics team
└── /makerspace           // Makerspace team
```

## Styling

- Uses Tailwind CSS for styling
- Consistent color scheme using CSS variables
- Responsive design with mobile-first approach
- Common styling patterns:
  - Grid layouts for card displays
  - Hover effects for interactive elements
  - Modal overlays for detailed views

## Best Practices

1. **Component Organization**
   - Reusable components in `/components`
   - Page-specific components with pages
   - Shared layouts in `/layouts`

2. **Data Management**
   - Centralized data in `/data`
   - Consistent data structures
   - Type checking with PropTypes

3. **Code Style**
   - Clear component and function names
   - JSDoc comments for documentation
   - Consistent file structure

4. **Performance**
   - Image optimization
   - Lazy loading for routes
   - Efficient state management

## Future Improvements

1. **Features**
   - Search/filter functionality for team members
   - Calendar integration for office hours
   - Dynamic course information updates

2. **Technical**
   - Add TypeScript for better type safety
   - Implement testing with Jest/React Testing Library
   - Add error boundaries for better error handling

3. **UI/UX**
   - Dark mode support
   - Accessibility improvements
   - More interactive elements

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Access the application at `http://localhost:5173`
