# Source Directory (`src`) Documentation

## Overview
The `src` directory is the heart of our React application, containing all the source code that makes up the CS TA Website. This directory follows React best practices and modern frontend architecture patterns.

## Key Files

### `main.jsx`
This is the entry point of our React application. It:
- Initializes the React application using `createRoot` (React 18's rendering method)
- Wraps the app in `StrictMode` for additional development checks
- Mounts the application to the DOM element with id 'root'
- Imports global styles from `index.css`

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

### `App.jsx`
This is the root component of our application. It:
- Sets up the routing configuration using `react-router-dom`
- Imports and organizes all major layouts
- Defines the main route structure
- Handles top-level state management and providers

The routing structure organizes our application into several main sections:
- Team pages
- Career resources
- Classes information
- Committee pages
- General pages (Home, Clubs, Evening Lab)

## Directory Structure


### 📁 `components/`
Reusable UI components used across different pages.
[See components documentation](./components/components_directory_explained.md) for detailed information about our component architecture.

### 📁 `layouts/`
Page layout components that provide consistent structure across the application.
[See layouts documentation](./layouts/layout_directory_explained.md) for detailed information about our layout system.

### 📁 `pages/`
Individual page components organized by section.
[See pages documentation](./pages/directory_explained.md) for detailed information about our page structure.

### 📁 `data/`
Contains static data and configuration files used throughout the application.

### 📁 `hooks/`
Custom React hooks for shared functionality across components.

### 📁 `styles/`
Global styles and shared styling utilities:
- `index.css`: Global CSS rules and variables
- Other CSS modules for specific components

### 📁 `utils/`
Utility functions and helper methods used across the application.

## Application Flow

1. `main.jsx` bootstraps the application
2. `App.jsx` sets up routing and global providers
3. Routes direct to specific pages in the `pages` directory
4. Pages are wrapped in appropriate layouts from the `layouts` directory
5. Pages compose reusable components from the `components` directory
6. Components use:
   - Styles from `styles` directory
   - Data from `data` directory
   - Helper functions from `utils` directory
   - Custom hooks from `hooks` directory
   - Assets from `assets` directory

## Best Practices

### File Organization
- Keep related files close together
- Use clear, consistent naming conventions
- Group files by feature when appropriate

### Code Structure
- Follow component composition patterns
- Keep components focused and single-responsibility
- Use proper TypeScript/PropTypes for type safety

### State Management
- Use React hooks for local state
- Implement context for shared state when needed
- Keep state as close to where it's needed as possible

### Performance
- Implement code splitting using React.lazy()
- Use proper memoization techniques
- Optimize asset loading and bundling

## Common Development Workflows

### Adding a New Page
1. Create new page component in `pages` directory
2. Add route in `App.jsx`
3. Use appropriate layout from `layouts`
4. Import necessary components from `components`

### Creating New Features
1. Add reusable components to `components` directory
2. Create necessary utility functions in `utils`
3. Add any required static data to `data` directory
4. Implement custom hooks if needed in `hooks`

## Related Documentation
- [Components Directory](./components/components_directory_explained.md)
- [Layouts Directory](./layouts/layout_directory_explained.md)
- [Pages Directory](./pages/directory_explained.md)

## Development Guidelines

### Code Style
- Use functional components
- Implement proper error boundaries
- Follow React hooks best practices
- Maintain consistent code formatting

### Testing
- Write unit tests for utilities
- Create component tests for reusable components
- Implement integration tests for key user flows

### Performance Monitoring
- Use React DevTools for component profiling
- Monitor bundle sizes
- Implement performance metrics tracking

This documentation provides a high-level overview of the src directory structure and its purpose. For more detailed information about specific directories, please refer to their respective documentation files linked above.
