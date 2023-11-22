import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../CSS/LoginSignup.css";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const [buttonColor, setButtonColor] = useState(false);

  function handleOver() {
    setButtonColor(true);
  }

  function handleOut() {
    setButtonColor(false);
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUser((prevUser) => {
      return {
        ...prevUser,
        [name]: value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5001/login", user)
      .then((res) => {alert(res.data.message)
      if (res.data.message === "Login Successful") {
        navigate("/");
      }})
      .catch((err) => alert(err.message));
  };
  return (
    <div>
      <div className="loginsignup">
        <div className="loginsignup-container login-container">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="loginsignup-fields">
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={user.password}
                onChange={handleChange}
              />
            </div>
            <button
              onMouseOver={handleOver}
              onMouseOut={handleOut}
              style={{
                background: buttonColor ? "#2a74eb" : "#f72d66",
                transition: "background 0.25s",
              }}
            >
              Login
            </button>
            <p className="loginsignup-register">
              Don't have an account?{" "}
              <Link to="/register" style={{ textDecoration: "none" }}>
                <span>Register here</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
