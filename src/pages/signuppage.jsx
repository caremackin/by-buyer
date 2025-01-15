import React from "react";
import "./signuppage.css";
import Navbar from "../components/navbar";
import myImage from "../assets/house_for_sale2.jpg";

const Signuppage = () => {
  return (
  <div>
        <Navbar />
        <main className="signup-main">
          <div className="signup-container">
            <p className="signin-title">Sign In</p>
            <div className="container">
              <input type="email" placeholder="Email" className="input" />
              <input type="password" placeholder="Password" className="input" />
              <button className="login-button">Login</button>
              <div className="register-container">
                <span>Don't have an account?</span>
                <button className="register-button">Register</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  };

export default Signuppage;