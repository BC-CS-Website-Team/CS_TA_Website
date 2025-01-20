/**
 * CareerLayout.jsx
 * Layout component for career development pages
 */

import { Outlet } from 'react-router-dom'
import CareerSidebar from '../components/career/CareerSidebar'

const CareerLayout = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <CareerSidebar />
        <main className="flex-1 bg-white shadow-md rounded-lg p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default CareerLayout
