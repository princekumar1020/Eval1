import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  // State to manage the visibility of the menu and screen width
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // assuming 768px is the breakpoint

  // Toggle menu function
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Update isMobile state based on window size
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
    if (window.innerWidth > 768) {
      setMenuOpen(false); // Close the menu when transitioning to larger screens
    }
  };

  // Set up the resize event listener
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <nav className="top">
        <div className="container top-nav flex">
          <div className="top-left">
            <ul className="flex" style={{ listStyleType: 'none' }}>
              <li style={{ borderTop: '2px solid #1b53da' }}>
                <a href="#" style={{ color: '#1b53da' }}>
                  INDIVIDUAL
                </a>
              </li>
              <li>
                <a href="#">BUSINESS</a>
              </li>
              <li>
                <a href="#">INVESTOR</a>
              </li>
            </ul>
          </div>
          <div className="top-right flex">
            <div className="explore flex">
              <img src="./public/asset 15.svg" alt="inner img" />
              <span>Explore AiCom</span>
            </div>
            <i
              className="fa-solid fa-circle-chevron-down fa-flip"
              style={{ color: '#1b53da' }}
            ></i>
          </div>
        </div>
      </nav>
      <hr id="line-main" />

      <navbar>
        <div className="logo">
          
          <Link to="/"><img className="logoimg" src="./public/logo-no-background.png" alt="company-logo" /></Link>
        </div>

        {/* Show menu on larger screens, toggle on smaller screens */}
        <ul
          id="menuList"
          style={{
            display: isMobile ? (menuOpen ? 'block' : 'none') : 'flex', // Menu toggles on mobile and is always shown on larger screens
            transition: 'all 0.5s ease',
             // Menu items stack vertically on mobile
          }}
        >
          <li>
            <NavLink to="/recharge">Plans</NavLink>
          </li>
          <li>
            <NavLink to="/mob">Recharge</NavLink>
          </li>
          <li>
            <NavLink to="/speed">Net Speed</NavLink>
          </li>
          <li>
            <NavLink to="/customerhelp">Help Desk</NavLink>
          </li>
          <li>
            <NavLink to="/loginform">Login</NavLink>
          </li>
        </ul>

        {/* Menu icon (Hamburger) */}
        {isMobile && (
          <div className="menu-icon">
            <i
              className="fa-solid fa-bars"
              onClick={toggleMenu}
              style={{ color: 'grey', fontSize: '20px' }}
            ></i>
          </div>
        )}
      </navbar>
    </>
  );
};

export default Navbar;
