import React from 'react';
import { CodeBlock } from '../../../components/atoms';

interface MiniBrowserProps {
    title: string;
    children: React.ReactNode;
}

const MiniBrowser: React.FC<MiniBrowserProps> = ({ title, children }) => (
    <div className="border border-gray-300 rounded-lg overflow-hidden shadow-sm bg-gray-100 flex flex-col h-64 w-full max-w-md mx-auto">
        {/* Fake Browser Toolbar */}
        <div className="bg-gray-200 px-3 py-2 flex items-center space-x-2 border-b border-gray-300">
            <div className="flex space-x-1">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="flex-1 bg-white h-6 rounded px-2 text-xs flex items-center text-gray-500">
                localhost:5173/{title.toLowerCase().replace(' ', '-')}
            </div>
        </div>
        {/* Viewport */}
        <div className="flex-1 overflow-hidden relative bg-white flex flex-col">
            {children}
        </div>
    </div>
);

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

const FrontendTemplates: React.FC = () => {
    return (
        <div className="animate-fade-in space-y-12">
            <Section title="Main Layout">
                <p className="mb-6 text-gray-600">
                    The <code>MainLayout</code> is the root layout for the application.
                    It stacks the <code>Navigation</code> organism at the top, the <code>Footer</code> at the bottom, and renders the router <code>Outlet</code> in the flex-grow middle.
                </p>
                <MiniBrowser title="Main Layout">
                    <div className="bg-blue-600 h-8 w-full flex items-center justify-center text-white text-xs font-bold">Navigation</div>
                    <div className="flex-1 bg-white p-4 flex items-center justify-center text-gray-400 italic text-sm border-dashed border-2 m-2">
                        Outlet (Page Content)
                    </div>
                    <div className="bg-gray-800 h-8 w-full flex items-center justify-center text-white text-xs font-bold">Footer</div>
                </MiniBrowser>
                <div className="mt-4">
                    <CodeBlock language="tsx" code={`<div className="min-h-screen flex flex-col">
  <Navigation />
  <main className="flex-grow">
    <Outlet />
  </main>
  <Footer />
</div>`} />
                </div>
            </Section>

            <Section title="Sidebar Layouts (Team, Career, Classes, Docs)">
                <p className="mb-6 text-gray-600">
                    These layouts nest <em>inside</em> the Main Layout. They provide a two-column structure
                    with a contextual sidebar on the left and the content on the right.
                    Examples: <code>TeamLayout</code>, <code>CareerLayout</code>, <code>ClassesLayout</code>, <code>DocsLayout</code>.
                </p>
                <MiniBrowser title="Team Layout">
                    <div className="bg-blue-600 h-8 w-full flex items-center justify-center text-white text-xs font-bold opacity-50">Navigation (from Parent)</div>
                    <div className="flex-1 flex overflow-hidden">
                        <div className="w-1/4 bg-gray-100 border-r p-2 flex items-center justify-center text-xs font-bold text-gray-600">
                            Sidebar
                        </div>
                        <div className="flex-1 bg-white p-4 flex items-center justify-center text-gray-400 italic text-sm border-dashed border-2 m-2">
                            Outlet
                        </div>
                    </div>
                    <div className="bg-gray-800 h-8 w-full flex items-center justify-center text-white text-xs font-bold opacity-50">Footer (from Parent)</div>
                </MiniBrowser>
                <div className="mt-4">
                    <CodeBlock language="tsx" code={`// TeamLayout.tsx
<div className="container mx-auto flex py-8">
  <TeamSidebar />
  <div className="flex-1 ml-8">
    <Outlet />
  </div>
</div>`} />
                </div>
            </Section>
        </div>
    );
};

export default FrontendTemplates;
