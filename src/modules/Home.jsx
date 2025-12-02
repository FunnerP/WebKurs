import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'
import tw from './images/navs/tw.png'
import fb from './images/navs/fb.png'
import insta from './images/navs/insta.png'
import ld from './images/navs/ld.png'
import dom from './images/home/dom.png'

import bus from './images/home/bus.png'
import start from './images/home/start.png'
import eco from './images/home/eco.png'
import tech from './images/home/tech.png'
import fon from './images/home/fon.png'

import floyd from './images/home/floyd.png'
import dianne from './images/home/dianne.png'
import jenny from './images/home/jenny.png'
import leslie from './images/home/leslie.png'

import logo from './images/home/logo.png'
import jonathan from './images/home/jonathan.png'

function Home() {
  // const [count, setCount] = useState(0)
  const navigate = useNavigate();

  const goBlog  = () => {
    navigate('/blog');
  };
   const goAbout  = () => {
    navigate('/about');
  };
    const goContact = () => {
    navigate('/contact')
  };
  const goPrivacy = () => {
    navigate('/privacy')
  }
  const goPost = () => {
    navigate('/post')
  }

  return (
    <>
    <nav>
      <h1>Finsweet</h1>
    <div className='first'>
        <div className='second'>
            <a href="">Home</a>
            <a onClick={goBlog} href="">Blog</a>
            <a onClick={goAbout} href="">About Us</a>
            <a onClick={goContact} href="">Contact us</a>
        </div>
        <button>Subscribe</button>
    </div>
    </nav>
    <header className='home-head'>
      <div className='fon'>
        <div className='main'>
          <h2>Posted on startup</h2>
          <h1>Step-by-step guide to choosing great font pairs</h1>
          <p>By <span>James West</span>  |  May 23, 2022 </p>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
          <button>Read More</button>
        </div>
      </div>
    </header>

    <section className='home-one'>
      <div className='top'>
        <h1>Featured Post</h1>
        <h1>All Posts</h1>
        <a onClick={goPost} href=""><span>View All</span></a>
      </div>
      <div className='bottom'>
        <div className='first'>
          <img src={dom} alt="" />
          <p>By <span>John Doe</span>   l   May 23, 2022</p>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</h2>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
          <button>Read More</button>
        </div>
        <div className='second'>
          <div>
            <p>By <span>John Doe</span>   l   May 23, 2022</p>
            <h2>8 Figma design systems that you can download for free today.</h2>
          </div>
          <div>
            <p>By <span>John Doe</span>   l   May 23, 2022</p>
            <h2>8 Figma design systems that you can download for free today.</h2>
          </div>
          <div>
            <p>By <span>John Doe</span>   l   May 23, 2022</p>
            <h2>8 Figma design systems that you can download for free today.</h2>
          </div>
          <div>
            <p>By <span>John Doe</span>   l   May 23, 2022</p>
            <h2>8 Figma design systems that you can download for free today.</h2>
          </div>  
        </div>
      </div>
      <div></div>
    </section>

    <section className='home-two'>
      <div className='top'>
        <div className='yellow'></div>
        <div className='purple'></div>
      </div>
      <div className='bottom'>
        <div>
          <h2>ABOUT US</h2>
          <h1>We are a community of content writers who share their learnings</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <a onClick={goAbout} href="">Read More</a>
        </div>
        <div>
          <h2>Our mision</h2>
          <h1>Creating valuable content for creatives all around the world</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
    </section>

    <section className='home-three'>
      <h1>Choose A Catagory</h1>
      <div className='main'>
        <div>
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

    <section className='home-four'>
      <img src={fon} alt="" />
      <div className='main'>
        <h2>Why we started </h2>
        <h1>It started out as a simple idea and evolved into our passion</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
        <button>Discover our story</button>
      </div>
    </section>

    <section className='home-five'>
      <h1>List of Authors</h1>
      <div className='top'>
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
      </div>
      <img className='logo' src={logo} alt="" />
    </section>

    <section className='home-six'>
      <div className='main'>
        <div className='left'>
          <h2>TESTIMONIALS</h2>
          <h1>What people say about our blog</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
        </div>
        <div className='right'>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
          <div className='bottom'>
            <div className='jon'>
              <img src={jonathan} alt="" />
              <div>
                <h2>Jonathan Vallem</h2>
                <p>New york, USA</p>
              </div>
            </div>
            <div className='strelki'>
              <button>◀</button>
              <button>▶</button>
            </div>
          </div>
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
        <a href="">Home</a>
        <a onClick={goBlog} href="">Blog</a>
        <a onClick={goAbout} href="">About Us</a>
        <a onClick={goContact} href="">Contact us</a>
        <a onClick={goPrivacy} href=""> Privacy Policy</a>
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

export default Home