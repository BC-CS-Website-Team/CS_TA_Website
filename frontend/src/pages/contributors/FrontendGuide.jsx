import { Outlet } from 'react-router-dom';
import { NavTab } from '../../components/atoms';

const FrontendGuide = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Frontend Architecture</h1>
            <p className="text-lg text-gray-600 mb-8">
                We use <strong>Atomic Design</strong> principles to organize our React components. This means we build up complex interfaces from very small, simple building blocks.
            </p>

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
