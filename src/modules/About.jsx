import { useState } from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'
import tw from './images/navs/tw.png'
import fb from './images/navs/fb.png'
import insta from './images/navs/insta.png'
import ld from './images/navs/ld.png'

import first from './images/about/first.png'
import second from './images/about/second.png'

import floyd from './images/home/floyd.png'
import dianne from './images/home/dianne.png'
import jenny from './images/home/jenny.png'
import leslie from './images/home/leslie.png'
import guy from './images/about/guy.png'
import eleanor from './images/about/eleanor.png'
import robert from './images/about/robert.png'
import jacob from './images/about/jacob.png'

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
            <a href="">About Us</a>
            <a onClick={goContact} href="">Contact us</a>
        </div>
        <button>Subscribe</button>
    </div>
    </nav>
    
    <section className='about-head'>
      <div className='top'>
        <div>
          <h2>ABOUT US</h2>
          <h1>We are a team of content writers who share their learnings</h1>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className='bottom'>
          <div className='text'>
          <div>
            <h1>12+</h1>
            <p>Blogs Published</p>
          </div>
          <div>
            <h1>18K+</h1>
            <p>Views on Finsweet</p>
          </div>
          <div>
            <h1>30K+</h1>
            <p>Total active Users</p>
          </div>
          </div>
          <div className='colors'>
            <div className='purple'></div>
            <div className='yellow'></div>
          </div>
        </div>
        <div className='end'>
          <div className='main'>
            <div>
              <h2>Our mision</h2>
              <h1>Creating valuable content for creatives all around the world</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</p>
            </div>
            <div>
              <h2>Our Vision</h2>
              <h1>A platform that empowers individuals to improve</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</p>
            </div>
          </div>

        </div>
    </section>

    <section className='about-one'>
      <div className='block'></div>
      <div className='tab'>
        <div>
          <h1>Our team of creatives</h1>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
        </div>
        <img src={first} alt="" />
      </div>
      <div className='tab'>
        <img src={second} alt="" />
        <div>
          <h1>Why we started this Blog</h1>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
        </div>
      </div>
    </section>
    
    <section className='about-two'>
      <h1>List of Authors</h1>
      <div className='main'>
        <div className='in'>
            <img src={floyd} alt="" />
            <h2>Floyd Miles</h2>
            <p>Content Writer @Company</p>
            <div className='mess'>
              <a href=""><img src={tw} alt="" /></a>
              <a href=""><img src={fb} alt="" /></a>
              <a href=""><img src={insta} alt="" /></a>
              <a href=""><img src={ld} alt="" /></a>
          </div>
        </div>
        <div className='in'>
            <img src={dianne} alt="" />
            <h2>Dianne Russell</h2>
            <p>Content Writer @Company</p>
            <div className='mess'>
              <a href=""><img src={tw} alt="" /></a>
              <a href=""><img src={fb} alt="" /></a>
              <a href=""><img src={insta} alt="" /></a>
              <a href=""><img src={ld} alt="" /></a>
          </div>
        </div>
        <div className='in'>
            <img src={jenny} alt="" />
            <h2>Jenny Wilson</h2>
            <p>Content Writer @Company</p>
            <div className='mess'>
              <a href=""><img src={tw} alt="" /></a>
              <a href=""><img src={fb} alt="" /></a>
              <a href=""><img src={insta} alt="" /></a>
              <a href=""><img src={ld} alt="" /></a>
          </div>
        </div>
        <div className='in'>
            <img src={leslie} alt="" />
            <h2>Leslie Alexander</h2>
            <p>Content Writer @Company</p>
            <div className='mess'>
              <a href=""><img src={tw} alt="" /></a>
              <a href=""><img src={fb} alt="" /></a>
              <a href=""><img src={insta} alt="" /></a>
              <a href=""><img src={ld} alt="" /></a>
          </div>
        </div>
        <div className='in'>
            <img src={guy} alt="" />
            <h2>Guy Hawkins</h2>
            <p>Content Writer @Company</p>
            <div className='mess'>
              <a href=""><img src={tw} alt="" /></a>
              <a href=""><img src={fb} alt="" /></a>
              <a href=""><img src={insta} alt="" /></a>
              <a href=""><img src={ld} alt="" /></a>
          </div>
        </div>
        <div className='in'>
            <img src={eleanor} alt="" />
            <h2>Eleanor Pena</h2>
            <p>Content Writer @Company</p>
            <div className='mess'>
              <a href=""><img src={tw} alt="" /></a>
              <a href=""><img src={fb} alt="" /></a>
              <a href=""><img src={insta} alt="" /></a>
              <a href=""><img src={ld} alt="" /></a>
          </div>
        </div>
        <div className='in'>
            <img src={robert} alt="" />
            <h2>Robert Fox</h2>
            <p>Content Writer @Company</p>
            <div className='mess'>
              <a href=""><img src={tw} alt="" /></a>
              <a href=""><img src={fb} alt="" /></a>
              <a href=""><img src={insta} alt="" /></a>
              <a href=""><img src={ld} alt="" /></a>
          </div>
        </div>
        <div className='in'>
            <img src={jacob} alt="" />
            <h2>Jacob Jones</h2>
            <p>Content Writer @Company</p>
            <div className='mess'>
              <a href=""><img src={tw} alt="" /></a>
              <a href=""><img src={fb} alt="" /></a>
              <a href=""><img src={insta} alt="" /></a>
              <a href=""><img src={ld} alt="" /></a>
          </div>
        </div>
      </div>
    </section>

    <section className='about-three'>
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
        <a onClick={goBlog} href="">Blog</a>
        <a href="">About Us</a>
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

export default About