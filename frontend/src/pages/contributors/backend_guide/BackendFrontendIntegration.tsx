import React from 'react';
import { Heading, Text, CodeBlock } from '../../../components/atoms';

const SERVICE_CODE = `
// frontend/src/services/opportunities.ts

const API_BASE_URL = 'http://localhost:8000'; // Points to our FastAPI backend

// ── PUBLIC request — no authentication required ─────────────────────────────
export const fetchOpportunities = async () => {
    const response = await fetch(\`\${API_BASE_URL}/opportunities\`);
    if (!response.ok) {
        throw new Error('Failed to fetch opportunities');
    }
    return response.json(); // Returns an array matching OpportunityResponse[]
};

// ── AUTHENTICATED request — JWT token required ──────────────────────────────
export const createOpportunity = async (data: OpportunityCreate) => {
    const token = localStorage.getItem('token'); // Retrieve the stored JWT

    const response = await fetch(\`\${API_BASE_URL}/opportunities\`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': \`Bearer \${token}\`,  // Backend validates this header
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error('Failed to create opportunity');
    }
    return response.json();
};

// ── DELETE with ownership enforcement ───────────────────────────────────────
export const deleteOpportunity = async (id: number): Promise<void> => {
    const token = localStorage.getItem('token');
    const response = await fetch(\`\${API_BASE_URL}/opportunities/\${id}\`, {
        method: 'DELETE',
        headers: { 'Authorization': \`Bearer \${token}\` },
    });
    if (!response.ok) {
        throw new Error('Failed to delete opportunity');
    }
};
`.trim();

const PYDANTIC_SCHEMA = `
# backend/src/opportunities/schemas.py
class OpportunityResponse(BaseModel):
    id: int
    name: Optional[str] = None
    opportunity_type: Optional[str] = None
    in_house: Optional[bool] = False
    date_added: Optional[datetime] = None
    link: Optional[str] = None
    opportunity_uploader_id: Optional[int] = None
`.trim();

const TS_INTERFACE = `
// frontend/src/types/index.ts — mirrors the Pydantic schema exactly
export interface Opportunity {
    id: number;
    name: string | null;
    opportunity_type: string | null;
    in_house: boolean;
    date_added: string | null;   // JSON dates arrive as ISO strings
    link: string | null;
    opportunity_uploader_id: number | null;
}
`.trim();

const USAGE_CODE = `
// frontend/src/pages/career/Opportunities.tsx

import React, { useEffect, useState } from 'react';
import { fetchOpportunities } from '../../services/opportunities';
import type { Opportunity } from '../../types';

const OpportunitiesPage: React.FC = () => {
    const [opportunities, setOpportunities] = useState<Opportunity[]>([]);

    useEffect(() => {
        fetchOpportunities().then(setOpportunities);
    }, []);

    return (
        <ul>
            {opportunities.map(opp => (
                <li key={opp.id}>{opp.name}</li>
            ))}
        </ul>
    );
};
`.trim();

const BackendFrontendIntegration: React.FC = () => {
    return (
        <div className="space-y-12 animate-fade-in">
            {/* Header */}
            <div>
                <Heading level={2} className="text-gray-900 mb-4">Frontend Integration</Heading>
                <Text className="text-lg max-w-3xl">
                    Once an API endpoint exists, the React frontend calls it via a dedicated <strong>service function</strong>.
                    This page shows how those calls are structured, how authentication tokens are attached, and how the TypeScript types
                    on the frontend mirror the Pydantic schemas on the backend — creating an end-to-end type-safe contract.
                </Text>
            </div>

            {/* Section 1: Service Layer */}
            <section className="space-y-6">
                <Heading level={2}>1. The Frontend Service Layer</Heading>
                <div className="space-y-6">
                    <Text className="text-gray-600">
                        All API calls are abstracted into service functions in{' '}
                        <code className="bg-gray-100 px-2 py-1 rounded text-sm">frontend/src/services/</code>.
                        This keeps React components clean and centralizes auth logic in one place.
                    </Text>
                    <CodeBlock code={SERVICE_CODE} language="typescript" filename="frontend/src/services/opportunities.ts" />
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gray-50 border border-gray-200 p-5 rounded-lg">
                            <Heading level={4} className="mb-2">Public vs Protected Calls</Heading>
                            <Text className="text-sm text-gray-600">
                                Public endpoints (like <code>GET /opportunities</code>) need no headers — anyone can call them.
                                Protected endpoints require a valid JWT in the <code>Authorization</code> header, which the backend
                                verifies before processing the request.
                            </Text>
                        </div>
                        <div className="bg-gray-50 border border-gray-200 p-5 rounded-lg">
                            <Heading level={4} className="mb-2">Token Storage</Heading>
                            <Text className="text-sm text-gray-600">
                                The JWT is retrieved from <code>localStorage.getItem('token')</code>.
                                This token is stored there at login time by the Auth context. The backend will return a <code>401 Unauthorized</code> if it is missing or expired.
                            </Text>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Schema Mapping */}
            <section className="space-y-6">
                <Heading level={2}>2. Schema Mapping: Python to TypeScript</Heading>
                <Text className="text-gray-600">
                    The Pydantic response schema on the backend and the TypeScript interface on the frontend represent the
                    exact same data. Keeping them in sync means the IDE will catch mistakes on both ends before they reach production.
                </Text>

                <div className="grid md:grid-cols-2 gap-6 items-start">
                    <div className="space-y-2">
                        <p className="text-sm font-semibold text-gray-700">Backend — Pydantic Output Schema</p>
                        <CodeBlock code={PYDANTIC_SCHEMA} language="python" filename="schemas.py" />
                    </div>
                    <div className="space-y-2">
                        <p className="text-sm font-semibold text-gray-700">Frontend — TypeScript Interface</p>
                        <CodeBlock code={TS_INTERFACE} language="typescript" filename="types/index.ts" />
                    </div>
                </div>

                <div className="bg-green-50 p-5 rounded-lg border border-green-200">
                    <Text className="text-sm text-green-800">
                        <strong>Why this matters:</strong> Any developer calling <code>fetchOpportunities()</code> inside a React component gets
                        instant IDE autocomplete with the exact shape the backend returns. If a backend field is renamed or removed, TypeScript
                        will flag all affected frontend code immediately — before it ever runs.
                    </Text>
                </div>
            </section>

            {/* Section 3: Using the Service in a Component */}
            <section className="space-y-6">
                <Heading level={2}>3. Using a Service in a React Component</Heading>
                <Text className="text-gray-600">
                    Here is how a real page component calls the service function and renders the data:
                </Text>
                <CodeBlock code={USAGE_CODE} language="typescript" filename="frontend/src/pages/career/Opportunities.tsx" />
            </section>
        </div>
    );
};

export default BackendFrontendIntegration;
