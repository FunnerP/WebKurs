import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './font.css'
import Nav from './modules/navs/Nav.jsx'
import Footer from './modules/navs/Footer.jsx'
import Home from './modules/home/Home.jsx'
import Blog from './modules/blog/Blog.jsx'
import About from './modules/about/About.jsx'
import Contact from './modules/contact/Contact.jsx'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
