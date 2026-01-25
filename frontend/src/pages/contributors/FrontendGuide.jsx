import { useState } from 'react';
import Button from '../../components/atoms/Button';
import Badge from '../../components/atoms/Badge';
import Card from '../../components/atoms/Card';
import Input from '../../components/atoms/Input';
import Select from '../../components/atoms/Select';
import ProfileCard from '../../components/molecules/ProfileCard';
import CareerSidebar from '../../components/organisms/CareerSidebar';

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

const FrontendGuide = () => {
    const [activeTab, setActiveTab] = useState('atoms');
    const [demoInput, setDemoInput] = useState('');
    const [demoSelect, setDemoSelect] = useState('option1');

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Frontend Architecture</h1>
            <p className="text-lg text-gray-600 mb-8">
                We use <strong>Atomic Design</strong> principles to organize our React components. This means we build up complex interfaces from very small, simple building blocks.
            </p>

            {/* Atomic Design Visualization */}
            <div className="flex space-x-2 sm:space-x-4 mb-8 overflow-x-auto pb-4">
                {['atoms', 'molecules', 'organisms', 'templates', 'how-to'].map((level) => (
                    <button
                        key={level}
                        onClick={() => setActiveTab(level)}
                        className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full font-medium capitalize transition-colors whitespace-nowrap ${activeTab === level
                            ? 'bg-primary-600 text-white shadow-md'
                            : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                            }`}
                    >
                        {level === 'how-to' ? 'How-To & Examples' : level}
                    </button>
                ))}
            </div>

            {activeTab === 'atoms' && (
                <div className="animate-fade-in space-y-12">
                    <Section title="Buttons">
                        <div className="flex gap-4 flex-wrap mb-4">
                            <Button variant="primary">Primary</Button>
                            <Button variant="secondary">Secondary</Button>
                            <Button variant="danger">Danger</Button>
                        </div>
                        <CodeBlock code={`<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="danger">Danger</Button>`} />
                    </Section>

                    <Section title="Badges">
                        <div className="flex gap-2 mb-4">
                            <Badge colorScheme="green">Success</Badge>
                            <Badge colorScheme="blue">Info</Badge>
                            <Badge colorScheme="purple">New</Badge>
                            <Badge colorScheme="red">Error</Badge>
                        </div>
                        <CodeBlock code={`<Badge colorScheme="green">Success</Badge>
<Badge colorScheme="purple">New</Badge>`} />
                    </Section>

                    <Section title="Form Inputs">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <Input
                                    label="Demo Input"
                                    id="demo-input"
                                    placeholder="Type something..."
                                    value={demoInput}
                                    onChange={(e) => setDemoInput(e.target.value)}
                                />
                                <CodeBlock code={`<Input
  label="Demo Input"
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>`} />
                            </div>
                            <div>
                                <Select
                                    label="Demo Select"
                                    id="demo-select"
                                    value={demoSelect}
                                    onChange={(e) => setDemoSelect(e.target.value)}
                                    options={[
                                        { value: 'option1', label: 'Option 1' },
                                        { value: 'option2', label: 'Option 2' },
                                    ]}
                                />
                                <CodeBlock code={`<Select
  label="Demo Select"
  options={[
    { value: '1', label: 'One' },
    { value: '2', label: 'Two' },
  ]}
/>`} />
                            </div>
                        </div>
                    </Section>
                </div>
            )}

            {activeTab === 'molecules' && (
                <div className="animate-fade-in">
                    <Section title="Profile Card">
                        <p className="mb-6 text-gray-600">
                            A `ProfileCard` combines `Image`, `Text`, and `Card` atoms to display user information.
                        </p>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="max-w-xs">
                                <ProfileCard
                                    name="Jane Doe"
                                    role="Head TA"
                                    image="https://via.placeholder.com/150"
                                    variant="default"
                                />
                            </div>
                            <div className="max-w-xs">
                                <ProfileCard
                                    name="John Smith"
                                    role="Developer"
                                    image="https://via.placeholder.com/150"
                                    variant="round"
                                />
                            </div>
                        </div>
                        <CodeBlock code={`<ProfileCard
  name="Jane Doe"
  role="Head TA"
  image="/path/to/image.jpg"
  variant="default" // or 'round'
/>`} />
                    </Section>
                </div>
            )}

            {activeTab === 'organisms' && (
                <div className="animate-fade-in">
                    <Section title="Sidebar Organism">
                        <p className="mb-6 text-gray-600">
                            Organisms are complex UI sections. This `CareerSidebar` is used on the Career Development pages.
                        </p>
                        <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 flex">
                            {/* Constrain width to mock sidebar behavior */}
                            <div className="w-64 bg-white rounded-lg shadow-sm">
                                <CareerSidebar />
                            </div>
                            <div className="flex-1 p-8 text-center text-gray-400 italic">
                                Page Content would go here...
                            </div>
                        </div>
                        <CodeBlock code={`// frontend/src/components/organisms/CareerSidebar.jsx
// Usage in a Template:
<div className="flex">
  <CareerSidebar />
  <main>{children}</main>
</div>`} />
                    </Section>
                </div>
            )}

            {activeTab === 'templates' && (
                <div className="animate-fade-in">
                    <Section title="Templates & Layouts">
                        <p className="mb-6 text-gray-600">
                            Templates define the overall grid structure of a page.
                        </p>
                        <div className="grid gap-4">
                            <div className="border-l-4 border-blue-500 pl-4 bg-blue-50 p-4 rounded-r">
                                <h3 className="font-bold">MainLayout</h3>
                                <p className="text-sm">Navigation (Top) + Outlet + Footer (Bottom)</p>
                            </div>
                            <div className="border-l-4 border-green-500 pl-4 bg-green-50 p-4 rounded-r">
                                <h3 className="font-bold">TeamLayout / DocsLayout</h3>
                                <p className="text-sm">Sidebar (Left) + Content (Right) (Nested inside MainLayout)</p>
                            </div>
                        </div>
                    </Section>
                </div>
            )}

            {activeTab === 'how-to' && (
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
            )}
        </div>
    );
};

export default FrontendGuide;
