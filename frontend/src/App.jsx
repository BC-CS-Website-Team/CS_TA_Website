/**
 * App.jsx
 * Root component of the CS TA Website.
 * Sets up routing and global providers.
 */

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from './components/templates/MainLayout'
import TeamLayout from './components/templates/TeamLayout'
import CareerLayout from './components/templates/CareerLayout'
import ClassesLayout from './components/templates/ClassesLayout'
import CommitteesLayout from './components/templates/CommitteesLayout'
import Home from './pages/Home'
import TeamOverview from './pages/team/TeamOverview'
import MeetTAs from './pages/team/MeetTAs'
import PreviousYear2024_2025 from './pages/team/PreviousYear2024_2025'
import MeetProgrammers from './pages/team/MeetProgrammers'
import MeetRobotics from './pages/team/MeetRobotics'
import MeetMakerspace from './pages/team/MeetMakerspace'
import CareerDevelopment from './pages/career/CareerDevelopment'
import CareerResources from './pages/career/CareerResources'
import Conferences from './pages/career/Conferences'
import Internships from './pages/career/Internships'
import Opportunities from './pages/career/Opportunities'
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
import About from './pages/About'
import TAhandbook from './pages/TAhandbook'
import Admin from './pages/Admin'
import ProfileSettings from './pages/ProfileSettings'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import DocsLayout from './components/templates/DocsLayout'
import ContributorsHome from './pages/contributors/ContributorsHome'
import FrontendGuide from './pages/contributors/FrontendGuide'
import FrontendOverview from './pages/contributors/frontend_guide/FrontendOverview'
import FrontendAtoms from './pages/contributors/frontend_guide/FrontendAtoms'
import FrontendMolecules from './pages/contributors/frontend_guide/FrontendMolecules'
import FrontendOrganisms from './pages/contributors/frontend_guide/FrontendOrganisms'
import FrontendTemplates from './pages/contributors/frontend_guide/FrontendTemplates'
import FrontendExamples from './pages/contributors/frontend_guide/FrontendExamples'
import BackendGuide from './pages/contributors/BackendGuide'
import BackendOverview from './pages/contributors/backend_guide/BackendOverview'
import BackendDatabase from './pages/contributors/backend_guide/BackendDatabase'
import WorkflowGuide from './pages/contributors/WorkflowGuide'
import { AuthProvider } from './context/AuthContext'
import "./index.css";

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="flex flex-col min-h-screen">
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/profile-settings" element={<ProfileSettings />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

              {/* Team Routes */}
              <Route path="/meet-the-team" element={<TeamLayout />}>
                <Route index element={<TeamOverview />} />
                <Route path="tas" element={<MeetTAs />} />
                <Route path="tas/previous-2024-2025" element={<PreviousYear2024_2025 />} />
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
                <Route path="opportunities" element={<Opportunities />} />
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
              <Route path="/evening-lab" element={<EveningLab />} />
              <Route path="/about" element={<About />} />
              <Route path="/TAhandbook" element={<TAhandbook />} />
              <Route path="/student-projects" element={<StudentProjects />} />
              <Route path="/alumni" element={<Alumni />} />

              {/* Contributors Routes */}
              <Route path="/contributors" element={<DocsLayout />}>
                <Route index element={<ContributorsHome />} />
                <Route path="frontend" element={<FrontendGuide />}>
                  <Route index element={<FrontendOverview />} />
                  <Route path="atoms" element={<FrontendAtoms />} />
                  <Route path="molecules" element={<FrontendMolecules />} />
                  <Route path="organisms" element={<FrontendOrganisms />} />
                  <Route path="templates" element={<FrontendTemplates />} />
                  <Route path="how-to" element={<FrontendExamples />} />
                </Route>
                <Route path="backend" element={<BackendGuide />}>
                  <Route index element={<BackendOverview />} />
                  <Route path="database" element={<BackendDatabase />} />
                </Route>
                <Route path="workflow" element={<WorkflowGuide />} />
              </Route>
            </Route>
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  )
}

export default App
