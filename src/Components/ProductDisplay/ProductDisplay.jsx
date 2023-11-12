import React from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

function ProductDisplay(props) {
  const { product } = props;
  const {addToCart} = React.useContext(ShopContext);

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img">
          <img
            className="productdisplay-main-img"
            src={product.imagery}
            alt=""
          />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
        </div>
        <p>(122)</p>
        <div className="productdisplay-right-prices">₹{product.price}</div>
        <div className="productdisplay-right-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere
          lacinia turpis, a congue nisi ornare quis. Nam suscipit enim in lacus
          vestibulum, ut laoreet odio dictum.
        </div>
        {/* <div className="customisable-options"></div> */}
        <button onClick={()=>{addToCart(product.id)}}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductDisplay;
