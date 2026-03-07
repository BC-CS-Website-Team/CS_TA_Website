import React, { useState } from 'react';
import {
    Button,
    Input,
    Select,
    TextArea,
    FileUpload,
    Badge,
    Card,
    Heading,
    Text,
    Image,
    Link
} from '../../../components/atoms'

interface CodeBlockProps {
    code: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => (
    <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm font-mono mt-4">
        <code>{code}</code>
    </pre>
);

interface SectionProps {
    title: string;
    children: React.ReactNode;
    className?: string;
}

const Section: React.FC<SectionProps> = ({ title, children, className = "" }) => (
    <section className={`mb-12 ${className}`}>
        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">{title}</h2>
        {children}
    </section>
);

const FrontendAtoms: React.FC = () => {
    const [demoInput, setDemoInput] = useState('');
    const [demoSelect, setDemoSelect] = useState('option1');

    return (
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
                <div className="flex gap-2 mb-4 flex-wrap">
                    <Badge colorScheme="green">Success</Badge>
                    <Badge colorScheme="blue">Info</Badge>
                    <Badge colorScheme="purple">New</Badge>
                    <Badge colorScheme="red">Error</Badge>
                    <Badge colorScheme="yellow">Warning</Badge>
                    <Badge colorScheme="indigo">Indigo</Badge>
                    <Badge colorScheme="gray">Gray</Badge>
                </div>
                <CodeBlock code={`<Badge colorScheme="green">Success</Badge>
<Badge colorScheme="purple">New</Badge>`} />
            </Section>

            <Section title="Typography">
                <div className="space-y-4 mb-4">
                    <div>
                        <Heading level={1}>Heading 1</Heading>
                        <Heading level={2}>Heading 2</Heading>
                        <Heading level={3}>Heading 3</Heading>
                    </div>
                    <div>
                        <Text>This is standard body text using the Text atom.</Text>
                        <Text className="text-gray-500 italic">This is text with additional classes.</Text>
                    </div>
                    <div>
                        <Link to="#">Internal Link</Link>
                        <span className="mx-2">|</span>
                        <Link href="https://example.com" external>External Link</Link>
                    </div>
                </div>
                <CodeBlock code={`<Heading level={2}>Heading 2</Heading>
<Text>Body text</Text>
<Link to="/path">Internal Link</Link>`} />
            </Section>

            <Section title="Form Inputs">
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <Input
                            label="Text Input"
                            id="demo-input"
                            placeholder="Type something..."
                            value={demoInput}
                            onChange={(e) => setDemoInput(e.target.value)}
                        />
                        <TextArea
                            label="Text Area"
                            id="demo-textarea"
                            placeholder="Type longer text..."
                            rows={3}
                        />
                        <CodeBlock code={`<Input label="Label" value={val} onChange={handleChange} />`} />
                    </div>
                    <div className="space-y-4">
                        <Select
                            label="Select Dropdown"
                            id="demo-select"
                            value={demoSelect}
                            onChange={(e) => setDemoSelect(e.target.value)}
                            options={[
                                { value: 'option1', label: 'Option 1' },
                                { value: 'option2', label: 'Option 2' },
                            ]}
                        />
                        <FileUpload
                            label="File Upload"
                            id="demo-file"
                            onChange={(file) => console.log(file)}
                        />
                        <CodeBlock code={`<Select label="Label" options={options} />
<FileUpload label="Upload" onChange={handleFile} />`} />
                    </div>
                </div>
            </Section>

            <Section title="Media & Containers">
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="font-bold text-gray-700 mb-2">Card Atom</h3>
                        <Card className="p-4">
                            <Heading level={4} className="mb-2">Card Title</Heading>
                            <Text>This is content inside a basic Card atom.</Text>
                        </Card>
                        <CodeBlock code={`<Card className="p-4">
<Heading>Title</Heading>
<Text>Content</Text>
</Card>`} />
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-700 mb-2">Image Atom</h3>
                        <div className="w-32 h-32">
                            <Image
                                src="https://via.placeholder.com/150"
                                alt="Placeholder"
                                className="rounded-lg shadow-sm"
                            />
                        </div>
                        <CodeBlock code={`<Image src="..." alt="..." className="rounded-lg" />`} />
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default FrontendAtoms;
