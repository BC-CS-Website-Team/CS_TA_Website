# Atomic Design Repository Documentation

## Overview
This repository contains the Berea College Computer Science Teaching Assistant Website. The project is built using **React** and **Vite** and has been restructured to follow **Atomic Design Principles**.

## Atomic Design Structure

We organize our UI components into five distinct levels. Here is how they apply to our project:

### 1. Atoms (`src/components/atoms`)
**Smallest building blocks.** These cannot be broken down further without losing their meaning.
- *Examples*: Buttons, Inputs, Labels, Icons, Typography (Headings, Paragraphs).
- *Current Status*: Reserved for future low-level UI components.

### 2. Molecules (`src/components/molecules`)
**Groups of atoms functioning together.** These are the bread-and-butter reusable components.
- *Examples*: `ProfileCard`, `DropdownSection`.
- **Key Component: `ProfileCard`**
  - A versatile card used for Faculty, TAs, and Robotics team members.
  - **Props**: `image`, `name`, `role`, `onClick`, `variant` ('default' or 'round').

### 3. Organisms (`src/components/organisms`)
**Complex UI sections formed by molecules and atoms.** These form distinct parts of an interface.
- *Examples*:
  - **Navigation**: The top navigation bar.
  - **Footer**: The site footer.
  - **Sidebars**: `CareerSidebar`, `TeamSidebar`, `ClassesSidebar`.
  - **Modals**: `FacultyModal`, `TeamMemberModal` (contain detailed info logic).

### 4. Templates (`src/components/templates`)
**Page layouts.** These define the structure of a page without specific content. They wrap pages to provide consistent navigation and footers.
- *Examples*:
  - `MainLayout`: Standard layout with Nav and Footer.
  - `TeamLayout`, `CareerLayout`: Layouts with specific Sidebars.

### 5. Pages (`src/pages`)
**Specific instances of templates.** These are the actual routes accessed by the user. They fetch data and pass it to templates and organisms.
- *Examples*: `Home.jsx`, `MeetTAs.jsx`, `CareerDevelopment.jsx`.

---

## Project Map: Finding Everything

```
frontend/
├── public/                 # Static assets (images, logos)
├── src/
│   ├── assets/            # Imported assets
│   ├── components/        # ATOMIC DESIGN ROOT
│   │   ├── atoms/         # Base elements
│   │   ├── molecules/     # Reusable components (ProfileCard)
│   │   ├── organisms/     # Complex sections (Nav, Footer, Modals)
│   │   └── templates/     # Page Layouts
│   ├── data/              # Static data files (JSON/CSV)
│   ├── documentation/     # Legacy docs
│   ├── pages/             # Route components (Views)
│   ├── utils/             # Helper functions (CSV loaders)
│   ├── App.jsx            # Routing configuration
│   └── main.jsx           # Entry point
└── vite.config.js         # Build configuration
```

---

## How to Contribute

### Adding a New Component

1.  **Determine the Level**:
    *   Is it a basic button or tag? -> **Atom**
    *   Is it a card or search bar? -> **Molecule**
    *   Is it a full section like a header or table? -> **Organism**

2.  **Create the File**:
    *   Place it in the corresponding directory: `src/components/[level]/ComponentName.jsx`.

3.  **Use it in a Page**:
    *   Import it: `import ComponentName from '../components/[level]/ComponentName'`.

### Adding a New Page

1.  Create the file in `src/pages/`.
2.  If it belongs to a section (e.g., Team), use the appropriate **Template** (e.g., `TeamLayout`).
3.  Add the route in `src/App.jsx`.

### Best Practices

*   **Reusability**: Before creating a new component, check `molecules` to see if one (like `ProfileCard`) already exists.
*   **Props**: Use `PropTypes` to define expected data.
*   **Styles**: We use **Tailwind CSS** (via class names) and standard CSS files.

---

## Development Workflow

1.  **Install Dependencies**:
    ```bash
    cd frontend
    npm install
    ```

2.  **Run Development Server**:
    ```bash
    npm run dev
    ```
    *Access the site at `http://localhost:5173`*

3.  **Build for Production**:
    ```bash
    npm run build
    ```
    *Creates optimized files in `dist/`*

---

## Troubleshooting

*   **Missing Component?**: Check `src/components/organisms` if it's a large section, or `molecules` if it's a reusable widget.
*   **Layout Issues?**: Check `src/components/templates` to see how the page structure is defined.
*   **Build Errors?**: Ensure all imports point to the new atomic directories (`components/atoms`, `molecules`, etc.) rather than the old `layouts` or flat `components` folder.
