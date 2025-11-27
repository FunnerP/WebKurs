import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../navs/navs.css'
function Nav() {
  // const [count, setCount] = useState(0)
  const navigate = useNavigate();

  const goHome  = () => {
    navigate('/');
  };
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
    </>
  )
}

export default Nav
