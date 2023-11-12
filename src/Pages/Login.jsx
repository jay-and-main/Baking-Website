import React, {useState} from "react";
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
        <div className="loginsignup-container login-container">
          <h1>Login</h1>
          <div className="loginsignup-fields">
            <input type="email" placeholder="Email Address" />
            <input type="password" placeholder="Password" />
          </div>
          <button
            onMouseOver={handleOver}
            onMouseOut={handleOut}
            style={{ background: buttonColor ? "#2a74eb" : "#f72d66" }}
          >
            Login
          </button>
          <p className="loginsignup-register">
            Don't have an account?{" "}
            <Link to="/register" style={{ textDecoration: "none" }}>
              <span>Register here</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
