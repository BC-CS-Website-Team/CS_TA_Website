# Components Directory Documentation

This document provides a detailed explanation of each component in the frontend application's components directory.

## Directory Structure

```
components/
├── team/                  # Team-related components
│   ├── MemberCard.jsx
│   ├── MemberModal.jsx
│   └── TeamSidebar.jsx
├── staff/                 # Staff-specific components
│   └── FacultyCard.jsx
│   └── FacultyModal.jsx
├── Footer.jsx            # Global footer component
└── Navigation.jsx        # Global navigation component
```

## Core Components

### Navigation.jsx
- **Purpose**: Main navigation bar for the entire application
- **Features**:
  - Responsive design with mobile menu
  - Dynamic route highlighting
  - Dropdown menus for nested routes
- **Props**: None (self-contained component)
- **State Management**:
  - Manages mobile menu open/close state
  - Tracks current route for highlighting
- **Usage**:
  ```jsx
  <Navigation />
  ```

### Footer.jsx
- **Purpose**: Global footer component
- **Features**:
  - Contact information
  - Social media links
  - Copyright information
- **Props**: None (self-contained component)
- **Usage**:
  ```jsx
  <Footer />
  ```

## Team Components

### MemberCard.jsx
- **Purpose**: Displays individual team member information in a card format
- **Features**:
  - Image display with hover effects
  - Basic member information
  - Click interaction for modal
- **Props**:
  ```typescript
  {
    member: {
      id: string,
      name: string,
      image: string,
      role: string,
    },
    onClick: (member: Member) => void
  }
  ```
- **Usage**:
  ```jsx
  <MemberCard 
    member={memberData}
    onClick={handleMemberClick}
  />
  ```

### MemberModal.jsx
- **Purpose**: Detailed view of team member information
- **Features**:
  - Full member details
  - Office hours display
  - Course information
  - Contact details
  - Social/professional links
- **Props**:
  ```typescript
  {
    member: {
      id: string,
      name: string,
      image: string,
      email: string,
      role: string,
      hours: Array<Array<{start: number, end: number}>>,
      courses: Array<[string, string, string]>,
      links: Array<[string, string]>
    },
    onClose: () => void
  }
  ```
- **Usage**:
  ```jsx
  <MemberModal 
    member={selectedMember}
    onClose={handleCloseModal}
  />
  ```

### TeamSidebar.jsx
- **Purpose**: Navigation sidebar for team section
- **Features**:
  - Links to different team sections
  - Active route highlighting
  - Responsive design
- **Props**: None (uses React Router for navigation)
- **Usage**:
  ```jsx
  <TeamSidebar />
  ```

## Staff Components

### FacultyCard.jsx
- **Purpose**: Displays faculty member information
- **Features**:
  - Faculty photo
  - Basic information
  - Department affiliation
- **Props**:
  ```typescript
  {
    faculty: {
      id: string,
      name: string,
      image: string,
      title: string,
      department: string
    },
    onClick: (faculty: Faculty) => void
  }
  ```
- **Usage**:
  ```jsx
  <FacultyCard 
    faculty={facultyData}
    onClick={handleFacultyClick}
  />
  ```

### FacultyModal.jsx
- **Purpose**: Detailed view of faculty information
- **Features**:
  - Complete faculty profile
  - Office hours
  - Course teaching schedule
  - Contact information
  - Research interests
- **Props**:
  ```typescript
  {
    faculty: {
      id: string,
      name: string,
      image: string,
      title: string,
      department: string,
      email: string,
      officeHours: string,
      courses: Array<string>,
      research: Array<string>
    },
    onClose: () => void
  }
  ```
- **Usage**:
  ```jsx
  <FacultyModal 
    faculty={selectedFaculty}
    onClose={handleCloseModal}
  />
  ```

## Component Design Patterns

### Common Features
1. **Responsive Design**
   - All components use Tailwind CSS for responsive layouts
   - Mobile-first approach
   - Breakpoint-specific styling

2. **Accessibility**
   - ARIA labels
   - Keyboard navigation
   - Focus management
   - Screen reader support

3. **Error Handling**
   - Prop validation with PropTypes
   - Fallback UI for missing data
   - Error boundaries for component errors

4. **Performance**
   - Optimized image loading
   - Memoization where beneficial
   - Efficient re-rendering

### State Management
- Local state for UI interactions
- Props for data flow
- Context for theme/global state (where applicable)

### Styling Approach
- Tailwind CSS for utility-first styling
- Consistent color scheme
- Shared animation classes
- Common spacing and sizing variables

## Best Practices

1. **Component Organization**
   - Single responsibility principle
   - Clear prop interfaces
   - Consistent file structure
   - JSDoc documentation

2. **Code Quality**
   - PropTypes validation
   - Meaningful component names
   - Clear file organization
   - Consistent code style

3. **Performance Considerations**
   - Lazy loading where appropriate
   - Optimized re-renders
   - Image optimization
   - Code splitting

4. **Maintenance**
   - Regular dependency updates
   - Code review guidelines
   - Testing requirements
   - Documentation updates

## Testing

Each component should have associated tests covering:
- Rendering
- User interactions
- Props validation
- Edge cases
- Accessibility

## Future Improvements

1. **Component Enhancements**
   - Add animation libraries
   - Implement dark mode
   - Add more interactive features
   - Improve accessibility

2. **Technical Debt**
   - Convert to TypeScript
   - Add comprehensive testing
   - Implement Storybook
   - Add performance monitoring

3. **New Features**
   - Advanced filtering
   - Search functionality
   - More customization options
   - Enhanced mobile experience
