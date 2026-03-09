import { useState, useEffect } from 'react'
import { postsAPI, authorsAPI, getImageUrl } from '../api';
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
  {posts.slice(-3).map((post) => (
    <div 
      key={post.p_id} 
      onClick={(e) => {
        e.preventDefault();
        navigate(`/post/${post.p_id}`);
      }}
      style={{ cursor: 'pointer' }}
    >
      <img 
        src={post.p_img ? getImageUrl(post.p_img) : one} 
        alt={post.p_name}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = one;
        }}
      />
      <p>
        By <span>{getAuthorName(post)}</span> |{' '}
        {new Date(post.createdAt || Date.now()).toLocaleDateString('en-US', { 
          month: 'short', 
          day: 'numeric', 
          year: 'numeric' 
        }).replace(',', '')}
      </p>
      <h2>{post.p_name || 'A UX Case Study Creating a Studious Environment for Students:'}</h2>
      <p>{post.p_theme || post.p_type || 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'}</p>
    </div>
  ))}
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