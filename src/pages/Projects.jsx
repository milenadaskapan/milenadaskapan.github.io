import { useNavigate } from 'react-router-dom'
import projectsbackground from '../images/projectsbackground.png'
import iceblock from '../images/iceblock.png'
import '../components/projects.css'
import penguin from '../images/penguin.png'
import featuredbutton from '../images/featuredbutton.png'
import softwarebutton from '../images/softwarebutton.png'
import exit from '../images/exit.png'
import aibutton from '../images/aibutton.png'
import researchbutton from '../images/researchbutton.png'
import ProjectView from './ProjectView.jsx'

function Aboutme() {
  const navigate = useNavigate()

  return (
    <div>
        <img src={projectsbackground} className="projectsbackground"/>
        <img src={iceblock} className = "iceblock"/>
        <img src={penguin} className="projectpenguin" />
        <h1 className="line line1">Hi! I'm Daphne the penguin.</h1>
        <h1 className="line line2">I'll walk you through Milena's projects.</h1>
        <h1 className="line line3">But first, what kind of projects are you</h1>
        <h1 className="line line4">looking for?</h1>
        <div className="buttonContainer">
          
          <img 
            src={featuredbutton} 
            className="projectButton featuredBtn"
            onClick={() => navigate('/ProjectView?category=featured')}
          />

          <img 
            src={softwarebutton} 
            className="projectButton"
            onClick={() => navigate('/ProjectView?category=software')}
          />

          <img 
            src={aibutton} 
            className="projectButton"
            onClick={() => navigate('/ProjectView?category=ai')}
          />

          <img 
            src={researchbutton} 
            className="projectButton"
            onClick={() => navigate('/ProjectView?category=research')}
          />
        </div>
        <button className="projexit" onClick={() => {console.log("clicked"); navigate('/ContentPage');}}>
          <img src={exit} className="projexit-btn" />
        </button>
    </div>

    
    
    
  )
}

export default Aboutme