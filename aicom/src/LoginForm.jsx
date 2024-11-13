import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Components/Navbar'
import './Landing.css'

import Footer from './Components/Footer'
import Login from './Components/Login.Jsx'
import './LoginForm.css'



function LoginForm() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
    <Login/>
     <Footer/>
    </>
  )
}

export default LoginForm
