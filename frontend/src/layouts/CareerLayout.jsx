/**
 * CareerLayout.jsx
 * Layout component for career development pages
 */

import { Outlet } from 'react-router-dom'
import CareerSidebar from '../components/career/CareerSidebar'

const CareerLayout = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="md:w-64 flex-shrink-0">
          <CareerSidebar />
        </aside>
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default CareerLayout
