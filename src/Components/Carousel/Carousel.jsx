import React, { useState } from "react";
import { Link } from "react-router-dom";

function Carousel() {
  const CarouselStyle = {
    width: "100%",
    height: "45rem",
  };

  const [buttonColor, setButtonColor] = useState(false);

  function handleOver() {
    setButtonColor(true);
  }

  function handleOut() {
    setButtonColor(false);
  }

  return (
    <div>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" style={CarouselStyle}>
            <img
              src="https://images.unsplash.com/photo-1615735486329-c61cd40bfcc6?w=500&auto=format&fit=crop&q=100&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGNha2V8ZW58MHwwfDB8fHww"
              className="d-block w-100"
            />
            <div class="carousel-caption d-none d-md-block">
              <Link to="/shop" style={{textDecoration:"none"}}>
                <button
                  onMouseOver={handleOver}
                  onMouseOut={handleOut}
                  type="button"
                  class="btn btn-primary btn-lg"
                  style={{
                    backgroundColor: buttonColor ? "#2a74eb" : "#f72d66",
                    border: 0,
                    padding: "20px",
                  }}
                >
                  Go to Shop
                </button>
              </Link>
            </div>
          </div>
          <div className="carousel-item" style={CarouselStyle}>
            <img
              src="https://images.unsplash.com/photo-1607478900766-efe13248b125?w=200&auto=format&fit=crop&q=100&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3VwY2FrZXxlbnwwfDB8MHx8fDA%3D"
              className="d-block w-100"
            />
          </div>
          <div className="carousel-item" style={CarouselStyle}>
            <img
              src="https://images.unsplash.com/photo-1618411640026-24e40dcde1ab?w=500&auto=format&fit=crop&q=100&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZG9udXR8ZW58MHwwfDB8fHww"
              className="d-block w-100"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
