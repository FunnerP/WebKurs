import { useState } from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'
import tw from './images/navs/tw.png'
import fb from './images/navs/fb.png'
import insta from './images/navs/insta.png'
import ld from './images/navs/ld.png'

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
  const goPrivacy = () => {
    navigate('/privacy')
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
    <section className='contact'>
        <div className='top'>
            <h2>CONTACT US</h2>
            <h1>Let’s Start a Conversation</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
        </div>
        <div className='middle'>
          <div className='first'>
            <p>Working hours</p>
            <h2>Monday To Friday 9:00 AM to 8:00 PM </h2>
            <p>Our Support Team is available 24/7</p>
          </div>
          <div className='second'>
            <p>Contact Us</p>
            <h2>020 7993 2905</h2>
            <p>hello@finsweet.com</p> 
          </div>
        </div>
        <div className='bottom'>
          <input type="text" placeholder='Full Name' />
          <input type="text" placeholder='Your Email' />
          <input type="text" placeholder='Query Related  ' />
          <input className='last' type="text" placeholder='Message' />
          <button>Send Message</button>
        </div>
    </section>
    <footer>
      <nav>
      <h1>Finsweet</h1>
    <div className='first'>
        <a onClick={goHome} href="">Home</a>
        <a onClick={goBlog} href="">Blog</a>
        <a onClick={goAbout} href="">About Us</a>
        <a href="">Contact Us</a>
        <a onClick={goPrivacy} href="">Privcay Policy</a>
    </div>
    </nav>
    <div className='middle'>
      <div>
        <h1>Subscribe to our news letter to get latest updates and news</h1>
        <input type="text" placeholder='Enter Your Email' />
        <button>Subscribe</button>
      </div>
    </div>
    <div className='end'>
      <div className='mail'>
        <p>
          Finstreet 118 2561 Fintown
        </p>
        <p>
          Hello@finsweet.com  020 7993 2905
        </p>
      </div>
      <div className='mess'>
        <a href=""><img src={tw} alt="" /></a>
        <a href=""><img src={fb} alt="" /></a>
        <a href=""><img src={insta} alt="" /></a>
        <a href=""><img src={ld} alt="" /></a>
      </div>
    </div>
    </footer>
    </>
  )
}

export default Contact