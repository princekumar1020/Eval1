import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Components/Navbar'
import './Landing.css'
import Mobile from './Components/Mobile'
import Footer from './Components/Footer'

import './Mobile-number.css'

function Mob() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Mobile/>
     <Footer/>
    </>
  )
}

export default Mob
