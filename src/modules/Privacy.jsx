import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'
import tw from './images/navs/tw.png'
import fb from './images/navs/fb.png'
import insta from './images/navs/insta.png'
import ld from './images/navs/ld.png'

function Privacy() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/')
  }
  const goBlog  = () => {
    navigate('/blog');
  };
   const goAbout  = () => {
    navigate('/about');
  };
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
            <a onClick={goAbout} href="">About Us</a>
            <a onClick={goContact} href="">Contact us</a>
        </div>
        <button>Subscribe</button>
    </div>
    </nav>
    <header className='priv-head'>
        <div>
            <h1>Privacy Policy</h1>
            <p>Last Updated  on 27th January 2022</p>
        </div>
    </header>
    <section className='privacy'>
        <div>
            <h1>Lorem ipsum dolor sit amet</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non. Sit amet nulla facilisi morbi tempus iaculis urna. Lorem sed risus ultricies tristique nulla aliquet enim. Volutpat blandit aliquam etiam erat velit. Orci eu lobortis elementum nibh. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Neque convallis a cras semper auctor neque vitae tempus quam.</p>
        </div>
        <div>
            <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non. Sit amet nulla facilisi morbi tempus iaculis urna. Lorem sed risus ultricies tristique nulla aliquet enim. Volutpat blandit aliquam etiam erat velit. Orci eu lobortis elementum nibh. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Neque convallis a cras semper auctor neque vitae tempus quam.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non. Sit amet nulla facilisi morbi tempus iaculis urna. Lorem sed risus ultricies tristique nulla aliquet enim. Volutpat blandit aliquam etiam erat velit. Orci eu lobortis elementum nibh. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Neque convallis a cras semper auctor neque vitae tempus quam.</p>
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
        <a href=""> Privacy Policy</a>
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

export default Privacy