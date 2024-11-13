import React from 'react';

const Map = () => {
  return (
    <div className="map-box">
      <h1>Find the best Wi-Fi plan for you</h1>
      <div className="map">
        <iframe
          className="i-frame"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3437.174971799972!2d76.65720287466726!3d30.51609109607209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fc32344a6e2d7%3A0x81b346dee91799ca!2sChitkara%20University!5e0!3m2!1sen!2sin!4v1729702105909!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
