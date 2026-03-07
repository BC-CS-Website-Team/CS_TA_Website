import React from 'react';
import { Outlet } from 'react-router-dom';
import { Heading, Text, NavTab } from '../../components/atoms';

const BackendGuide: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
            <div className="mb-8">
                <Heading level={1} className="text-gray-900 mb-4">Backend Documentation</Heading>
                <Text className="text-lg text-gray-600">
                    Comprehensive guides for the API, Database, and core architecture.
                </Text>
            </div>

            {/* Navigation Tabs */}
            {/* Navigation Tabs */}
            <div className="flex space-x-2 sm:space-x-4 mb-8 overflow-x-auto pb-4">
                {[
                    { path: '.', label: 'Overview', end: true },
                    { path: 'database', label: 'Database & Models' },
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
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default BackendGuide;
