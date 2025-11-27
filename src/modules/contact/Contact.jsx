import { useState } from 'react'
import './contact.css'
import { useNavigate } from 'react-router-dom'
import man from '../blog/img/man.png'

function Contact() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate()

  const goHome = () => {
    navigate('/')
  }
  const goBlog = () => {
    navigate('/blog')
  }
  const goAbout = () => {
    navigate('/about')
  }

  return (
    <>
    <nav>
      <h1>Finsweet</h1>
    <div className='first'>
        <div className='second'>
            <a onClick={goHome} href="">Home</a>
            <a onClick={goBlog} href="">Blog</a>
            <a onClick={goAbout} href="">About Us</a>
            <a href="">Contact us</a>
        </div>
        <button>Subscribe</button>
    </div>
    </nav>
    <header className='contact-head'>
        <div className='top'>
            <h2>CONTACT US</h2>
            <h1>Let’s Start a Conversation</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
        </div>
    </header>
    </>
  )
}

export default Contact