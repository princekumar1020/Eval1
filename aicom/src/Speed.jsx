import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Components/Navbar'
import './Landing.css'

import Ispeed from './Components/Ispeed'
import './Recharge.css'
import Footer from './Components/Footer'
// import PlainNavbar from './Components/PlainNavbar'




function Speed() {
    return (
      <div className="internet">
        {/* <PlainNavbar /> */}
        <Navbar/>
        <Ispeed />
        <Footer/>
      </div>
    );
  }
  

export default Speed
