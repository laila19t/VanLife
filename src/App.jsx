import React,{createContext,useState} from 'react'
import "./server"
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans'
import VansDetails from './pages/VanDetails'
import Layout from './components/Layout'
import Dashboard from './pages/hostPages/Dashboard'
import Income from './pages/hostPages/Income'
import Reviews from './pages/hostPages/Reviews'
import HostLayout from './components/HostLayout'
import HostVans from './pages/hostPages/HostVans'
import HostVanDetails from './pages/hostPages/HostVanDetails'
import HostVanInfo from './pages/hostPages/HostVanInfo'
import HostVanPricing from './pages/hostPages/HostVanPricing'
import HostVanPhotos from './pages/hostPages/HostVanPhotos'
import NotFound from './pages/NotFound'
import Login from './pages/Login'
import Authintication from './components/Authintication'
import Signup from './pages/Signup'


export const userAuthContext = createContext()

export default function App() {
  const [isLogged,setIsLogged] = useState(localStorage.getItem('loggedin'))
  return (
<userAuthContext.Provider value={[isLogged,setIsLogged]}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="about" element={<About/>} />
          <Route path="vans" element={<Vans/>} />
          <Route path="vans/:id" element={<VansDetails/>} />
          <Route path='login' element={<Login/>}/>
          <Route path='signup' element={<Signup/>}/>
          <Route element={<Authintication/>}>
            <Route path="host" element={<HostLayout/>}>
              <Route index element={<Dashboard/>} />
              <Route path="income" element={<Income/>} />
              <Route path="reviews" element={<Reviews/>} />
              <Route path="vans" element={<HostVans/>} />
              <Route path="vans/:id" element={<HostVanDetails/>}>
                <Route index element={<HostVanInfo/>}/>
                <Route path="pricing" element={<HostVanPricing/>} />
                <Route path="photos" element={<HostVanPhotos/>} />
              </Route>
            </Route>
          </Route>
          <Route path='*' element={<NotFound/>}/>
        </Route>
       </Routes>
    
    </BrowserRouter>
    </userAuthContext.Provider>
  )
}



 
