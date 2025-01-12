import React from "react";
import "./homepage.css";
import Navbar from "../components/navbar";
import myImage from "../assets/house_4.png";

const Homepage = () => {
  return (
    <div>
    <Navbar />
    <main className="main-content">
      <img className="image" src={myImage} alt="Description of Image" />
    </main>
  </div>
  );
};

export default Homepage;
