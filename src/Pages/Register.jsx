import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../CSS/LoginSignup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [buttonColor, setButtonColor] = useState(false);
  const navigate = useNavigate();

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(user);
    const { username, email, password, confirmPassword } = user;
    if (username && email && password && confirmPassword) {
      if (password === confirmPassword) {
        await axios.post("http://localhost:5001/register", user).then((res) => {
          alert(res.data.message);
          if (res.data.message === "User registered successfully") {
            navigate("/");
          }
        })
        .catch((err)=>{
          console.error(err);
        });
      } else {
        alert("Passwords don't match");
      }
    } else {
      alert("Please fill all the fields");
    }
  };

  return (
    <div>
      <div className="loginsignup">
        <div className="loginsignup-container">
          <h1>Register</h1>
          <form onSubmit={handleSubmit}>
            <div className="loginsignup-fields">
              <input
                type="text"
                placeholder="Username"
                name="username"
                value={user.username}
                onChange={handleChange}
              />
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
              <input
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={user.confirmPassword}
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
              <p>
                By registering, I agree to the terms of use & privacy policy
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
