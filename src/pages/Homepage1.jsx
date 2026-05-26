import background from '../images/background.png'
import bear from '../images/arcticfos.png'
import bear1 from '../images/arcticfos2.png'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'


function Homepage() {
  const navigate = useNavigate()
  const [isHovering, setIsHovering] = useState(false)
  const [frame, setFrame] = useState(0)

  useEffect(() => {
    if (!isHovering) return
    const interval = setInterval(() => {
      setFrame(prev => (prev === 0 ? 1 : 0))
    }, 130)
    return () => clearInterval(interval)
  }, [isHovering])

  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative'
      }}
    >

      <h1 className="typing">&lt;/Milena’s World&gt;</h1>
    
      <button className= "start-button"
       onClick={() => {console.log("clicked"); navigate('/ContentPage');}}
       onMouseEnter={()=>setIsHovering(true)}
       onMouseLeave={()=> setIsHovering(false)}>
        <span className="btn-text">begin your journey!</span>
        <img src= {frame===0 ? bear : bear1} className={frame===0 ? "bear" : "bear1"} />
        
      </button>

      

    </div>
  )
}

export default Homepage

