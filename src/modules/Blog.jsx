import { useState } from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'
import man from './images/blog/man.png'
import tw from './images/navs/tw.png'
import fb from './images/navs/fb.png'
import insta from './images/navs/insta.png'
import ld from './images/navs/ld.png'

import one from './images/blog/one.png'
import two from './images/blog/two.png'
import three from './images/blog/three.png'
import four from './images/blog/four.png'
import five from './images/blog/five.png'

import bus from './images/home/bus.png'
import start from './images/home/start.png'
import eco from './images/home/eco.png'
import tech from './images/home/tech.png'

function Blog() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate()

  const goHome = () => {
    navigate('/')
  }
  const goAbout = () => {
    navigate('/about')
  }
  const goContact = () => {
    navigate('/contact')
  }
  const goPrivacy = () => {
    navigate('/privacy')
  }
  const goPost = () => {
    navigate('/post')
  }
  const goCategory = () => {
    navigate('/category')
  }

  return (
    <>
    <nav>
      <h1>Finsweet</h1>
    <div className='first'>
        <div className='second'>
            <a onClick={goHome} href="">Home</a>
            <a href="">Blog</a>
            <a onClick={goAbout} href="">About Us</a>
            <a onClick={goContact} href="">Contact us</a>
        </div>
        <button>Subscribe</button>
    </div>
    </nav>
    <header className='blog-head'>
      <div className='head'>
          <h2>Posted on startup</h2>
          <h1>Step-by-step guide to choosing great font pairs</h1>
          <p>By <span>James West</span>  |  May 23, 2022 </p>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
          <button onClick={goPost}>Read More</button>
        </div>
        <img src={man} alt="" />
    </header>

    <section className='blog-one'>
      <h1>All posts</h1>
      <div className='main'>
        <div className='mod'>
          <img src={one} alt="" />
          <div>
            <h3>Startup</h3>
            <h2>Design tips for designers that cover everything you need</h2>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
          </div>
        </div>
        <div className='mod'>
          <img src={two} alt="" />
          <div>
            <h3>BUSINESS</h3>
            <h2>How to build rapport with your web design clients</h2>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
          </div>
        </div>
        <div className='mod'>
          <img src={three} alt="" />
          <div>
            <h3>Startup</h3>
            <h2>Logo design trends to avoid in 2022</h2>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
          </div>
        </div>
        <div className='mod'>
          <img src={four} alt="" />
          <div>
            <h3>TECHNOLOGY</h3>
            <h2>8 Figma design systems you can download for free today</h2>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
          </div>
        </div>
        <div className='mod'>
          <img src={five} alt="" />
          <div>
            <h3>ECONOMY</h3>
            <h2>Font sizes in UI design: The complete guide to follow</h2>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
          </div>
        </div>
      </div>
      <div className='bottom'>
        <a href="">◀ Prev</a>
        <a href="">Next ▶</a>
      </div>
    </section>

    <section className='blog-two'>
            <h1>All Categories</h1>
            <div className='main'>
              <div onClick={goCategory}>
                <img src={bus} alt="" />
                <h2>Business</h2>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
              </div>
              <div>
                <img src={start} alt="" />
                <h2>Startup</h2>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
              </div>
              <div>
                <img src={eco} alt="" />
                <h2>Economy</h2>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
              </div>
              <div>
                <img src={tech} alt="" />
                <h2>Technology</h2>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
              </div>
            </div>
    </section>
    
    <section className='home-seven'>
      <div>
        <h1>Join our team to be a part of our story</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
        <button>Join Now</button>
      </div>
    </section>
    
    <footer>
      <nav>
      <h1>Finsweet</h1>
    <div className='first'>
        <a onClick={goHome} href="">Home</a>
        <a href="">Blog</a>
        <a onClick={goAbout} href="">About Us</a>
        <a onClick={goContact} href="">Contact us</a>
        <a onClick={goPrivacy} href="">Privacy Policy</a>
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

export default Blog