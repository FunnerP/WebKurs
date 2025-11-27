import { useState } from 'react'
import '../navs/navs.css'
import tw from '../navs/img/tw.png'
import fb from '../navs/img/fb.png'
import insta from '../navs/img/insta.png'
import ld from '../navs/img/ld.png'

function Footer() {
  const [count, setCount] = useState(0)

  return (
    <>
    <footer>
      <nav>
      <h1>Finsweet</h1>
    <div className='first'>
        <a href="">Home</a>
            <a href="">Blog</a>
            <a href="">About Us</a>
            <a href="">Contact us</a>
            <a href="">Privcay Policy</a>
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

export default Footer