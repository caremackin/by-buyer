import React, { useState } from "react";
import "./mlsform.css"
import myImage from "../assets/house_3.jpg";

const MLSForm = () => {
  const [formData, setFormData] = useState({
    address: "",
    city: "",
    state: "",
    zipCode: "",
    price: "",
    bedrooms: 0,
    bathrooms: 0,
    squareFootage: "",
    lotSize: "",
    yearBuilt: "",
    parking: "",
    heatingCooling: "",
    propertyType: "",
    features: [],
    description: "",
    images: [],
    videoLinks: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileUpload = (e) => {
    setFormData({ ...formData, images: Array.from(e.target.files) });
  };

  const handleFeatureChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      features: checked
        ? [...prev.features, value]
        : prev.features.filter((feature) => feature !== value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
    // Add API integration or backend submission logic here
  };

  return (
    <>
    <img className="image" src={myImage} alt="Description of Image" />
        <form className = "form" onSubmit={handleSubmit}>
          <h2>Submit a Listing</h2>

          {/* Address */}
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />

          {/* City, State, Zip */}
          <label>City:</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />

          <label>State:</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          />

          <label>Zip Code:</label>
          <input
            type="text"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            required
          />

          {/* Price */}
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />

          {/* Bedrooms and Bathrooms */}
          <label>Bedrooms:</label>
          <input
            type="number"
            name="bedrooms"
            value={formData.bedrooms}
            onChange={handleChange}
            required
          />

          <label>Bathrooms:</label>
          <input
            type="number"
            name="bathrooms"
            value={formData.bathrooms}
            onChange={handleChange}
            required
          />

          {/* Features */}
          <fieldset>
            <legend>Features:</legend>
            <label>
              <input
                type="checkbox"
                value="Pool"
                onChange={handleFeatureChange}
              />
              Pool
            </label>
            <label>
              <input
                type="checkbox"
                value="Fireplace"
                onChange={handleFeatureChange}
              />
              Fireplace
            </label>
            <label>
              <input
                type="checkbox"
                value="Garage"
                onChange={handleFeatureChange}
              />
              Garage
            </label>
          </fieldset>

          {/* Description */}
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />

          {/* Upload Images */}
          <label>Upload Images:</label>
          <input type="file" multiple onChange={handleFileUpload} />

          <button type="submit">Submit Listing</button>
        </form>
    </>
  );
};

export default MLSForm;
