import { Outlet } from 'react-router-dom'
import ClassesSidebar from '../components/classes/ClassesSidebar'

const ClassesLayout = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex gap-8">
        <ClassesSidebar />
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default ClassesLayout
