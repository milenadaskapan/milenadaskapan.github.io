import ContactBackground from '../images/ContactBackground.png'
import seal from '../images/seal.png'
import card from '../images/card.png'
import exit from '../images/exit.png'
import linkedin from '../images/linkedin.png'
import email from '../images/email.png'
import github from '../images/github.png'
import { useNavigate } from 'react-router-dom'
import '../components/contactpage.css'

function Contact() {
    const navigate = useNavigate();
  return (
    <div className="contact-container">
      <img src={ContactBackground} className="contactbackground" />
      <img src={card} className="contactcard" />
      <img src={seal} className="seal1" />
      <button className="exit" onClick={() => {console.log("clicked"); navigate('/ContentPage');}}>
        <img src={exit} className="exit-btn" />
      </button>
      <h1 className="line line1">Hi, I’m Silo the seal!</h1>
      <h1 className="line line2">I can help you get in touch with Milena.</h1>
      <h1 className="line line3">Click an icon below to continue.</h1>
      <div className="icon-row">
        <a href="https://www.linkedin.com/in/milena-daskapan/" target="_blank" rel="noreferrer">
            <img src={linkedin} className="icon-btn" alt="LinkedIn" />
        </a>

        <a href="https://github.com/milenadaskapan" target="_blank" rel="noreferrer">
            <img src={github} className="icon-btn" alt="GitHub" />
        </a>

        <a href="mailto:milenadskpn@gmail.com">
            <img src={email} className="icon-btn" alt="Email" />
        </a>
    </div>
      
    </div>
    
  );
}

export default Contact;