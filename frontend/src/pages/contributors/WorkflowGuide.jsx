import { Outlet } from 'react-router-dom';
import { NavTab } from '../../components/atoms';

const WorkflowGuide = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Development Workflow</h1>
            <p className="text-lg text-gray-600 mb-8">
                Learn how to set up your environment, manage the database, and contribute code to the project! Start with this page, then follow the Git page protocols so we can accept your changes as soon as possible!
            </p>

            {/* Navigation Tabs */}
            <div className="flex space-x-2 sm:space-x-4 mb-8 overflow-x-auto pb-4">
                {[
                    { path: '.', label: 'Overview', end: true },
                    { path: 'docker', label: 'Backend (Docker)' },
                    { path: 'local', label: 'Backend (Local)' },
                    { path: 'frontend', label: 'Frontend Setup' },
                    { path: 'git', label: 'Git' },
                    { path: 'faq', label: 'FAQ' },
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

export default WorkflowGuide;
