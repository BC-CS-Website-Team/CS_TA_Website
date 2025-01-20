import { Outlet } from 'react-router-dom'
import ClassesSidebar from '../components/classes/ClassesSidebar'

const ClassesLayout = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <ClassesSidebar />
        <main className="flex-1 bg-white shadow-md rounded-lg p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default ClassesLayout
