import React, { useState } from 'react';

const Mobile = () => {
  const [mobileNo, setMobileNo] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form from submitting the default way

    // Define the regex for valid mobile number
    const regex = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;

    // Validate the mobile number
    if (regex.test(mobileNo)) {
      // Redirect to 'prepaid.html' if valid
      window.location.href = '/recharge';
    } else {
      // Show error if mobile number is invalid
      setError("Please enter a valid mobile number in the format xxx-xxx-xxxx.");
    }
  };

  return (
    <div>
      {/* Main content */}
      <div className="main-content-recharge">
        <div className="main-content-left">
          <div className="content-left">
            <span>
              <h3>Recharge</h3>
              <p id="left-p">Enter your Details to find the best prepaid plan</p>
            </span>

            <form id="mobileForm" onSubmit={handleSubmit}>
              <span>
                <input
                  type="tel"
                  placeholder="xxx-xxx-xxxx"
                  value={mobileNo}
                  onChange={(e) => setMobileNo(e.target.value)} // Update state on input change
                  required
                />
              </span>
              <button type="submit" id="continue">Continue</button>
            </form>

            {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
          </div>
        </div>

        <div className="main-content-right">
          <img src="./public/bg.png" alt="background" />
        </div>
      </div>
    </div>
  );
};

export default Mobile;
