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


function Category() {
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

    <section className='category-head'>
        <h1>Business</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
        <h2>Blog ▶ Business</h2>
    </section>

    <section className='category-one'>
        <div className='left'>
            <div className='bus'>
                <img src={one} alt="" />
                <div>
                    <h2>BUSINESS</h2>
                    <h1>Top 6 free website mockup tools 2022</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.</p>
                </div>
            </div>
            <div className='bus'>
                <img src={one} alt="" />
                <div>
                    <h2>BUSINESS</h2>
                    <h1>Step-by-step guide to choosing great font pairs</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.</p>
                </div>
            </div>
            <div className='bus'>
                <img src={one} alt="" />
                <div>
                    <h2>BUSINESS</h2>
                    <h1>Ten free foogle fonts that you should use</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.</p>
                </div>
            </div>
            <div className='bus'>
                <img src={one} alt="" />
                <div>
                    <h2>BUSINESS</h2>
                    <h1>What did I learn from doing 50+ design sprints?</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.</p>
                </div>
            </div>
        </div>
        <div className='right'>
            <h1>Categories</h1>
            <div className='top'>
                          <div>
                            <img src={bus} alt="" />
                            <h2>Business</h2>
                          </div>
                          <div>
                            <img src={start} alt="" />
                            <h2>Startup</h2>
                          </div>
                          <div>
                            <img src={eco} alt="" />
                            <h2>Economy</h2>
                          </div>
                          <div>
                            <img src={tech} alt="" />
                            <h2>Technology</h2>
                          </div>
            </div>
            <h1>All Tags</h1>
            <div className='bottom'>
                <a href="">Business</a>
                <a href="">Experience</a>
                <a href="">Screen</a>
                <a href="">Technology</a>
                <a href="">Marketing</a>
                <a href="">Life</a>
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

export default Category