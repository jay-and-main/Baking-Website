import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../CSS/LoginSignup.css";

function Register() {
  const [buttonColor, setButtonColor] = useState(false);

  function handleOver() {
    setButtonColor(true);
  }

  function handleOut() {
    setButtonColor(false);
  }

  return (
    <div>
      <div className="loginsignup">
        <div className="loginsignup-container">
          <h1>Register</h1>
          <div className="loginsignup-fields">
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email Address" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
          </div>
          <button
            onMouseOver={handleOver}
            onMouseOut={handleOut}
            style={{ background: buttonColor ? "#2a74eb" : "#f72d66" }}
          >
            Register
          </button>
          <p className="loginsignup-login">
            Already have an account?{" "}
            <Link to="/login" style={{ textDecoration: "none" }}>
              <span>Login here</span>
            </Link>
          </p>
          <div className="loginsignup-agree">
            <input type="checkbox" name="" id="" />
            <p>By registering, I agree to the terms of use & privacy policy</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
