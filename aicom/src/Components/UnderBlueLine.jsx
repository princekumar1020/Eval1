import React from 'react';

const UnderBlueLine = () => {
  return (
    <>
      {/* Blue Strip */}
      <div className="blue-strip">
        <span id="blue-strip-content">
          Free 2 GB data coupons on select recharges via Thanks app
        </span>
        <button className="blue-btn">Getapp</button>
      </div>

      {/* Buy a New Connection */}
      <div className="connection">
        <span className="head-connection">Buy a new connection</span>
        <div className="varities">
          <ul>
            <li>
              <a href="#">
                <img src="./public/asset 33.svg" alt="Prepaid" />
              </a>
              <h6>Prepaid</h6>
            </li>
            <li>
              <a href="#">
                <img src="./public/asset 29.svg" alt="Postpaid" />
              </a>
              <h6>Postpaid</h6>
            </li>
            <li>
              <a href="#">
                <img src="./public/asset 30.svg" alt="DTH" />
              </a>
              <h6 className="h6-p">DTH</h6>
            </li>
            <li>
              <a href="#">
                <img src="./public/asset 31.svg" alt="Wi-Fi" />
              </a>
              <h6 className="h6-p">Wi-Fi</h6>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default UnderBlueLine;
