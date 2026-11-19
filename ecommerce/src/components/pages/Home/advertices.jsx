import React from "react";
import "./advertices.css";
import { FaShippingFast } from "react-icons/fa";
import image6 from "./6.jpg";
import image7 from "./7.jpg";
import image8 from "./8.jpg";

function advertices() {
  return (
    <>
      <div className="first-section">
        <div className="icon">
          <FaShippingFast className="icon-item" />
          <p>Free Shipping</p>
        </div>
        <div className="middle-section">
          <p>Free shipping on your first Delivary</p>
        </div>
        <div className="last-section">
          <h3>Only 200 tk</h3>
        </div>
      </div>
      <div className="second-section">
        <div className="advartice-image">
          <img src={image6}></img>
        </div>
        <div className="advartice-image">
          <img src={image7}></img>
        </div>
        <div className="advartice-image">
          <img src={image8}></img>
        </div>
      </div>
    </>
  );
}

export default advertices;
