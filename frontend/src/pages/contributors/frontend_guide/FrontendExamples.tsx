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

## 4. Fetching Data with TypeScript

We use a simple \`useEffect\` pattern to load data. The key difference with TypeScript is that we explicitly define the shape of our data using an \`interface\`.

\`\`\`tsx
import React, { useState, useEffect } from 'react';
import { loadMakerspaceData } from '../../utils/makerspaceCsvLoader';

interface MakerspaceItem {
  id: string;
  name: string;
}

const MyDataPage: React.FC = () => {
  const [data, setData] = useState<MakerspaceItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await loadMakerspaceData();
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <div className="p-8">
      {data.map(item => <div key={item.id}>{item.name}</div>)}
    </div>
  );
};

export default MyDataPage;
\`\`\`

---

## 5. Integrating Frontend and Backend with Types

When the frontend communicates with the backend API, TypeScript behaves as a strict contract. To ensure everything works perfectly and to avoid runtime errors, the **data shapes (Interfaces) on the frontend** must exactly match the **Pydantic Models (Schemas) on the backend**.

Here is a real-world example of how this integration works for an "Opportunity":

### The Backend (Python / FastAPI / Pydantic)

On the backend, we define a schema that dictates exactly what data the endpoint will return.

\`\`\`python
# backend/src/schemas.py
from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class UserBase(BaseModel):
    first_name: str
    last_name: str

class OpportunityResponse(BaseModel):
    id: int
    name: str
    opportunity_type: str
    opportunity_uploader: UserBase
    date_added: datetime
    deadline: Optional[datetime] = None
    opportunity_description: str
    link: Optional[str] = None
\`\`\`

When the frontend calls \`/api/opportunities\`, the backend guarantees it will return JSON matching this exact structure.

### The Frontend (TypeScript / React)

On the frontend, we define an \`interface\` that mirrors the backend schema perfectly. This ensures that when we use the data in our React components, TypeScript knows exactly what fields are available, preventing typos and undefined properties.

\`\`\`tsx
// frontend/src/types/index.ts
export interface User {
  first_name: string;
  last_name: string;
}

export interface Opportunity {
  id: string | number;
  name: string;
  opportunity_type: string;
  opportunity_uploader: User;
  date_added: string;       // datetime from backend becomes an ISO string
  deadline?: string;        // Optional fields use ?
  opportunity_description: string;
  link?: string;
}
\`\`\`

### The Component (Connecting the two together)

Now, when we fetch the data, we tell TypeScript that the response will be an array of \`Opportunity\` objects. This is where TypeScript shines:

\`\`\`tsx
// frontend/src/pages/career/Opportunities.tsx
import React, { useState, useEffect } from 'react';
import { Opportunity } from '../../types';
import { fetchOpportunities } from '../../services/opportunities';

const Opportunities: React.FC = () => {
    // We explicitly type our state variable!
    const [opportunities, setOpportunities] = useState<Opportunity[]>([]);

    useEffect(() => {
        const load = async () => {
            // fetchOpportunities makes the API call to our backend
            const data: Opportunity[] = await fetchOpportunities();
            setOpportunities(data);
        };
        load();
    }, []);

    return (
        <div className="p-8">
            {opportunities.map(opp => (
                <div key={opp.id} className="mb-4">
                    {/* TypeScript knows 'opp' is an Opportunity, so autocomplete works perfectly! */}
                    <h3 className="text-xl font-bold">{opp.name} ({opp.opportunity_type})</h3>
                    <p>Uploaded by: {opp.opportunity_uploader.first_name}</p>
                    
                    {/* If we tried to type opp.typo_name, the compiler would throw an error! */}
                </div>
            ))}
        </div>
    );
};

export default Opportunities;
\`\`\`

**Why is this important?**
If a backend developer renames \`opportunity_type\` to \`type\` in the database and Pydantic schema, the frontend API call will suddenly receive data without \`opportunity_type\`. If we didn't use TypeScript, the React app might crash silently or display blank text in production. 

With TypeScript, we update our interface to match the backend change, and our code editor immediately flags every component where we used the old \`opp.opportunity_type\`, telling us exactly where to fix the code before we ever build the app!
`;

const FrontendExamples: React.FC = () => {
  const components = {
    a: ({ node, ...props }: any) => {
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
