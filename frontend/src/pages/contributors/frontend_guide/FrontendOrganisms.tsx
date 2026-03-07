import React from 'react';
import { OpportunityForm } from '../../../components/organisms';
import CareerSidebar from '../../../components/organisms/CareerSidebar';
import { CodeBlock } from '../../../components/atoms';

interface SectionProps {
    title: string;
    children: React.ReactNode;
    className?: string;
}

const Section: React.FC<SectionProps> = ({ title, children, className = '' }) => (
    <section className={`mb-12 ${className}`}>
        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">{title}</h2>
        {children}
    </section>
);

const FrontendOrganisms: React.FC = () => {
    return (
        <div className="animate-fade-in space-y-12">
            <Section title="Navigation">
                <p className="mb-6 text-gray-600">
                    The <code>Navigation</code> organism is the global top bar. It manages routing links, responsive mobile menus,
                    and authentication state (login/logout). It is composed of <code>NavItem</code> molecules and <code>Link</code>/<code>Button</code> atoms.
                </p>
                <div className="bg-gray-100 p-4 rounded text-center text-sm text-gray-500 italic">
                    (Rendered globally in MainLayout)
                </div>
                <div className="mt-4">
                    <CodeBlock language="tsx" code={`// Used in MainLayout.tsx
<Navigation />`} />
                </div>
            </Section>

            <Section title="Sidebars">
                <p className="mb-6 text-gray-600">
                    Sidebars (e.g., <code>CareerSidebar</code>, <code>ClassesSidebar</code>) provide contextual navigation for specific sections.
                    They are composed of <code>DropdownSection</code> molecules and <code>Link</code> atoms.
                </p>
                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 flex">
                    <div className="w-64 bg-white rounded-lg shadow-sm">
                        <CareerSidebar />
                    </div>
                    <div className="flex-1 p-8 text-center text-gray-400 italic">
                        Main Content Area...
                    </div>
                </div>
                <div className="mt-4">
                    <CodeBlock language="tsx" code={`<div className="flex">
  <CareerSidebar />
  <div className="flex-1">
    <Outlet />
  </div>
</div>`} />
                </div>
            </Section>

            <Section title="Opportunity Form">
                <p className="mb-6 text-gray-600">
                    <code>OpportunityForm</code> is a complex organism that handles creating/editing opportunities.
                    It aggregates <code>Input</code>, <code>Select</code>, <code>TextArea</code>, and <code>FileUpload</code> atoms with validation and submission logic.
                </p>
                <div className="bg-white p-6 border rounded-lg shadow-sm max-w-2xl">
                    <OpportunityForm
                        onSubmit={(data) => alert(JSON.stringify(data, null, 2))}
                        onCancel={() => console.log('Cancelled')}
                    />
                </div>
                <div className="mt-4">
                    <CodeBlock language="tsx" code={`<OpportunityForm
  initialData={existingData}
  onSubmit={handleSubmit}
  onCancel={handleCancel}
/>`} />
                </div>
            </Section>

            <Section title="Footer">
                <p className="mb-6 text-gray-600">
                    The <code>Footer</code> provides site-wide links and copyright info. It sticks to the bottom of the viewport via <code>MainLayout</code>.
                </p>
                <div className="bg-gray-100 p-4 rounded text-center text-sm text-gray-500 italic">
                    (Rendered globally in MainLayout)
                </div>
                <div className="mt-4">
                    <CodeBlock language="tsx" code={`// Used in MainLayout.tsx
<Footer />`} />
                </div>
            </Section>
        </div>
    );
};

export default FrontendOrganisms;
