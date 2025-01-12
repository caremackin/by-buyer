import React from "react";
import "./services.css";
import Navbar from "../components/navbar";
import myImage from "../assets/house_5.jpg";
import MLSForm from "../components/mlsform";

const Services = () => {
  return (
    <div className="main">
    <Navbar />
    <div className="primary-info">
    <div class="services-section">
  <h2>Our Services</h2>
  <p>
    We provide a range of professional real estate services tailored to meet your specific needs. 
    Our offerings are designed to deliver exceptional value at a fraction of the cost of traditional real estate agents, 
    giving you the flexibility and support you require.
  </p>
  <p>  <strong>MLS Listings:</strong> Get your property listed on the Multiple Listing Service (MLS) for maximum visibility. </p>
  <p>  <strong>Comprehensive Marketing:</strong> Enhance your property’s exposure through platforms like Zillow and other popular real estate channels.</p>
  <p>   <strong>Pricing Strategy:</strong> Receive expert guidance on pricing your property competitively based on market trends and data.</p>
  <p>  <strong>Virtual Staging Advice:</strong> Optimize your property’s presentation with our virtual staging recommendations. </p>
  <p><strong>Transaction Management:</strong> Let us handle the complex paperwork and coordination involved in your real estate transaction.</p>
  <p>
    Whether you need basic support or a more hands-on approach, we customize our services to match your goals and budget.
  </p>
</div>
    </div>
    <div class="button-div">
  <button class="btn red-btn">Request MLS Listing</button>
  <button class="btn red-btn">Request Other Service</button>
</div>


    <div className= "comprehesive-marketing">
      <h4>Comprehensive Marketing</h4>
      <p> Why Choose Comprehensive Marketing?
Our Comprehensive Marketing Package is designed for simplicity and efficiency, making it easy for you to showcase your property online while we handle the heavy lifting. With automated tools and scripts, we ensure your property gets maximum exposure without unnecessary complexity, all while being managed by a single dedicated person.

What’s Included in the Package?
MLS Listing Integration: Seamlessly list your property on the MLS for maximum visibility.
Platform Syndication: Automatically post your property to popular real estate platforms like Zillow, Realtor.com, and more.
Targeted Social Media Campaigns: Leverage automation to create and schedule posts that reach your target audience.</p>
<img src={myImage} alt="Description of Image" />
    </div>
  </div>
  );
};

export default Services;
