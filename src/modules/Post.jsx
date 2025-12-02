import { useState } from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'
import andrew from './images/post/andrew.png'
import woman from './images/post/woman.png'
import rocket from './images/post/rocket.png'
import tw from './images/navs/tw.png'
import fb from './images/navs/fb.png'
import insta from './images/navs/insta.png'
import ld from './images/navs/ld.png'
import one from './images/post/one.png'
import two from './images/post/two.png'
import three from './images/post/three.png'

function Post() {
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
    <header className='post-head'>
        <div className='top'>
            <div className='andrew'>
            <img src={andrew} alt="" />
            <div>
                <h2><span>Andrew Jonson</span></h2>
                <p>Posted on 27th January 2022</p>
            </div>
        </div>
        <h1>Step-by-step guide to choosing great font pairs</h1>
        <div className='startup'>
            <img src={rocket} alt="" />
            <h2>Startup</h2>
        </div>
        </div>
        <div className='bottom'>
            <img src={woman} alt="" />
        </div>
    </header>
    <section className='post-one'>
        <div>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
        </div>
        <div>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
            <ul>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Non blandit massa enim nec scelerisque</li>
                <li>Neque egestas congue quisque egestas</li>
            </ul>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
        </div>
        <div>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
        </div>
    </section>
    <section className='post-two'>
        <h1>What to read next</h1>
        <div className='main'>
            <div>
                <img src={one} alt="" />
                <p>By <span>John Doe</span> | Aug 23, 2021</p>
                <h2>A UX Case Study Creating a Studious Environment for Students: </h2>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            </div>
            <div>
                <img src={two} alt="" />
                <p>By <span>John Doe</span> | Aug 23, 2021</p>
                <h2>A UX Case Study Creating a Studious Environment for Students: </h2>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            </div>
            <div>
                <img src={three} alt="" />
                <p>By <span>John Doe</span> | Aug 23, 2021</p>
                <h2>A UX Case Study Creating a Studious Environment for Students: </h2>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
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

export default Post