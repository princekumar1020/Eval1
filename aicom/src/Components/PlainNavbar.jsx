import React from 'react'
import { Link } from 'react-router-dom'
const PlainNavbar = () => {
  return (
    <>
    <header className="header-container" style={{zIndex:"300"}} >
      <div className="header-content">
      <Link to='/'>
          <img id="header-logo" src="./public/logo-no-background.png" alt="Logo" />
        </Link></div>
    </header>
    </>
  )
}

export default PlainNavbar