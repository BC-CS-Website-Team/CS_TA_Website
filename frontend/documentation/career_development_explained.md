# Career Development Section Documentation

This document explains the structure and organization of the Career Development section of the CS TA Website. The section is built using React and follows a modular component-based architecture.

## Directory Structure

```
frontend/
├── src/
│   ├── layouts/
│   │   └── CareerLayout.jsx       # Layout wrapper for career pages
│   ├── components/
│   │   └── career/
│   │       ├── CareerSidebar.jsx  # Navigation sidebar
│   │       └── DropdownSection.jsx # Reusable dropdown component
│   └── pages/
│       └── career/
│           ├── CareerDevelopment.jsx  # Overview page
│           ├── CareerResources.jsx    # Resources page
│           ├── Conferences.jsx        # Conferences page
│           └── Internships.jsx        # Internships page
```

## Component Hierarchy

```
App.jsx
└── MainLayout
    └── CareerLayout
        ├── CareerSidebar
        └── [Page Components]
            ├── CareerDevelopment
            ├── CareerResources
            ├── Conferences
            └── Internships
```

## Key Components

### 1. CareerLayout (`layouts/CareerLayout.jsx`)
- Serves as the main layout wrapper for all career development pages
- Implements a two-column layout with sidebar navigation
- Uses React Router's `Outlet` for rendering child routes
- Provides consistent padding and maximum width constraints

```jsx
<CareerLayout>
  <CareerSidebar />
  <Outlet />  {/* Renders the active route's component */}
</CareerLayout>
```

### 2. CareerSidebar (`components/career/CareerSidebar.jsx`)
- Provides navigation between different career development pages
- Uses React Router's `NavLink` for active link highlighting
- Links to:
  - Overview
  - Career Resources
  - Conferences
  - Internships

### 3. Page Components

#### CareerDevelopment (`pages/career/CareerDevelopment.jsx`)
- Overview page for career development section
- Features expandable sections using the `DropdownSection` component
- Includes:
  - Funding opportunities
  - Tools and resources
  - Career development department link

#### CareerResources (`pages/career/CareerResources.jsx`)
- Comprehensive list of career development resources
- Uses the `ResourceSection` component for each category
- Categories include:
  - Major selection
  - Job search tips
  - Resume building
  - Networking
  - Professional development
  - Interview preparation
  - Graduate school planning

#### Conferences (`pages/career/Conferences.jsx`)
- Information about relevant conferences
- Features:
  - Conference cards with details
  - Funding opportunities
  - Preparation checklist
  - Student experiences
- Components:
  - `ConferenceCard`
  - `FundingSection`
  - `PreparationSection`
  - `ExperiencesSection`

#### Internships (`pages/career/Internships.jsx`)
- Displays internship opportunities
- Features:
  - Berea College internships
  - Research opportunities
  - External resources
- Components:
  - `InternshipCard`
  - `ExternalResourceCard`

## Routing

The routing is handled in `App.jsx` using React Router:

```jsx
<Route path="/career-development" element={<CareerLayout />}>
  <Route index element={<CareerDevelopment />} />
  <Route path="resources" element={<CareerResources />} />
  <Route path="conferences" element={<Conferences />} />
  <Route path="internships" element={<Internships />} />
</Route>
```

## Reusable Components

### DropdownSection (`components/career/DropdownSection.jsx`)
- Used for expandable/collapsible content sections
- Features:
  - Smooth animations
  - Chevron indicators
  - Accessible button controls

### Common UI Elements
- External link icons
- Consistent card designs
- Grid layouts for responsive design
- Warning alerts for important notices

## Styling

The career development section uses:
- Tailwind CSS for utility-based styling
- Consistent color scheme with primary colors
- Responsive design patterns
- Hover effects for interactive elements
- Shadow effects for depth
- Grid and Flexbox for layouts

## Navigation Integration

The career development section is integrated into the main navigation through:
1. The main navigation bar (`Navigation.jsx`)
2. The career sidebar (`CareerSidebar.jsx`)
3. React Router for handling routes

## Best Practices Implemented

1. **Component Organization**
   - Reusable components are separated
   - Layout components handle structure
   - Page components focus on content

2. **Accessibility**
   - Semantic HTML structure
   - ARIA attributes where needed
   - Proper heading hierarchy
   - Keyboard navigation support

3. **Performance**
   - Component-based architecture
   - Lazy loading potential for routes
   - Optimized images

4. **Maintainability**
   - Clear component hierarchy
   - Consistent naming conventions
   - Modular structure
   - Reusable components

## Future Improvements

Potential areas for enhancement:
1. Add search functionality for resources
2. Implement filters for internships
3. Add a calendar view for conferences
4. Create an interactive checklist for conference preparation
5. Add a submission form for new opportunities

## Contributing

When adding new features to the career development section:
1. Follow the existing component structure
2. Maintain consistent styling
3. Add appropriate documentation
4. Ensure accessibility standards are met
5. Test responsive behavior
