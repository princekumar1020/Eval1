import React from 'react';

const ContactForm = () => {
  return (
    <div>
        {/* Contact Information Section */}
      <div className="contact-body">
        <div className="contact-info">
          <div>
            <span><i className="fas fa-mobile-alt"></i></span>
            <span>Phone No.</span>
            <span className="text">+91-9*92-2*92*-2</span>
          </div>
          <div>
            <span><i className="fas fa-envelope-open"></i></span>
            <span>E-mail</span>
            <span className="text">AICom@gmail.com</span>
          </div>
          <div>
            <span><i className="fas fa-map-marker-alt"></i></span>
            <span>Address</span>
            <span className="text">Karol Bagh, New-Delhi, India</span>
          </div>
          <div>
            <span><i className="fas fa-clock"></i></span>
            <span>Opening Hours</span>
            <span className="text">Monday - Friday (9:00 AM to 5:00 PM)</span>
          </div>
        </div>
      
      {/* Contact Form Section */}
      <div className="contact-form">
        <form id="dataForm">
          <div>
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
              id="name"
            />
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
            />
          </div>
          <div>
            <input
              type="email"
              className="form-control"
              placeholder="E-mail"
            />
            <input
              type="text"
              className="form-control"
              placeholder="Phone"
            />
          </div>
          <textarea
            rows="5"
            placeholder="Message"
            className="form-control"
          ></textarea>
          <input
            type="submit"
            className="send-btn"
            value="Submit"
            id="submit"
          />
        </form>

        <div>
          <img src="./public/contact-png.png" alt="Contact" />
        </div>
      </div>

      </div>  
    </div>
  );
};

export default ContactForm;
