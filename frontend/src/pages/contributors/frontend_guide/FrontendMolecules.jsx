import { ProfileCard, DropdownSection, NavItem, OpportunityCard } from '../../../components/molecules'
import { FaHome, FaUser } from 'react-icons/fa'
import { Text } from '../../../components/atoms'

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

const FrontendMolecules = () => {
    return (
        <div className="animate-fade-in space-y-12">
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

            <Section title="Dropdown Section">
                <p className="mb-6 text-gray-600">
                    `DropdownSection` is an expandable section used primarily in sidebars or lists to toggle visibility of content.
                </p>
                <div className="max-w-md">
                    <DropdownSection title="Click me to toggle">
                        <Text>This content is hidden by default and revealed when clicked.</Text>
                        <Text className="mt-2 text-sm text-gray-500">You can put any content here.</Text>
                    </DropdownSection>
                </div>
                <CodeBlock code={`<DropdownSection title="Section Title">
  <p>Hidden content goes here...</p>
</DropdownSection>`} />
            </Section>

            <Section title="Navigation Item">
                <p className="mb-6 text-gray-600">
                    `NavItem` is used in the `Navigation` organism. It handles links, icons, and dropdown menus.
                </p>
                <div className="flex gap-4 bg-white p-4 rounded shadow-sm">
                    <NavItem
                        item={{ to: '#', label: 'Home', icon: FaHome }}
                    />
                    <NavItem
                        item={{
                            to: '#',
                            label: 'Menu with Dropdown',
                            icon: FaUser,
                            dropdown: [
                                { to: '#1', label: 'Sub Item 1' },
                                { to: '#2', label: 'Sub Item 2' }
                            ]
                        }}
                    />
                </div>
                <CodeBlock code={`const item = {
  to: '/path',
  label: 'Link Label',
  icon: FaIcon, // optional
  dropdown: [ // optional
    { to: '/sub-path', label: 'Sub Item' }
  ]
};

<NavItem item={item} />`} />
            </Section>

            <Section title="Opportunity Card">
                <p className="mb-6 text-gray-600">
                    `OpportunityCard` displays details about a job, internship, or event. It includes action buttons for editing and deleting.
                </p>
                <div className="max-w-md">
                    <OpportunityCard
                        opportunity={{
                            id: 1,
                            name: "Software Engineer Intern",
                            opportunity_type: "Internship",
                            opportunity_uploader: { first_name: "Tech", last_name: "Corp" },
                            date_added: new Date().toISOString(),
                            deadline: new Date(Date.now() + 86400000 * 30).toISOString(),
                            opportunity_description: "An exciting opportunity to work on cutting-edge tech.",
                            link: "https://example.com"
                        }}
                        onEdit={() => console.log('Edit clicked')}
                        onDelete={() => console.log('Delete clicked')}
                    />
                </div>
                <CodeBlock code={`<OpportunityCard
  opportunity={{
    name: "Job Title",
    opportunity_type: "Job",
    opportunity_uploader: { first_name: "John", last_name: "Doe" },
    date_added: "2023-01-01",
    // ...other fields
  }}
  onEdit={handleEdit}
  onDelete={handleDelete}
/>`} />
            </Section>
        </div>
    );
};

export default FrontendMolecules;
