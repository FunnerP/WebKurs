import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'
import tw from './images/navs/tw.png'
import fb from './images/navs/fb.png'
import insta from './images/navs/insta.png'
import ld from './images/navs/ld.png'
import dom from './images/home/dom.png'

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