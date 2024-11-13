// RechargeRight.jsx
import React, { useState } from 'react';

const RechargeRight = () => {
  const [net, setNet] = useState(1);
  const [validity, setValidity] = useState(1);
  const [amount, setAmount] = useState(0);

  // Handle input changes for customizable plans
  const handleNetChange = (e) => setNet(e.target.value);
  const handleValidityChange = (e) => setValidity(e.target.value);

  // Calculate amount for customizable plans
  const calculateAmount = () => {
    let calculatedAmount = net == 1 ? net * 15 * validity : net * 25 * validity;
    setAmount(calculatedAmount);
  };

  // Handle payment
  const handlePayment = (e) => {
    e.preventDefault();
    if (amount === 0) {
      alert('Please fill data and days');
    } else {
      alert('Transaction successful!');
    }
  };

  return (
    <div className="right-container">
      <div className="right-container-nav">
        <div className="right-nav">
          <div className="right-nav-tab active">
            <a href="">Data</a>
          </div>
          <div className="right-nav-tab active">
            <a href="#Truely-Unlimited">Truly Unlimited</a>
          </div>
          <div className="right-nav-tab active">
            <a href="">Talktime (top up voucher)</a>
          </div>
          <div className="right-nav-tab active">
            <a href="">International Roaming</a>
          </div>
          <div className="right-nav-tab active">
            <a href="">Cricket packs</a>
          </div>
          <div className="right-nav-tab active">
            <a href="">Vouchers</a>
          </div>
          <div className="right-nav-tab active">
            <a href="#Coustomizable">Customizable Plans</a>
          </div>
        </div>
      </div>

      <div className="container-card">
        {/* Data Plans Section */}
        <section id="Data">
          <div className="card-head">Data</div>
          {[14, 49, 99].map((price, index) => (
            <div className="card" key={index}>
              <div className="card-left">
                <h1>&#8377;{price}</h1>
                <span>UNLIMITED TRUE 5G DATA</span>
                <p>
                  <a href="#" style={{ color: '#007bff', textDecoration: 'none' }}>
                    View details
                  </a>
                </p>
              </div>
              <div className="details">
                <span>VALIDITY</span>
                <p>Existing Plan</p>
                <span>DATA</span>
                <p>{price === 14 ? '1GB' : price === 49 ? '5GB' : '10GB'}</p>
              </div>
              <button className="card-button">Pay</button>
            </div>
          ))}
        </section>

        {/* Truly Unlimited Plans Section */}
        <section id="Truely-Unlimited">
          <div className="card-head">Truly Unlimited</div>
          {[3999, 1599, 799].map((price, index) => (
            <div className="card" key={index}>
              <div className="card-left">
                <h1>&#8377;{price}</h1>
                <span>UNLIMITED TRUE 5G DATA</span>
                <p>
                  <a href="#" style={{ color: '#007bff', textDecoration: 'none' }}>
                    View details
                  </a>
                </p>
              </div>
              <div className="details">
                <span>VALIDITY</span>
                <p>{price === 3999 ? '365 Days' : price === 1599 ? '180 Days' : '84 Days'}</p>
                <span>DATA</span>
                <p>{price === 3999 ? '2GB / Day' : '1.5GB / Day'}</p>
                <span>SUBSCRIPTIONS</span>
                <div className="subscriptions">
                  <img
                    src="https://img.icons8.com/color/48/000000/film-reel.png"
                    alt="Subscription 1"
                  />
                  <img
                    src="https://img.icons8.com/color/48/000000/video.png"
                    alt="Subscription 2"
                  />
                </div>
              </div>
              <button className="card-button">Pay</button>
            </div>
          ))}
        </section>

        {/* Talktime Plans Section */}
        <section id="Talktime">
          <div className="card-head">Talktime (top-up voucher)</div>
          {[1000, 600, 100].map((price, index) => (
            <div className="card" key={index}>
              <div className="card-left">
                <h1>&#8377;{price}</h1>
                <p>
                  <a href="#" style={{ color: '#007bff', textDecoration: 'none' }}>
                    View details
                  </a>
                </p>
              </div>
              <div className="details">
                <span>Talktime</span>
                <p>₹{price === 1000 ? '4237.7' : price === 600 ? '420' : '67.8'}</p>
                <span>VALIDITY</span>
                <p>N/A</p>
              </div>
              <button className="card-button">Pay</button>
            </div>
          ))}
        </section>

        {/* Customizable Plans Section */}
        <section id="Customizable">
          <div className="card-head">By Your Choice</div>
          <form>
            <div className="card" id="by-choice">
              <div className="card-left">
                <div className="form-group">
                  <label htmlFor="net">1-2GB/Day (Talktime Unlimited)</label>
                  <input
                    type="number"
                    className="form-control input"
                    style={{ margin: '5px 0', width: '100px' ,padding:'10px'  }}
                    id="net"
                    min="1"
                    max="2"
                    value={net}
                    onChange={handleNetChange}
                  />
                  <label htmlFor="Validity">Validity</label>
                  <input
                    type="number"
                    className="form-control input"
                    style={{ margin: '8px 0', width: '100px', padding:'10px' }}
                    id="Validity"
                    min="1"
                    max="20"
                    value={validity}
                    onChange={handleValidityChange}
                  />
                </div>
              </div>

              <div className="details">
                <div className="form-group">
                  <label htmlFor="Amount">Amount to pay</label>
                  <p
                    className="form-control input"
                    style={{
                      margin: '8px 0',
                      width: '100px',
                      height: '40px',
                      
                    }}
                    id="Amount"
                  >
                    {amount}
                  </p>
                </div>

                <button
                  type="button"
                  className="card-button"
                  id="checkamount"
                  onClick={calculateAmount}
                >
                  Total Amount
                </button>
              </div>

              <button
                className="card-button"
                type="submit"
                id="payrupee"
                onClick={handlePayment}
              >
                Pay
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default RechargeRight;
