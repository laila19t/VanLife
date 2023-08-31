import React from 'react'
import "./server"
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans'
import VansDetails from './pages/VanDetails'
import Layout from './components/Layout'
import Dashboard from './pages/hostPages/dashboard'
import Income from './pages/hostPages/Income'
import Reviews from './pages/hostPages/Reviews'
import HostLayout from './components/HostLayout'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="about" element={<About/>} />
          <Route path="vans" element={<Vans/>} />
          <Route path="vans/:id" element={<VansDetails/>} />
          <Route path="host" element={<HostLayout/>}>
            <Route index element={<Dashboard/>} />
            <Route path="income" element={<Income/>} />
            <Route path="reviews" element={<Reviews/>} />
          </Route>
        </Route>
       </Routes>
    
    </BrowserRouter>
  )
}



 
