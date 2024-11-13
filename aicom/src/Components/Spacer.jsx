import React, { useEffect, useRef } from 'react';

// Spacer component
const Spacer = () => {
  return (
    <div className="spacer">
      <div className="content">
        <h1>AiCom is all that you need!</h1>
        <h3>Get Customizable plans for Mobile, DTH, Wi-Fi and 16+ OTTs</h3>
      </div>
      <img src="./public/asset 12.3x.jpg" alt="" />
    </div>
  );
};

// Recharge component
const Recharge = () => {
  // Refs for options and input
  const prepaidRef = useRef(null);
  const postpaidRef = useRef(null);
  const dthRef = useRef(null);
  const wifiRef = useRef(null);
  const noteRef = useRef(null);

  // useEffect to handle event listeners
  useEffect(() => {
    // Function to update placeholder
    const updatePlaceholder = (text) => {
      if (noteRef.current) {
        noteRef.current.setAttribute("placeholder", text);
      }
    };

    // Event listeners
    const handlePrepaidClick = (e) => {
      e.preventDefault();
      updatePlaceholder("Prepaid");
    };
    const handlePostpaidClick = (e) => {
      e.preventDefault();
      updatePlaceholder("Postpaid");
    };
    const handleDthClick = (e) => {
      e.preventDefault();
      updatePlaceholder("DTH");
    };
    const handleWifiClick = (e) => {
      e.preventDefault();
      updatePlaceholder("Wi-Fi");
    };

    // Adding event listeners
    if (prepaidRef.current) prepaidRef.current.addEventListener("click", handlePrepaidClick);
    if (postpaidRef.current) postpaidRef.current.addEventListener("click", handlePostpaidClick);
    if (dthRef.current) dthRef.current.addEventListener("click", handleDthClick);
    if (wifiRef.current) wifiRef.current.addEventListener("click", handleWifiClick);

    // Cleanup function to remove event listeners
    return () => {
      if (prepaidRef.current) prepaidRef.current.removeEventListener("click", handlePrepaidClick);
      if (postpaidRef.current) postpaidRef.current.removeEventListener("click", handlePostpaidClick);
      if (dthRef.current) dthRef.current.removeEventListener("click", handleDthClick);
      if (wifiRef.current) wifiRef.current.removeEventListener("click", handleWifiClick);
    };
  }, []); // Empty dependency array ensures this effect runs once when the component mounts

  return (
    <div className="recharge">
      <div className="container">
        <span className="head flex">Recharge or pay bills</span>
        <div className="options">
          <ul type="none" className="flex">
            <li><a href="#" ref={prepaidRef}><img src="./public/asset 33.svg" alt="" />Prepaid</a></li>
          
            <li><a href="#" ref={dthRef}><img src="./public/asset 30.svg" alt="" />&nbsp;DTH</a></li>
            <li><a href="#" ref={wifiRef}><img src="./public/asset 31.svg" alt="" />&nbsp;Wi-Fi</a></li>
          </ul>
        </div>
        <div className="container-in">
          <input ref={noteRef} type="number" maxLength="10" placeholder="Enter mobile number" />
          <button><span>RECHARGE</span></button>
        </div>
      </div>
    </div>
  );
};

// Main App component
const App = () => {
  return (
    <div>
      <Spacer />
      <Recharge />
    </div>
  );
};

export default App;
