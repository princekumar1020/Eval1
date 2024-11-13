import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './Recharge.css'


import RechargeLeft from './Components/RechargeLeft'
import RechargeRight from './Components/RechargeRight'
import PlainNavbar from './Components/PlainNavbar'




function Landing() {
  const [count, setCount] = useState(0)

  return (
    
    <div>
    <PlainNavbar/>

    <div className="main-content">
      {/* Left and Right Containers */}
      <RechargeLeft />
      <RechargeRight />
    </div>
  </div>
  )
}

export default Landing
