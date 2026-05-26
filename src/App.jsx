import Homepage1 from './pages/Homepage1.jsx'
import ContentPage from './pages/ContentPage.jsx'
import Contact from './pages/Contact.jsx'
import Aboutme from './pages/Aboutme.jsx'
import Projects from './pages/Projects.jsx'
import ProjectView from './pages/ProjectView.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './components/index.css'
import Snowfall from 'react-snowfall'

function App() {
  return (
    <Router>
      <Snowfall style={{
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        top: 0,
        left: 0,
        zIndex: 9999,
        pointerEvents: 'none'
        }}/>
      <Routes>
        <Route path="/" element={<Homepage1 />} />
        <Route path="/ContentPage" element={<ContentPage />} />
        <Route path = "/Homepage1" element={<Homepage1/>} />
        <Route path = "/Contact" element={<Contact/>} />
        <Route path="/Aboutme" element={<Aboutme />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/ProjectView" element={<ProjectView />} />
        
      </Routes>
    </Router>
  )
}

export default App