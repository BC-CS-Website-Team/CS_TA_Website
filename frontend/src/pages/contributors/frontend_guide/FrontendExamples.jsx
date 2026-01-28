import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';

const markdownContent = `
# Frontend Development: The "How-To" Guide

This guide is your primary resource for the **practical** side of contributing. For the design philosophy and definitions of "Atomic Design", please see the [Overview](./).

---

## 1. The Tech Stack

Our frontend is built using three main technologies:

*   **React (with Vite):** The library we use to build the UI elements. Vite is the tool that runs the local server and builds the app.
*   **Tailwind CSS:** We use utility classes (e.g., \`text-center\`, \`p-4\`) directly in our HTML/JSX.
*   **React Router:** Handles navigation and URL routing.

---

## 2. Directory Structure Overview

The \`src\` folder is organized by Atomic Design principles:

\`\`\`text
src/
├── components/
│   ├── atoms/       # Smallest units (Buttons, Icons)
│   ├── molecules/   # Simple groups (SearchForm, ProfileCard)
│   ├── organisms/   # Complex sections (Navbar, Footer)
│   └── templates/   # Layouts (MainLayout)
├── pages/           # Full page components (corresponding to URLs)
├── context/         # Global state
├── data/            # Static data (CSVs)
└── services/        # API calls
\`\`\`

---

## 3. How to Add a New Page

Adding a new page involves three main steps.

### Step 1: Create the Component

Create a new file in \`src/pages/\`. Example: \`MyNewPage.jsx\`.

\`\`\`jsx
// src/pages/MyNewPage.jsx
import React from 'react';

const MyNewPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Hello World</h1>
      <p>This is my new page.</p>
    </div>
  );
};

export default MyNewPage;
\`\`\`

### Step 2: Add the Route

Open \`src/App.jsx\`. Import your component and add it to the routes list.

\`\`\`jsx
import MyNewPage from './pages/MyNewPage';

// Inside <Routes> ...
<Route path="/my-new-page" element={<MyNewPage />} />
\`\`\`

### Step 3: Test It

Navigate to [http://localhost:5173/my-new-page](http://localhost:5173/my-new-page) to see your work.

---

## 4. Fetching Data

We use a simple \`useEffect\` pattern to load data.

\`\`\`jsx
import { useState, useEffect } from 'react';
import { loadMakerspaceData } from '../../utils/makerspaceCsvLoader';

const MyDataPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await loadMakerspaceData();
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <div>
      {data.map(item => <div key={item.id}>{item.name}</div>)}
    </div>
  );
};
\`\`\`
`;

const FrontendExamples = () => {
    const components = {
        a: ({ node, ...props }) => {
            // Use React Router Link for internal links to preserve SPA navigation
            if (props.href && props.href.startsWith('./')) {
                return <Link to={props.href} {...props} />;
            }
            return <a {...props} />;
        }
    };

    return (
        <div className="prose prose-blue max-w-none">
            <ReactMarkdown components={components}>{markdownContent}</ReactMarkdown>
        </div>
    );
};

export default FrontendExamples;
