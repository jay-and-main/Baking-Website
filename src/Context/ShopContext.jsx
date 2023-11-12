import React from "react";
import cakes from "../Components/Assets/cakedata.js";
import cupcakes from "../Components/Assets/cupCakedata.js";
import donuts from "../Components/Assets/donutdata.js";

const allProducts = [...cakes, ...cupcakes, ...donuts];

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < allProducts.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

export const ShopContext = React.createContext(null);

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = React.useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => {
      return { ...prev, [itemId]: prev[itemId] + 1 };
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      return { ...prev, [itemId]: prev[itemId] - 1 };
    });
  };

  const getTotalCartAmount = () =>{
    let totalAmount = 0;
    for (const item in cartItems) {
        if (cartItems[item]>0){
            let itemInfo = allProducts.find((product)=>product.id===Number(item));
            totalAmount += itemInfo.price*cartItems[item];
        }
    }
    return totalAmount;
  }

  const getTotalCartItems = () =>{
    let totalItems = 0;
    for (const item in cartItems) {
        if (cartItems[item]>0){
            totalItems += cartItems[item];
        }
    }
    return totalItems;
  }

  const contextValue = {getTotalCartItems,getTotalCartAmount,allProducts, cartItems, addToCart, removeFromCart };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
