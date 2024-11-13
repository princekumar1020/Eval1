import React from 'react';

const Slider = () => {
  return (
    <div className="card-slider">
      {/* Card Slider Header */}
      <div className="card-slider-header">
        <h1>Recommended for you</h1>
      </div>

      {/* Bootstrap Carousel */}
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          {/* First Carousel Item */}
          <div className="carousel-item active">
            <div className="card">
              <div className="image-wrapper">
                <img src="./public/asset 2.jpeg" alt="Fiber" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Fiber</h5>
                <p className="card-text">
                  Enjoy unlimited wi-fi at ₹999 Up to 200 Mbps speed, unlimited calls & OTT apps
                </p>
                <a href="#" className="btn btn-primary">
                  Learn more
                </a>
              </div>
            </div>
          </div>

          {/* Second Carousel Item */}
          <div className="carousel-item">
            <div className="card">
              <div className="image-wrapper">
                <img src="./public/asset 3.webp" alt="Postpaid" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Postpaid</h5>
                <p className="card-text">
                  Get a superior network at just ₹549 75 GB data with no daily limit & top OTT apps
                </p>
                <a href="#" className="btn btn-primary">
                  Buy Now
                </a>
              </div>
            </div>
          </div>

          {/* Third Carousel Item */}
          <div className="carousel-item">
            <div className="card">
              <div className="image-wrapper">
                <img src="./public/asset 4.jpeg" alt="Prepaid" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Prepaid</h5>
                <p className="card-text">
                  Enjoy high-speed, seamless network Home delivery of SIM & Quick activation
                </p>
                <a href="#" className="btn btn-primary">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
