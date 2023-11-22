import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";


function Navbar() {
  const [menu, setMenu] = useState("shop");
  const [underline, setUnderline] = useState(false);
  const {getTotalCartItems} = React.useContext(ShopContext);

  function handleShop() {
    setMenu("shop");
    setUnderline(true);
  }
  function handleAbout() {
    setMenu("about");
    setUnderline(true);
  }
  function handleContact() {
    setMenu("contact");
    setUnderline(true);
  }
  function handleLogin() {
    setMenu("login");
    setUnderline(true);
  }

  function handleRegister() {
    setMenu("register");
    setUnderline(true);
  }

  function handleOut() {
    setUnderline(false);
  }

  return (
    <div className="navbar">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="nav-logo">
          <img src={logo} alt="logo" />
          <p>HeavenlyCrumb</p>
        </div>
      </Link>

      <ul className="nav-menu">
        <li onClick={handleShop}>
          <Link to="/shop" style={{ textDecoration: "none" }}>
            SHOP
          </Link>
          {(menu === "shop") && <hr />}
        </li>
        <li onClick={handleAbout}><a href="/#about" style={{textDecoration:"none"}}>ABOUT</a>{menu === "about" && <hr />}</li>
        <li onClick={handleContact}><Link to="/contact" style={{textDecoration:"none"}}>CONTACT</Link>{menu === "contact" && <hr />}</li>
        <li onClick={handleLogin}>
          <Link to="/login" style={{ textDecoration: "none" }}>
            LOGIN
          </Link>
          {menu === "login" && <hr />}
        </li>
        <li onClick={handleRegister}>
          <Link to="/register" style={{ textDecoration: "none" }}>
            REGISTER
          </Link>
          {menu === "register" && <hr />}
        </li>
      </ul>
      <div className="nav-cart">
        <Link to="/cart" style={{ textDecoration: "none" }}>
          <img src={cart_icon} alt="cart" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
}

export default Navbar;