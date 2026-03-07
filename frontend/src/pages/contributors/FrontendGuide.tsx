import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavTab } from '../../components/atoms';

const FrontendGuide: React.FC = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Frontend Architecture & Guidelines</h1>
            <div className="text-lg text-gray-600 mb-8 space-y-4">
                <p>
                    Welcome to the frontend contributor guide! Our frontend is a modern single-page application built with <strong>React</strong>, <strong>Vite</strong>, and <strong>TypeScript</strong>.
                </p>
                <p>
                    We use <strong>Atomic Design</strong> principles to organize our React components. This means we build up complex, scalable interfaces from very small, simple, and reusable building blocks (Atoms &rarr; Molecules &rarr; Organisms &rarr; Templates).
                </p>
                <p>
                    <strong>TypeScript Integration:</strong> This project is strictly typed. By using TypeScript, we ensure type safety, self-documenting code, and fewer runtime errors. Every component should be typed as a <code>React.FC</code> (Functional Component) and define an <code>interface</code> for its <code>props</code>. When adding new features, always ensure your data models and event handlers are properly annotated so the compiler can catch errors early.
                </p>
            </div>

            {/* Navigation Tabs */}
            <div className="flex space-x-2 sm:space-x-4 mb-8 overflow-x-auto pb-4">
                {[
                    { path: '.', label: 'Overview', end: true },
                    { path: 'atoms', label: 'Atoms' },
                    { path: 'molecules', label: 'Molecules' },
                    { path: 'organisms', label: 'Organisms' },
                    { path: 'templates', label: 'Templates' },
                    { path: 'how-to', label: 'How-To & Examples' }
                ].map(({ path, label, end }) => (
                    <NavTab
                        key={path}
                        to={path}
                        end={end}
                    >
                        {label}
                    </NavTab>
                ))}
            </div>

            {/* Content Area */}
            <div className="animate-fade-in">
                <Outlet />
            </div>
        </div>
    );
};

export default FrontendGuide;
