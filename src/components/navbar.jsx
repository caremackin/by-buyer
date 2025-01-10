import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <div className="brand-logo">App Name</div>
      <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
        <NavLink to="/about">About</NavLink>
          </li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
        <li>
        <NavLink to="/Signup">Account</NavLink>
          </li>
      </ul>
      <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? "✖" : "☰"}
      </button>
    </nav>
  );
};

export default Navbar;
