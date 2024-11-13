import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Components/Navbar'
import './Landing.css'
import Spacer from './Components/Spacer'
import UnderBlueLine from './Components/UnderBlueLine'
import Slider from './Components/Slider'
import Map from './Components/Map'
import Footer from './Components/Footer'



function Landing() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Spacer/>
     <UnderBlueLine/>
     <Slider/>
     <Map/>
     <Footer/>
    </>
  )
}

export default Landing
