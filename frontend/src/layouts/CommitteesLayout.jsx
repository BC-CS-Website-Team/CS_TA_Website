import { Outlet, NavLink } from 'react-router-dom';

const CommitteesLayout = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-64 flex-shrink-0">
          <nav className="bg-white rounded-lg shadow-md p-4">
            <ul className="space-y-2">
              <li>
                <NavLink 
                  to="/committees" 
                  end
                  className={({ isActive }) =>
                    `block px-4 py-2 rounded-md transition-colors ${
                      isActive
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`
                  }
                >
                  Overview
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/committees/tech-ethics"
                  className={({ isActive }) =>
                    `block px-4 py-2 rounded-md transition-colors ${
                      isActive
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`
                  }
                >
                  Tech Ethics Committee
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/committees/career-dev"
                  className={({ isActive }) =>
                    `block px-4 py-2 rounded-md transition-colors ${
                      isActive
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`
                  }
                >
                  Tech Career Development
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/committees/diversity-in-stem"
                  className={({ isActive }) =>
                    `block px-4 py-2 rounded-md transition-colors ${
                      isActive
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`
                  }
                >
                  Diversity in STEM
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/committees/creative-space"
                  className={({ isActive }) =>
                    `block px-4 py-2 rounded-md transition-colors ${
                      isActive
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`
                  }
                >
                  Creative Space
                </NavLink>
              </li>
            </ul>
          </nav>
        </aside>

        <div className="flex-1">
          <div className="bg-white rounded-lg shadow-md p-6">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommitteesLayout;
