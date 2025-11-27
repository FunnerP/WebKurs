import { useState } from 'react'
import './about.css'
import { useNavigate } from 'react-router-dom'
import man from '../blog/img/man.png'

function About() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate()

  const goHome = () => {
    navigate('/')
  }
  const goBlog = () => {
    navigate('/blog')
  }
    const goContact = () => {
    navigate('/contact')
  }

  return (
    <>
    <nav>
      <h1>Finsweet</h1>
    <div className='first'>
        <div className='second'>
            <a onClick={goHome} href="">Home</a>
            <a onClick={goBlog} href="">Blog</a>
            <a href="">About Us</a>
            <a onClick={goContact} href="">Contact us</a>
        </div>
        <button>Subscribe</button>
    </div>
    </nav>
    <header className='about-head'>
        <div className='top'>
            <div>
                <h2>ABOUT US</h2>
                <h1>We are a team of content writers who share their learnings</h1>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
    </header>
    </>
  )
}

export default About