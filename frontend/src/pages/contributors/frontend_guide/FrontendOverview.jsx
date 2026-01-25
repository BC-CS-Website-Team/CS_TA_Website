
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

const FrontendOverview = () => {
    return (
        <div className="animate-fade-in space-y-8">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Welcome to the Atomic Design System</h3>
                <p className="text-blue-800">
                    This guide serves as the source of truth for all frontend components in the CS TA Website.
                    We follow the <strong>Atomic Design</strong> methodology to create a consistent, scalable, and maintainable UI.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <Section title="Methodology">
                    <p className="text-gray-600 mb-4">
                        We break our interface down into five distinct levels:
                    </p>
                    <ul className="space-y-3">
                        <li className="flex items-start">
                            <span className="flex-shrink-0 h-6 w-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs mt-0.5 mr-3">1</span>
                            <div>
                                <strong className="block text-gray-900">Atoms</strong>
                                <span className="text-sm text-gray-600">Basic building blocks (buttons, inputs, labels). They cannot be broken down further.</span>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="flex-shrink-0 h-6 w-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-xs mt-0.5 mr-3">2</span>
                            <div>
                                <strong className="block text-gray-900">Molecules</strong>
                                <span className="text-sm text-gray-600">Simple groups of UI elements functioning together (search form, profile card).</span>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="flex-shrink-0 h-6 w-6 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center font-bold text-xs mt-0.5 mr-3">3</span>
                            <div>
                                <strong className="block text-gray-900">Organisms</strong>
                                <span className="text-sm text-gray-600">Complex UI components composed of groups of molecules and/or atoms (header, sidebar).</span>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold text-xs mt-0.5 mr-3">4</span>
                            <div>
                                <strong className="block text-gray-900">Templates</strong>
                                <span className="text-sm text-gray-600">Page-level objects that place components into a layout and articulate the design's underlying structure.</span>
                            </div>
                        </li>
                    </ul>
                </Section>

                <Section title="Getting Started">
                    <p className="text-gray-600 mb-4">
                        To add a new feature to the frontend:
                    </p>
                    <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                        <li>Check if existing <strong>Atoms</strong> can be used.</li>
                        <li>Combine atoms into <strong>Molecules</strong> if you need a reusable component.</li>
                        <li>Assemble molecules into <strong>Organisms</strong> for major sections.</li>
                        <li>Place everything into a <strong>Template</strong>/Page.</li>
                        <li>Update this guide if you create new reusable components!</li>
                    </ol>
                </Section>
            </div>
        </div>
    );
};

export default FrontendOverview;
