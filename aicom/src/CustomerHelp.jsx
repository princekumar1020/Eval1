import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Components/Navbar'
import './Landing.css'
import './CustomerHelp.css'
import ContactUs from './Components/ContactUs'

import ContactForm from './Components/ContactForm'
import MapSection from './Components/Map2'
import Footer2 from './Components/Footer2'



function CustomerHelp() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <section className = "contact-section">
     <ContactUs/>
     <ContactForm/>
     <MapSection/>
     <Footer2/>


    </section>
    </>
  )
}

export default CustomerHelp
