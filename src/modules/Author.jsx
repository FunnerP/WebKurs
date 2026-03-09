import { useState, useEffect } from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'
import { postsAPI, authorsAPI, getImageUrl } from '../api';
import tw from './images/navs/tw.png'
import fb from './images/navs/fb.png'
import insta from './images/navs/insta.png'
import ld from './images/navs/ld.png'

import one from './images/post/one.png'
import bus from './images/home/bus.png'
import start from './images/home/start.png'
import eco from './images/home/eco.png'
import tech from './images/home/tech.png'

import andrew from './images/author/andrew.png'
import neone from './images/author/one.png'
import netwo from './images/author/two.png'


function Author() {
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

    <header className='author-head'>
        <div className='andrew'>
            <img src={andrew} alt="" />
            <div className='an'>
                <h1>Hey there, I’m Andrew Jonhson and welcome to my Blog</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.
                </p>
                <div className='mess'>
                    <a href=""><img src={tw} alt="" /></a>
                    <a href=""><img src={fb} alt="" /></a>
                    <a href=""><img src={insta} alt="" /></a>
                    <a href=""><img src={ld} alt="" /></a>
                </div>
            </div>
        </div>
        <div className='colors'>
            <div className='yellow'></div>
            <div className='purple'></div>
        </div>
    </header>

    <section className='author-one'>
        <h1>My Posts</h1>
        {posts.map((post) => (
        <div 
          key={post.p_id} 
          className='post'
        >
          <img 
            src={post.p_img ? getImageUrl(post.p_img) : neone} 
            alt={post.p_name}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = neone;
            }}
          />
          <div>
            <h2>{post.p_theme}</h2>
            <h1>{post.p_name}</h1>
            <p>{post.p_description}</p>
          </div>
        </div>
      ))}
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

export default Author