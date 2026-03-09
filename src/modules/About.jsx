import { useState, useEffect } from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'
import { postsAPI, authorsAPI, getImageUrl } from '../api';
import tw from './images/navs/tw.png'
import fb from './images/navs/fb.png'
import insta from './images/navs/insta.png'
import ld from './images/navs/ld.png'

import first from './images/about/first.png'
import second from './images/about/second.png'

import floyd from './images/home/floyd.png'

function About() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate()

  const [posts, setPosts] = useState([]);
    const [authors, setAuthors] = useState({}); // Изменено на объект
  
    useEffect(() => {
      fetchData(); // Используем одну функцию для загрузки
    }, []);
  
    const fetchData = async () => {
      try {
        const [postsRes, authorsRes] = await Promise.all([
          postsAPI.getAll(),
          authorsAPI.getAll()
        ]);
        
        setPosts(postsRes.data || []);
        
        // Преобразуем массив авторов в объект для быстрого доступа по ID
        if (Array.isArray(authorsRes.data)) {
          const authorsObj = {};
          authorsRes.data.forEach(author => {
            authorsObj[author.a_id] = author; // Сохраняем весь объект автора
          });
          setAuthors(authorsObj);
        }
        
      } catch (error) {
        console.error('Ошибка загрузки:', error);
      }
    };
  
    const getAuthorName = (post) => {
      if (!post) return 'Unknown Author';
      
      const authorAId = post.authorAId;
      
      if (authorAId && authors && typeof authors === 'object') {
        const author = authors[authorAId];
        return author?.a_name || 'Unknown Author';
      }
      
      return 'Unknown Author';
    };
  
    const formatDate = (dateString) => {
      if (!dateString) return 'May 23, 2022';
      try {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
          month: 'long', 
          day: 'numeric', 
          year: 'numeric' 
        });
      } catch {
        return 'May 23, 2022';
      }
    };

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
        {Object.values(authors).map((author) => (
              <div key={author.a_id} className='in'>
                <img 
                  src={author.a_img ? getImageUrl(author.a_img) : floyd} 
                  alt={author.a_name}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = floyd;
                  }}
                />
                <h2>{author.a_name}</h2>
                <p>Content Writer @Company</p>
                <div className='mess'>
                  <a href=""><img src={tw} alt="" /></a>
                  <a href=""><img src={fb} alt="" /></a>
                  <a href=""><img src={insta} alt="" /></a>
                  <a href=""><img src={ld} alt="" /></a>
                </div>
              </div> ))}
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