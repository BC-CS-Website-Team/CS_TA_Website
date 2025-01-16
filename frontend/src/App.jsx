/**
 * App.jsx
 * Root component of the CS TA Website.
 * Sets up routing and global providers.
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import TeamLayout from './layouts/TeamLayout'
import Home from './pages/Home'
import TeamOverview from './pages/team/TeamOverview'
import MeetTAs from './pages/team/MeetTAs'
import MeetProgrammers from './pages/team/MeetProgrammers'
import MeetRobotics from './pages/team/MeetRobotics'
import MeetMakerspace from './pages/team/MeetMakerspace'
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
            
            <Route path="/career-development" element={<div>Career Development</div>} />
            <Route path="/career-development/resources" element={<div>Career Resources</div>} />
            <Route path="/career-development/conferences" element={<div>Conferences</div>} />
            <Route path="/career-development/internships" element={<div>Internships</div>} />
            
            <Route path="/committees" element={<div>Committees</div>} />
            <Route path="/committees/tech-ethics" element={<div>Tech Ethics Committee</div>} />
            <Route path="/committees/career-dev" element={<div>Career Development Committee</div>} />
            <Route path="/committees/diversity" element={<div>Diversity in STEM</div>} />
            <Route path="/committees/creative-space" element={<div>Creative Space</div>} />
            
            <Route path="/clubs" element={<div>Clubs</div>} />
            <Route path="/classes" element={<div>Classes</div>} />
            <Route path="/alumni" element={<div>Alumni</div>} />
            <Route path="/student-projects" element={<div>Student Projects</div>} />
            <Route path="/evening-lab" element={<div>Evening Lab</div>} />
          </Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
