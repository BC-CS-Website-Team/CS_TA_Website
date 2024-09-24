# CS TA Website Project Structure Explanation

## Project Structure Overview

```
.
├──  CONTRIBUTING.md
├──  index.html
├──  README.md
├──  scripts
│  └──  build.js
└──  src
   ├──  components
   │  ├──  footer.html
   │  ├──  header.html
   │  └──  navigation.html
   ├──  css
   │  ├──  creative-space.css
   │  ├──  main.css
   │  ├──  navigation.css
   │  └──  responsive.css
   ├──  js
   │  ├──  main.js
   │  ├──  navigation.js
   │  └──  utils.js
   └──  pages
      ├──  alumni.html
      ├──  career-dev.html
      ├──  clubs.html
      ├──  contributions.html
      ├──  creative-space.html
      ├──  diversity.html
      ├──  index.html
      ├──  meet-programmers.html
      └──  meet-tas.html
```

## Detailed Explanation

### Root Directory

- `CONTRIBUTING.md`: Guidelines for contributors to the project.
- `index.html`: The main entry point of the website.
- `README.md`: Project documentation and setup instructions.

### `scripts` Directory

- `build.js`: Script for building or bundling the project (if needed).

### `src` Directory

Contains the source code for the website.

#### `components` Directory

- `footer.html`: Contains the HTML for the website's footer.
- `header.html`: Contains the HTML for the website's header.
- `navigation.html`: Contains the HTML for the website's navigation menu.

#### `css` Directory

- `creative-space.css`: Specific styles for the creative space page.
- `main.css`: Global styles applied across all pages.
- `navigation.css`: Styles specific to the navigation component.
- `responsive.css`: Styles for making the website responsive across different devices.

#### `js` Directory

- `main.js`: Main JavaScript file for general website functionality.
- `navigation.js`: JavaScript specific to navigation functionality.
- `utils.js`: Utility functions used across the website.

#### `pages` Directory

Contains individual HTML files for each page of the website:

- `alumni.html`: Page showcasing alumni of the CS TA program.
- `career-dev.html`: Information about career development opportunities.
- `clubs.html`: Information about CS-related clubs.
- `contributions.html`: Highlights contributions made by TAs or to the program.
- `creative-space.html`: Showcases creative projects or ideas.
- `diversity.html`: Information about diversity initiatives in the program.
- `meet-programmers.html`: Introduces programmers involved in the program.
- `meet-tas.html`: Introduces the current Teaching Assistants.

## File Purposes and Effects

### HTML Files

- `index.html` (in root): The homepage of the website.
- Pages in `src/pages/`: Each file represents a different page of the website, focusing on specific aspects of the CS TA program.

### CSS Files

- `main.css`: Contains global styles applied to all pages, including:
  - Basic reset styles
  - Typography settings
  - Layout structures
  - Common component styles
- `creative-space.css`: Specific styles for the creative space page, like project layouts or unique color schemes.
- `navigation.css`: Styles for the navigation menu, including layout, colors, and hover effects.
- `responsive.css`: Contains media queries and flexible layouts to ensure the website looks good on all device sizes.

### JavaScript Files

- `main.js`: Handles general website functionality, such as:
  - Initializing components
  - Managing global state
  - Handling common interactions
- `navigation.js`: Manages navigation-specific functionality:
  - Highlighting the current page in the menu
  - Handling mobile menu toggle
  - Smooth scrolling to sections
- `utils.js`: Contains utility functions that might be used across different scripts, such as:
  - Date formatting
  - Data validation
  - Helper functions for DOM manipulation

### Component Files

These HTML snippets (`footer.html`, `header.html`, `navigation.html`) are used to maintain consistency across pages and make updates easier. 

### `build.js`

This script can be used for tasks like:
- Minifying CSS and JavaScript
- Optimizing images
- Generating a production-ready version of the website

### `CONTRIBUTING.md`

Provides guidelines for TAs or other contributors on how to:
- Set up the development environment
- Make changes to the codebase
- Submit pull requests
- Follow coding standards

### `README.md`

- Offers an overview of the project
- Provides setup instructions
- Lists features and project structure

## Project Structure Insights

This structure displays a static website with multiple pages, using vanilla HTML, CSS, and JavaScript. The separation of concerns (HTML for structure, CSS for presentation, JS for behavior) is well-maintained. The use of component files (`header.html`, `footer.html`, `navigation.html`) is an attempt to keep the codebase DRY (Don't Repeat Yourself) and maintainable.


