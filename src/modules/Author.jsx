import { useState } from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'
import tw from './images/navs/tw.png'
import fb from './images/navs/fb.png'
import insta from './images/navs/insta.png'
import ld from './images/navs/ld.png'

import one from './images/post/one.png'
import bus from './images/home/bus.png'
import start from './images/home/start.png'
import eco from './images/home/eco.png'
import tech from './images/home/tech.png'

import andrew from './images/author/andrew.png'
import neone from './images/author/one.png'
import netwo from './images/author/two.png'


function Author() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate()

  const goHome = () => {
    navigate('/')
  }
  const goBlog = () => {
    navigate('/blog')
  }
  const goAbout  = () => {
    navigate('/about');
  };
  const goContact = () => {
    navigate('/contact')
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
            <a onClick={goContact} href="">Contact us</a>
        </div>
        <button>Subscribe</button>
    </div>
    </nav>

    <header className='author-head'>
        <div className='andrew'>
            <img src={andrew} alt="" />
            <div className='an'>
                <h1>Hey there, I’m Andrew Jonhson and welcome to my Blog</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.
                </p>
                <div className='mess'>
                    <a href=""><img src={tw} alt="" /></a>
                    <a href=""><img src={fb} alt="" /></a>
                    <a href=""><img src={insta} alt="" /></a>
                    <a href=""><img src={ld} alt="" /></a>
                </div>
            </div>
        </div>
        <div className='colors'>
            <div className='yellow'></div>
            <div className='purple'></div>
        </div>
    </header>

    <section className='author-one'>
        <h1>My Posts</h1>
        <div className='post'>
            <img src={neone} alt="" />
            <div>
                <h2>BUSINESS</h2>
                <h1>Font sizes in UI design: The complete guide to follow</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
        </div>
        <div className='post'>
            <img src={netwo} alt="" />
            <div>
                <h2>ECONOMY</h2>
                <h1>How to build rapport with your web design clients</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
        </div>
    </section>

    <footer>
      <nav>
      <h1>Finsweet</h1>
    <div className='first'>
        <a onClick={goHome} href="">Home</a>
        <a onClick={goBlog} href="">Blog</a>
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

export default Author