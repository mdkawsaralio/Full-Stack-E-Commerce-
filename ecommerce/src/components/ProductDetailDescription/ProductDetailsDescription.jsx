import React from "react";
import "./ProductDetailsDescription.css";
import { useState } from "react";
import Rating from "@mui/material/Rating";

function ProductDetailsDescription() {
  const [activeTab, setActiveTab] = useState("description");
  return (
    <>
      <div>
        <button
          className="product-details-btn"
          onClick={() => setActiveTab("description")}
        >
          Description
        </button>
        <button
          className="product-details-btn"
          onClick={() => setActiveTab("productdetails")}
        >
          Product Details
        </button>
        <button
          className="product-details-btn"
          onClick={() => setActiveTab("review")}
        >
          Review
        </button>
      </div>
      <div>{activeTab === "description" && <Description />}</div>
      <div>{activeTab === "productdetails" && <ProductDetails />}</div>
      <div>{activeTab === "review" && <Review />}</div>
    </>
  );
}
const Description = () => {
  return (
    <div className="produce-details-description product-details-section">
      <h3>Product Description</h3>

      <p>
        Experience premium quality and modern design with this stylish product.
        Designed for everyday use, it combines comfort, durability, and
        functionality.
      </p>

      <p>
        Whether you are using it at home, at work, or while traveling, this
        product offers excellent performance and a comfortable user experience.
      </p>
    </div>
  );
};

const ProductDetails = () => {
  return (
    <div className="produce-details-description product-details-section">
      <h3>Product Information</h3>

      <table>
        <tbody>
          <tr>
            <td>Brand</td>
            <td>Samsung</td>
          </tr>
          <tr>
            <td>Model</td>
            <td>Galaxy Buds 3 Pro</td>
          </tr>
          <tr>
            <td>Color</td>
            <td>Silver</td>
          </tr>
          <tr>
            <td>Connectivity</td>
            <td>Bluetooth 5.4</td>
          </tr>
          <tr>
            <td>Battery Life</td>
            <td>Up to 7 hours</td>
          </tr>
          <tr>
            <td>Warranty</td>
            <td>1 Year</td>
          </tr>
          <tr>
            <td>Country of Origin</td>
            <td>South Korea</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const Review = () => {
  const [rating, setRating] = useState(0);

  return (
    <div className="produce-details-description product-details-section">
      <h3>Customer Reviews</h3>

      <div className="review-item">
        <h4>Excellent Product!</h4>
        <Rating value={5} readOnly />
        <p>
          The sound quality is amazing. Very comfortable to use and the battery
          backup is excellent.
        </p>
        <span>By: Rahim Ahmed</span>
      </div>

      <div className="review-item">
        <h4>Good Quality</h4>
        <Rating value={4} readOnly />
        <p>
          Overall a great product. The design looks premium and the performance
          is very good.
        </p>
        <span>By: Karim Hasan</span>
      </div>

      <div className="review-item">
        <h4>Worth the Money</h4>
        <Rating value={5} readOnly />
        <p>I am satisfied with this purchase. Definitely recommended.</p>
        <span>By: Sakib Hossain</span>
      </div>

      {/* Write a Review */}
      <div className="review-form">
        <h3>Write a Review</h3>

        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label>Your Rating</label>
            <Rating
              value={rating}
              precision={0.5}
              onChange={(event, newValue) => setRating(newValue)}
            />
          </div>

          <div className="form-group">
            <label>Review Title</label>
            <input type="text" placeholder="Enter review title" required />
          </div>

          <div className="form-group">
            <label>Your Review</label>
            <textarea rows="5" placeholder="Write your review..." required />
          </div>

          <button type="submit" className="submit-review-btn">
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductDetailsDescription;
