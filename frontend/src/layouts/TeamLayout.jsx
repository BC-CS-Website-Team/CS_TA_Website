/**
 * TeamLayout.jsx
 * Layout component for the Meet the Team section.
 * Includes the sidebar and main content area.
 */

import { Outlet } from 'react-router-dom'
import TeamSidebar from '../components/team/TeamSidebar'

const TeamLayout = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <TeamSidebar />
        <main className="flex-1 bg-white shadow-md rounded-lg p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default TeamLayout
