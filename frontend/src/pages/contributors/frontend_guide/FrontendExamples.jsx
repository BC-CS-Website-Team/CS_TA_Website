import { useState, useEffect } from 'react';
import { ProfileCard } from '../../../components/molecules'
import { loadMakerspaceData } from '../../../utils/makerspaceCsvLoader'

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

const FrontendExamples = () => {
    return (
        <div className="animate-fade-in space-y-12">
            <Section title="How to Add a New Page">
                <ol className="list-decimal pl-5 space-y-4 text-gray-700">
                    <li>
                        <strong>Create the Page Component:</strong>
                        <p className="text-sm text-gray-500 mt-1">Create `frontend/src/pages/MyNewPage.jsx`. Import components you need.</p>
                    </li>
                    <li>
                        <strong>Add a Route:</strong>
                        <p className="text-sm text-gray-500 mt-1">Open `frontend/src/App.jsx`. Add a new `&lt;Route&gt;` inside the appropriate layout.</p>
                    </li>
                    <li>
                        <strong>Verify:</strong>
                        <p className="text-sm text-gray-500 mt-1">Navigate to `http://localhost:5173/my-new-page`.</p>
                    </li>
                </ol>
            </Section>

            <Section title="Real World Example: MeetMakerspace">
                <p className="mb-4 text-gray-600">
                    Here is how the `MeetMakerspace` page fetches data and renders `ProfileCard` components.
                </p>
                <div className="bg-gray-100 p-4 rounded-lg">
                    <h4 className="font-bold text-sm text-gray-700 mb-2">frontend/src/pages/team/MeetMakerspace.jsx</h4>
                    <CodeBlock code={`const MeetMakerspace = () => {
const [makerspaceTeam, setMakerspaceTeam] = useState([])

useEffect(() => {
// 1. Load Data
const loadData = async () => {
const data = await loadMakerspaceData();
setMakerspaceTeam(data);
};
loadData();
}, []);

return (
<div className="grid ...">
{/* 2. Map Data to Components */}
{makerspaceTeam.map(member => (
<ProfileCard
  key={member.id}
  {...member} // Passes name, image, role, etc.
  onClick={() => setSelectedMember(member)}
/>
))}
</div>
)
}`} />
                </div>
            </Section>

            <Section title="Component Categorization Rules">
                <div className="grid gap-6 md:grid-cols-3">
                    <div className="bg-blue-50 p-4 rounded-lg">
                        <h3 className="font-bold text-blue-900 mb-2">Atoms</h3>
                        <p className="text-sm text-blue-800">
                            <strong>Rules:</strong> Cannot import other components. Pure logic or basic HTML elements.
                        </p>
                        <p className="text-xs text-blue-700 mt-2">Examples: Button, Input, Badge</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                        <h3 className="font-bold text-purple-900 mb-2">Molecules</h3>
                        <p className="text-sm text-purple-800">
                            <strong>Rules:</strong> Composed of Atoms. Do one thing well (e.g. a search form, a card).
                        </p>
                        <p className="text-xs text-purple-700 mt-2">Examples: ProfileCard, OpportunityForm</p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                        <h3 className="font-bold text-orange-900 mb-2">Organisms</h3>
                        <p className="text-sm text-orange-800">
                            <strong>Rules:</strong> Composed of Molecules/Atoms. Complex sections giving context.
                        </p>
                        <p className="text-xs text-orange-700 mt-2">Examples: Navigation, Sidebar, Footer</p>
                    </div>
                </div>
            </Section>

            <Section title="Handling Chakra UI & 3rd Party Libs">
                <div className="prose text-gray-600">
                    <p>
                        We use a mix of <strong>Tailwind CSS</strong> (for custom components) and <strong>Chakra UI</strong> (legacy/specific icons).
                    </p>
                    <p className="font-bold mt-2">Best Practice:</p>
                    <ul className="list-disc pl-5">
                        <li>
                            If you want to use a Chakra Component (like a Button), <strong>Wrap it in an Atom</strong>.
                        </li>
                        <li>
                            Do not use Chakra components directly in your molecules or organisms if possible. Import your custom Atom instead.
                        </li>
                        <li>
                            <strong>Example:</strong> If you need `ExternalLinkIcon`, import it in the implementation file where needed, or create an `Icon` atom.
                        </li>
                    </ul>
                </div>
            </Section>
        </div>
    );
};

export default FrontendExamples;
