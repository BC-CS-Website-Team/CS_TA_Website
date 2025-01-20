/**
 * App.jsx
 * Root component of the CS TA Website.
 * Sets up routing and global providers.
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import TeamLayout from './layouts/TeamLayout'
import CareerLayout from './layouts/CareerLayout'
import ClassesLayout from './layouts/ClassesLayout'
import CommitteesLayout from './layouts/CommitteesLayout'
import Home from './pages/Home'
import TeamOverview from './pages/team/TeamOverview'
import MeetTAs from './pages/team/MeetTAs'
import MeetProgrammers from './pages/team/MeetProgrammers'
import MeetRobotics from './pages/team/MeetRobotics'
import MeetMakerspace from './pages/team/MeetMakerspace'
import CareerDevelopment from './pages/career/CareerDevelopment'
import CareerResources from './pages/career/CareerResources'
import Conferences from './pages/career/Conferences'
import Internships from './pages/career/Internships'
import Clubs from './pages/Clubs'
import EveningLab from './pages/EveningLab'
import ClassesOverview from './pages/classes/ClassesOverview'
import CSC226 from './pages/classes/CSC226'
import CSC236 from './pages/classes/CSC236'
import CSC246 from './pages/classes/CSC246'
import LearningResources from './pages/classes/LearningResources'
import Committees from './pages/committees/Committees'
import TechEthics from './pages/committees/TechEthics'
import DiversityInStem from './pages/committees/DiversityInStem'
import CareerDevCommittee from './pages/committees/CareerDevCommittee'
import CreativeSpace from './pages/committees/CreativeSpace'
import StudentProjects from './pages/projects/StudentProjects'
import Alumni from './pages/alumni/Alumni'
import './styles/index.css'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            
            {/* Team Routes */}
            <Route path="/meet-the-team" element={<TeamLayout />}>
              <Route index element={<TeamOverview />} />
              <Route path="tas" element={<MeetTAs />} />
              <Route path="programmers" element={<MeetProgrammers />} />
              <Route path="robotics" element={<MeetRobotics />} />
              <Route path="makerspace" element={<MeetMakerspace />} />
            </Route>
            
            {/* Career Development Routes */}
            <Route path="/career-development" element={<CareerLayout />}>
              <Route index element={<CareerDevelopment />} />
              <Route path="resources" element={<CareerResources />} />
              <Route path="conferences" element={<Conferences />} />
              <Route path="internships" element={<Internships />} />
            </Route>
            
            {/* Classes Routes */}
            <Route path="/classes" element={<ClassesLayout />}>
              <Route index element={<ClassesOverview />} />
              <Route path="learning-resources" element={<LearningResources />} />
              <Route path="csc226" element={<CSC226 />} />
              <Route path="csc236" element={<CSC236 />} />
              <Route path="csc246" element={<CSC246 />} />
            </Route>
            
            {/* Committees Routes */}
            <Route path="/committees" element={<CommitteesLayout />}>
              <Route index element={<Committees />} />
              <Route path="tech-ethics" element={<TechEthics />} />
              <Route path="career-dev" element={<CareerDevCommittee />} />
              <Route path="diversity-in-stem" element={<DiversityInStem />} />
              <Route path="creative-space" element={<CreativeSpace />} />
            </Route>
            
            <Route path="/clubs" element={<Clubs />} />
            <Route path="/student-projects" element={<StudentProjects />} />
            <Route path="/alumni" element={<Alumni />} />
            <Route path="/evening-lab" element={<EveningLab />} />
          </Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
