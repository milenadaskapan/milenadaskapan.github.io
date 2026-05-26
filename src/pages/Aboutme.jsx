import { useNavigate } from 'react-router-dom'
import aboutme from '../images/aboutmebackground.png'
import topberg from '../images/topberg.png'
import bottomberg from '../images/bottomberg.png'
import line from '../images/line.png'
import line1 from '../images/line1.png'
import blueline from '../images/blueline.png'
import namecard from '../images/namecard.png'
import degreecard from '../images/degreecard.png'
import awardscard from '../images/awardscard.png'
import experiencecard from '../images/experiencecard.png'
import toolscard from '../images/toolscard.png'
import hobbiescard from '../images/hobbiescard.png'
import backarrow from '../images/backarrow.png'
import '../components/aboutme.css'

function Aboutme() {
  const navigate = useNavigate()

  return (
    <div className="about-container">
        <img src={aboutme} className="aboutbackground" />
        <img src={topberg} className="topberg" />
        <img src={bottomberg} className="bottomberg" />
        <img src={line} className="aboutline" />
        <img src={line1} className="aboutline1" />
        <img src={line} className="aboutline2" />
        <img src={blueline} className="blueline" />
        <img src={blueline} className="blueline1" />
        <img src={blueline} className="blueline2" />
        <img src={namecard} className="namecard" />
        <img src={degreecard} className="degreecard" />
        <img src={awardscard} className="awardscard" />
        <img src={experiencecard} className="experiencecard" />
        <img src={toolscard} className="toolscard" />
        <img src={hobbiescard} className="hobbiescard" />
        <button className="backarrow" onClick={() => {console.log("clicked"); navigate('/ContentPage');}}>
            <img src={backarrow} className="backarrow-btn" />
        </button>
    </div>
  )
}

export default Aboutme