import React from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

function CartItems() {
  const { getTotalCartAmount, allProducts, cartItems, removeFromCart, addToCart } =
    React.useContext(ShopContext);

  const handleIncrement = (itemId) => {
    addToCart(itemId);
  };

  const handleDecrement = (itemId) => {
    removeFromCart(itemId);
  };

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {allProducts.map((item) => {
        if (cartItems[item.id] > 0) {
          return (
            <div key={item.id}>
              <div className="cartitems-format cartitems-format-main">
                <img
                  src={item.imagery}
                  alt=""
                  className="carticon-product-icon"
                />
                <p>{item.name}</p>
                <p>₹ {item.price}</p>
                <div className="quantity-controls">
                  <button
                    className="cartitems-quantity"
                    onClick={() => handleDecrement(item.id)}
                  >
                    -
                  </button>
                  <button className="cartitems-quantity">
                    {cartItems[item.id]}
                  </button>
                  <button
                    className="cartitems-quantity"
                    onClick={() => handleIncrement(item.id)}
                  >
                    +
                  </button>
                </div>
                <p>₹ {item.price * cartItems[item.id]}</p>
                <img
                  className="cartitems-remove-icon"
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(item.id);
                  }}
                  alt=""
                />
              </div>
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>₹ {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Total</p>
              <p>₹ {getTotalCartAmount()}</p>
            </div>
          </div>
          <button onClick={()=>{alert("Paid successfully!");}}>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
