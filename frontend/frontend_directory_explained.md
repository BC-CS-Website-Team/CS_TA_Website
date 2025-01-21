# Frontend Directory Documentation

## Overview
This directory contains the React-based frontend application for the CS TA Website. Built with modern web technologies including React, Vite, and TailwindCSS, it provides a responsive and interactive user interface for students and TAs.

## Directory Structure

### 📁 Core Directories

#### `src/`
The heart of our React application containing all source code.
[See detailed src documentation](./src/src_directory_explained.md)

Key subdirectories (each with their own documentation):
- [Components](./src/components/components_directory_explained.md)
- [Layouts](./src/layouts/layout_directory_explained.md)
- [Pages](./src/pages/directory_explained.md)

#### `public/`
Contains static assets that:
- Are directly served without processing
- Need to be referenced by absolute paths
- Maintain their exact filenames

Structure:
- `assets/`: Static resources like fonts
- `images/`: Static images that don't require processing
- `vite.svg`: Application favicon

### 📁 Configuration Files

#### Build and Development
- `vite.config.js`: Vite configuration for build and development
- `postcss.config.js`: PostCSS configuration for CSS processing
- `tailwind.config.js`: TailwindCSS configuration and customization
- `eslint.config.js`: ESLint rules and code style configuration

#### Package Management
- `package.json`: Project dependencies and scripts
- `package-lock.json`: Locked dependency versions
- `node_modules/`: Installed dependencies (not tracked in git)

#### Environment and Build
- `.env`: Environment variables (not tracked in git)
- `dist/`: Production build output (not tracked in git)
- `.vite/`: Vite cache directory (not tracked in git)

### 📄 Core Files

#### `index.html`
The entry point HTML file that:
- Defines the root DOM element
- Includes initial meta tags
- Links to external resources
- Loads the main JavaScript entry point

#### `README.md`
Project documentation including:
- Setup instructions
- Development guidelines
- Deployment procedures
- Project structure overview

## File Organization Hierarchy

```
frontend/
├── public/                 # Static assets
│   ├── assets/            # Fonts and other resources
│   ├── images/            # Static images
│   └── vite.svg          # Favicon
│
├── src/                   # Application source code
│   ├── components/        # Reusable UI components
│   ├── layouts/           # Page layouts
│   ├── pages/            # Page components
│   ├── App.jsx           # Root component
│   └── main.jsx          # Application entry point
│
├── documentation/         # Additional documentation
│
└── [config files]        # Various configuration files
```

## Development Workflow

### Setup
1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

### Building
1. Create production build:
   ```bash
   npm run build
   ```

2. Preview production build:
   ```bash
   npm run preview
   ```

## Configuration Details

### Vite
The project uses Vite for:
- Fast development server
- Efficient build process
- Hot Module Replacement (HMR)
- Optimized production builds

### TailwindCSS
Provides:
- Utility-first CSS framework
- Custom design system
- Responsive design utilities
- Component styling

### ESLint
Ensures:
- Code quality
- Consistent style
- Best practices
- Error prevention

## Best Practices

### Asset Management
- Use `public/` for static assets that need unchanged names
- Use `src/assets/` for assets that should be processed
- Optimize images before adding to repository

### Code Organization
- Keep related files close together
- Use clear, consistent naming
- Follow established directory structure
- Document complex configurations

### Performance
- Optimize asset sizes
- Use code splitting
- Implement lazy loading
- Monitor bundle sizes

## Feature Example: Career Development Section
To better understand how different parts of the codebase work together, we've documented the Career Development section as a comprehensive example:

[Career Development Documentation](./documentation/career_development_explained.md)

This documentation demonstrates:
- How pages are organized within a section
- How layouts are applied consistently
- How components are shared and reused
- How routing is structured for a feature
- Best practices for feature implementation

## Related Documentation
- [Source Directory Documentation](./src/src_directory_explained.md)
- [Components Documentation](./src/components/components_directory_explained.md)
- [Layouts Documentation](./src/layouts/layout_directory_explained.md)
- [Pages Documentation](./src/pages/directory_explained.md)

This documentation provides a comprehensive overview of the frontend directory structure and its purpose. For more detailed information about specific directories, please refer to their respective documentation files linked above.
