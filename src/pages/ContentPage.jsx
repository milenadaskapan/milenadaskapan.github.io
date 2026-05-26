import mainbackground from '../images/mainbackground.png'
import penguin from '../images/penguin.png'
import seal from '../images/seal.png'
import arcticfox from '../images/cutefox.png'
import speechimg from '../images/speech.png'
import house from '../images/house.png'
import { useNavigate } from 'react-router-dom'


function ContentPage() {
  const navigate = useNavigate()

  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        backgroundImage: `url(${mainbackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative'
      }}
    >
      

      <div className="scene">

        <img src = {arcticfox} className = "arcticfox"/>
        <img src={penguin} className="penguin" />
        <img src={seal} className="seal" />


        <button className="speech-btn" onClick={() => {console.log("clicked"); navigate('/Contact');}}>
          <img src={speechimg} className="speech-img" />

          <span className="contactmebubble">
            &lt;/contact me&gt;
          </span>
        </button>
        <span className="typing3">Press the speech bubbles to meet the locals!</span>

        <button className="aboutme-btn" onClick={() =>  {console.log("clicked"); navigate('/Aboutme');}}>
          <img src={speechimg} className="aboutme-img" />

          <span className="aboutmebubble">
            &lt;/about me&gt;
          </span>
        </button>

        <button className="projects-btn" onClick={() =>  {console.log("clicked"); navigate('/Projects');}}>
          <img src={speechimg} className="projects-img" />

          <span className="projectsbubble">
            &lt;/projects&gt;
          </span>
        </button>
      </div>

      <div>
        <button className = "home" onClick={() => {console.log("clicked"); 
        navigate('/Homepage1');}}>
          <img className = "home-img" src={house} />

        </button>
      </div>
      



    </div>
  )
}

export default ContentPage

