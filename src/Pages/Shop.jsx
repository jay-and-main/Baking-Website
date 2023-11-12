import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../Components/Card/Card";
import cakes from "../Components/Assets/cakedata";
import cupcakes from "../Components/Assets/cupCakedata";
import donuts from "../Components/Assets/donutdata";
import "../CSS/Shop.css";

function Shop() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <div className="slick-arrow slick-next" />,
    prevArrow: <div className="slick-arrow slick-prev" />,
  };

  const renderCards = (items) => {
    return items.map((item) => (
      <Card id={item.id} key={item.key} image={item.imagery} name={item.name} price={item.price} />
    ));
  };

  return (
    <div className="container">
      <div className="shop" style={{marginLeft:"20px",marginTop:"20px"}}>
        <div className="shop-heading">
          <h1>Shop</h1>
        </div>
        <div className="shop-cards">
          <h2>Cakes</h2>
          <Slider {...settings}>{renderCards(cakes)}</Slider>
        </div>
        <div className="shop-cards">
          <h2>Cupcakes</h2>
          <Slider {...settings}>{renderCards(cupcakes)}</Slider>
        </div>
        <div className="shop-cards">
          <h2>Donuts</h2>
          <Slider {...settings}>{renderCards(donuts)}</Slider>
        </div>
      </div>
    </div>
  );
}

export default Shop;
