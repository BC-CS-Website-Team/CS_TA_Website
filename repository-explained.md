# CS TA Website Project Structure Explanation

## Project Structure Overview

```
.
├── CONTRIBUTING.md
├── index.html
├── README.md
├── scripts
│   └── build.js
└── src
    ├── components
    │   ├── footer.html
    │   ├── header.html
    │   └── navigation.html
    ├── css
    │   ├── career-dev.css
    │   ├── creative-space.css
    │   ├── diversity.css
    │   ├── main.css
    │   ├── navigation.css
    │   └── responsive.css
    ├── js
    │   ├── main.js
    │   ├── navigation.js
    │   └── utils.js
    ├── images
    │   └── resources-svgrepo-com.svg
    └── pages
        ├── alumni.html
        ├── career-dev
        │   ├── index.html
        │   ├── career-resources.html
        │   ├── conferences.html
        │   └── internship-opportunities.html
        ├── clubs.html
        ├── contributions.html
        ├── creative-space
        │   ├── index.html
        │   └── workshops.html
        ├── diversity
        │   ├── index.html
        │   ├── diversity-resources.html
        │   └── world-map.html
        ├── meet-programmers.html
        └── meet-tas.html
```

## Detailed Explanation

### Root Directory

- `index.html`: The main entry point of the website. It includes links to the main CSS files (`main.css` and `responsive.css`) and JavaScript files (`main.js` and `navigation.js`).

### Committee Folders and Index Files

The website is organized into three main committee sections, each with its own folder and index file:

1. Career Development (`src/pages/career-dev/`)
   - `index.html`: Main page for career development resources.
   - Uses `career-dev.css` for specific styling.

2. Creative Space (`src/pages/creative-space/`)
   - `index.html`: Main page for creative projects and initiatives.
   - Uses `creative-space.css` for specific styling.

3. Diversity (`src/pages/diversity/`)
   - `index.html`: Main page for diversity initiatives and resources.
   - Uses `diversity.css` for specific styling.

Each index file follows a similar structure:
- Includes links to `main.css`, `responsive.css`, and its specific CSS file.
- Contains a sidebar navigation specific to that section.
- Includes the main content area.
- Links to `main.js` and `navigation.js` for functionality.

### CSS Connections

- `main.css`: Applied to all pages, providing global styles.
- `responsive.css`: Applied to all pages, ensuring responsive design across devices.
- Section-specific CSS files (e.g., `career-dev.css`, `creative-space.css`, `diversity.css`):
  - Applied only to pages within their respective sections.
  - Contain styles for the sidebar navigation and section-specific elements.

### JavaScript Connections

- `main.js`: Linked in all HTML files, provides general functionality across the site.
- `navigation.js`: Linked in all HTML files, handles:
  - Loading of header, footer, and main navigation components.
  - Highlighting the current page in the navigation.
- `utils.js`: Not directly linked in HTML files, but may be imported by other JavaScript files for utility functions.

### Components

- `header.html`, `footer.html`, `navigation.html`: These components are loaded dynamically by `navigation.js` and inserted into every page, ensuring consistency across the site.

### Other Pages

- `alumni.html`, `clubs.html`, `contributions.html`, `meet-programmers.html`, `meet-tas.html`: These standalone pages follow a similar structure to the index files but without section-specific sidebars.

## How It All Connects

1. When a user accesses any page:
   - The HTML file is loaded, which includes links to the necessary CSS and JavaScript files.
   - `main.js` and `navigation.js` are executed.

2. `navigation.js`:
   - Loads the header, footer, and main navigation components from the `components` directory.
   - Inserts these components into the appropriate places in the HTML.
   - Highlights the current page in the navigation menu.

3. For committee pages (Career Dev, Creative Space, Diversity):
   - The section-specific CSS file styles the sidebar and any unique elements.
   - The sidebar provides easy navigation within that section.

4. Global styles from `main.css` and responsive designs from `responsive.css` are applied across all pages, ensuring a consistent look and feel.

5. Any interactive elements or dynamic content are handled by the JavaScript files, with `main.js` managing global interactions and `navigation.js` handling navigation-specific functionality.

This structure allows for easy maintenance and scalability. Each committee section can be updated independently, while still maintaining consistency with the overall site design and functionality.

### `CONTRIBUTING.md`

Provides guidelines for TAs or other contributors on how to set up the development environment, make changes to the codebase, submit pull requests, and follow coding standards.

### `README.md`

Offers an overview of the project, provides setup instructions, and lists features and project structure.

## Project Structure Insights

This structure represents a static website with multiple pages and sections, using vanilla HTML, CSS, and JavaScript. The separation of concerns (HTML for structure, CSS for presentation, JS for behavior) is well-maintained. The use of component files and the organization of pages into subdirectories keeps the codebase DRY (Don't Repeat Yourself) and maintainable. The structure with subdirectories for main sections (career-dev, creative-space, diversity) allows for better organization and scalability.