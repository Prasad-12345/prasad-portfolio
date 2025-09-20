import React from 'react'
import './style.scss'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  const navigateToContactMe = () => {
    navigate('/contact')
  }
  return (
    <section id="home" className="home">
      <div className='home_text_wrapper'>
        <h1>
          Hello, I'm Prasad
          <br/>
          FullStack Developer
        </h1>
      </div>
      <div className="home_contact_me">
        <button onClick={navigateToContactMe}>Hire Me</button>
      </div>
    </section>
  )
}

export default Home
