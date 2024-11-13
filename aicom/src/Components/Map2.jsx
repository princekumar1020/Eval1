import React from 'react';

const FormAndMap = () => {
  return (
    <div>
      {/* Google Maps Section */}
      <div className="map-Help">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30767694.11883084!2d60.92944751922805!3d19.72019948337311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1729831311541!5m2!1sen!2sin"
          width="1250"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default FormAndMap;
