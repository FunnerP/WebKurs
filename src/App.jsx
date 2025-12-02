import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './modules/Home.jsx';
import Blog from './modules/Blog.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/blog" element={<Blog/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App