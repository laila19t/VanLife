import React from 'react'
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">#VANLIFE</Link>
        <div className="nav-links">
          <Link to="/about">About</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    
    </BrowserRouter>
  )
}



 
