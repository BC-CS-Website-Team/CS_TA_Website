import { OpportunityForm } from '../../../components/organisms'
import Navigation from '../../../components/organisms/Navigation'
import Footer from '../../../components/organisms/Footer'
import CareerSidebar from '../../../components/organisms/CareerSidebar'

const CodeBlock = ({ code }) => (
    <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm font-mono mt-4">
        <code>{code}</code>
    </pre>
);

const Section = ({ title, children, className = "" }) => (
    <section className={`mb-12 ${className}`}>
        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">{title}</h2>
        {children}
    </section>
);

const FrontendOrganisms = () => {
    return (
        <div className="animate-fade-in space-y-12">
            <Section title="Navigation">
                <p className="mb-6 text-gray-600">
                    The `Navigation` organism is the global top bar. It manages routing links, responsive mobile menus, and authentication state (login/logout buttons).
                    It is composed of `NavItem` molecules and `Link`/`Button` atoms.
                </p>
                <div className="bg-gray-100 p-4 rounded text-center text-sm text-gray-500 italic">
                    (Rendered globally in MainLayout)
                </div>
                <CodeBlock code={`// Used in MainLayout.jsx
<Navigation />`} />
            </Section>

            <Section title="Sidebars">
                <p className="mb-6 text-gray-600">
                    Sidebars (e.g., `CareerSidebar`, `ClassesSidebar`) provide contextual navigation for specific sections of the site. They are typically composed of `DropdownSection` molecules and `Link` atoms.
                </p>
                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 flex">
                    {/* Constrain width to mock sidebar behavior */}
                    <div className="w-64 bg-white rounded-lg shadow-sm">
                        <CareerSidebar />
                    </div>
                    <div className="flex-1 p-8 text-center text-gray-400 italic">
                        Main Content Area...
                    </div>
                </div>
                <CodeBlock code={`<div className="flex">
  <CareerSidebar />
  <div className="flex-1">
    <Outlet /> 
  </div>
</div>`} />
            </Section>

            <Section title="Opportunity Form">
                <p className="mb-6 text-gray-600">
                    `OpportunityForm` is a complex organism that handles user input for creating/editing opportunities.
                    It aggregates `Input`, `Select`, `TextArea`, `FileUpload` atoms and handles validation and submission logic.
                </p>
                <div className="bg-white p-6 border rounded-lg shadow-sm max-w-2xl">
                    <OpportunityForm
                        onSubmit={(data) => alert(JSON.stringify(data, null, 2))}
                        onCancel={() => console.log('Cancelled')}
                    />
                </div>
                <CodeBlock code={`<OpportunityForm 
  initialData={existingData} 
  onSubmit={handleSubmit} 
  onCancel={handleCancel} 
/>`} />
            </Section>

            <Section title="Footer">
                <p className="mb-6 text-gray-600">
                    The `Footer` provides site-wide links and copyright info. It sticks to the bottom of the viewport in the `MainLayout`.
                </p>
                <div className="bg-gray-100 p-4 rounded text-center text-sm text-gray-500 italic">
                    (Rendered globally in MainLayout)
                </div>
                <CodeBlock code={`// Used in MainLayout.jsx
<Footer />`} />
            </Section>
        </div>
    );
};

export default FrontendOrganisms;
