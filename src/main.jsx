import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './font.css'
import Home from './modules/Home.jsx'
import Blog from './modules/Blog.jsx'
import About from './modules/About.jsx'
import Contact from './modules/Contact.jsx'
import Privacy from './modules/Privacy.jsx'
import Post from './modules/Post.jsx'
import Category from './modules/category.jsx'
import Author from './modules/Author.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/privacy" element={<Privacy/>} />
        <Route path="/post" element={<Post/>} />
        <Route path="/category" element={<Category/>} />
        <Route path="/author" element={<Author/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
