import React from 'react';
import { Heading, Text, CodeBlock } from '../../../components/atoms';

// ─── Code constants ───────────────────────────────────────────────────────────

const DIRECTORY_STRUCTURE = `
src/
├── components/
│   ├── atoms/       # Smallest units (Buttons, Icons, CodeBlock)
│   ├── molecules/   # Simple groups (SearchForm, ProfileCard)
│   ├── organisms/   # Complex sections (Navbar, Footer)
│   └── templates/   # Layouts (MainLayout)
├── pages/           # Full page components mapped to URLs
├── context/         # Global state (AuthContext)
├── data/            # Static data (CSVs)
└── services/        # API calls to the backend
`.trim();

const NEW_PAGE_COMPONENT = `
// src/pages/MyNewPage.tsx
import React from 'react';

const MyNewPage: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Hello World</h1>
      <p>This is my new page.</p>
    </div>
  );
};

export default MyNewPage;
`.trim();

const NEW_PAGE_ROUTE = `
// src/App.tsx
import MyNewPage from './pages/MyNewPage';

// Inside <Routes> ...
<Route path="/my-new-page" element={<MyNewPage />} />
`.trim();

const FETCH_DATA_CODE = `
// src/pages/MyDataPage.tsx
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
`.trim();

const BACKEND_SCHEMA = `
# backend/src/opportunities/schemas.py
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
`.trim();

const FRONTEND_TYPES = `
// frontend/src/types/index.ts — mirrors the backend schema exactly
export interface User {
  first_name: string;
  last_name: string;
}

export interface Opportunity {
  id: number;
  name: string;
  opportunity_type: string;
  opportunity_uploader: User;
  date_added: string;       // datetime from backend arrives as ISO string
  deadline?: string;        // Optional fields use ?
  opportunity_description: string;
  link?: string;
}
`.trim();

const COMPONENT_USAGE = `
// frontend/src/pages/career/Opportunities.tsx
import React, { useState, useEffect } from 'react';
import type { Opportunity } from '../../types';
import { fetchOpportunities } from '../../services/opportunities';

const Opportunities: React.FC = () => {
    const [opportunities, setOpportunities] = useState<Opportunity[]>([]);

    useEffect(() => {
        const load = async () => {
            const data: Opportunity[] = await fetchOpportunities();
            setOpportunities(data);
        };
        load();
    }, []);

    return (
        <div className="p-8">
            {opportunities.map(opp => (
                <div key={opp.id} className="mb-4">
                    {/* TypeScript knows 'opp' is Opportunity — autocomplete just works! */}
                    <h3>{opp.name} ({opp.opportunity_type})</h3>
                    <p>Uploaded by: {opp.opportunity_uploader.first_name}</p>

                    {/* opp.typo_name would be flagged by the compiler immediately */}
                </div>
            ))}
        </div>
    );
};

export default Opportunities;
`.trim();

// ─── Component ────────────────────────────────────────────────────────────────

const FrontendExamples: React.FC = () => {
  return (
    <div className="space-y-16 animate-fade-in">

      <header className="border-b border-gray-200 pb-10">
        <Heading level={2} className="text-gray-900 mb-4">How-To & Examples</Heading>
        <Text className="text-lg text-gray-600 max-w-3xl">
          Your practical resource for contributing. This guide covers the tech stack, directory structure,
          how to add pages, fetch data with TypeScript, and how the frontend and backend types are kept in sync.
        </Text>
      </header>

      {/* Section 1: Tech Stack */}
      <section className="space-y-4">
        <Heading level={2}>1. The Tech Stack</Heading>
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          <li><strong>React (with Vite):</strong> The UI library and local dev server/bundler.</li>
          <li><strong>TypeScript:</strong> Strict typing throughout — every component and prop is typed.</li>
          <li><strong>Tailwind CSS:</strong> Utility-first CSS classes applied directly in JSX.</li>
          <li><strong>React Router:</strong> Handles all URL navigation inside the SPA.</li>
        </ul>
      </section>

      {/* Section 2: Directory Structure */}
      <section className="space-y-4">
        <Heading level={2}>2. Directory Structure</Heading>
        <Text className="text-gray-600">The <code>src/</code> folder is organized by Atomic Design principles:</Text>
        <CodeBlock code={DIRECTORY_STRUCTURE} language="bash" filename="src/ — Directory Structure" />
      </section>

      {/* Section 3: Adding a Page */}
      <section className="space-y-6">
        <Heading level={2}>3. How to Add a New Page</Heading>

        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gray-800 text-white text-sm font-bold flex items-center justify-center">1</div>
            <Heading level={3} className="text-lg">Create the Component</Heading>
          </div>
          <Text className="text-gray-600 pl-10">Create a new <code>.tsx</code> file inside <code>src/pages/</code>.</Text>
          <div className="pl-10">
            <CodeBlock code={NEW_PAGE_COMPONENT} language="typescript" filename="src/pages/MyNewPage.tsx" />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gray-800 text-white text-sm font-bold flex items-center justify-center">2</div>
            <Heading level={3} className="text-lg">Register the Route</Heading>
          </div>
          <Text className="text-gray-600 pl-10">Open <code>src/App.tsx</code>, import your component, and add it to the <code>{`<Routes>`}</code> block.</Text>
          <div className="pl-10">
            <CodeBlock code={NEW_PAGE_ROUTE} language="typescript" filename="src/App.tsx" />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gray-800 text-white text-sm font-bold flex items-center justify-center">3</div>
            <Heading level={3} className="text-lg">Test It</Heading>
          </div>
          <Text className="text-gray-600 pl-10">
            Navigate to <code>http://localhost:5173/my-new-page</code> to see your work.
          </Text>
        </div>
      </section>

      {/* Section 4: Fetching Data */}
      <section className="space-y-4">
        <Heading level={2}>4. Fetching Data with TypeScript</Heading>
        <Text className="text-gray-600">
          We use a <code>useEffect</code> pattern to load data. With TypeScript, we define the data shape using an
          <code> interface</code> first so the compiler can validate every access.
        </Text>
        <CodeBlock code={FETCH_DATA_CODE} language="typescript" filename="src/pages/MyDataPage.tsx" />
      </section>

      {/* Section 5: Frontend + Backend Integration */}
      <section className="space-y-8">
        <Heading level={2}>5. Frontend & Backend Type Integration</Heading>
        <Text className="text-gray-600 max-w-3xl">
          When the frontend calls the backend API, TypeScript acts as a strict contract.
          The <strong>TypeScript interfaces on the frontend</strong> must exactly mirror the <strong>Pydantic schemas on the backend</strong>.
        </Text>

        <div>
          <Heading level={3} className="text-lg mb-2">The Backend (Pydantic Schema)</Heading>
          <Text className="text-sm text-gray-500 mb-3">This defines exactly what JSON shape the endpoint returns:</Text>
          <CodeBlock code={BACKEND_SCHEMA} language="python" filename="backend/src/opportunities/schemas.py" />
        </div>

        <div>
          <Heading level={3} className="text-lg mb-2">The Frontend (TypeScript Interface)</Heading>
          <Text className="text-sm text-gray-500 mb-3">This mirrors the backend schema on the React side — field names and types must match:</Text>
          <CodeBlock code={FRONTEND_TYPES} language="typescript" filename="frontend/src/types/index.ts" />
        </div>

        <div>
          <Heading level={3} className="text-lg mb-2">Using it in a Component</Heading>
          <Text className="text-sm text-gray-500 mb-3">
            Typing the <code>useState</code> and fetch return value gives you full IDE autocomplete and compile-time safety:
          </Text>
          <CodeBlock code={COMPONENT_USAGE} language="typescript" filename="frontend/src/pages/career/Opportunities.tsx" />
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-5 rounded-r-lg">
          <Text className="text-sm text-blue-800">
            <strong>Why this matters:</strong> If a backend developer renames <code>opportunity_type</code> to <code>type</code>,
            TypeScript immediately flags every component that references the old field name — before you build, before you deploy.
            No silent runtime crashes.
          </Text>
        </div>
      </section>

    </div>
  );
};

export default FrontendExamples;
