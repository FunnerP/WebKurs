import { useState } from 'react'
import './blog.css'
import { useNavigate } from 'react-router-dom'
import man from '../blog/img/man.png'

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
          <button>Read More</button>
        </div>
        <img src={man} alt="" />
    </header>
    </>
  )
}

export default Blog