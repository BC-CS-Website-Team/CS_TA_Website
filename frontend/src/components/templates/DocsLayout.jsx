import { Outlet } from 'react-router-dom';
import ContributorsSidebar from '../organisms/ContributorsSidebar';

const DocsLayout = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="lg:flex lg:gap-8">
                {/* Sidebar */}
                <div className="lg:w-64 flex-shrink-0 mb-6 lg:mb-0">
                    <ContributorsSidebar />
                </div>

                {/* Main Content */}
                <main className="flex-grow">
                    <div className="bg-white rounded-lg shadow-sm border border-gray-100 min-h-[500px] p-6 sm:p-8">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default DocsLayout;
