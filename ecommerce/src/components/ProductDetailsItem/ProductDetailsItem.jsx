import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import {
  FaShoppingCart,
  FaHeart,
  FaExchangeAlt,
  FaSearchPlus,
  FaMinus,
  FaPlus,
} from "react-icons/fa";
import "./ProductDetailsItem.css";

function ProductDetailsItem() {
  const images = [
    "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=900",
    "https://images.unsplash.com/photo-1583391733956-6c78276477e1?w=900",
    "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=900",
    "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=900",
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const [isWishlist, setIsWishlist] = useState(false);

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <div className="product-details-page">
      <div className="product-details-container">
        {/* LEFT SIDE - PRODUCT IMAGES */}
        <div className="product-gallery">
          <div className="product-main-image">
            <img
              src={selectedImage}
              alt="A-Line Kurti"
              className="main-product-img"
            />

            <span className="product-discount">8%</span>

            <div className="product-zoom-icon">
              <FaSearchPlus />
              <span>Hover to zoom</span>
            </div>
          </div>

          {/* IMAGE THUMBNAILS */}
          <div className="product-thumbnail-list">
            {images.map((image, index) => (
              <button
                type="button"
                className={`product-thumbnail ${
                  selectedImage === image ? "active" : ""
                }`}
                key={index}
                onClick={() => setSelectedImage(image)}
              >
                <img src={image} alt={`Product view ${index + 1}`} />
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE - PRODUCT INFORMATION */}
        <div className="product-details-info">
          <h1 className="product-details-title">
            A-Line Kurti With Sharara & Dupatta
          </h1>

          <div className="product-details-rating">
            <span className="product-brand">
              Brands: <strong>Sangria</strong>
            </span>

            <Stack direction="row" spacing={1} alignItems="center">
              <Rating
                name="product-rating"
                value={5}
                precision={0.5}
                readOnly
              />
              <span className="product-review">4 Review</span>
            </Stack>
          </div>

          <div className="product-details-price">
            <span className="product-old-price">Rs. 1450</span>
            <span className="product-new-price">Rs. 1300</span>
          </div>

          <div className="product-stock">IN STOCK</div>

          <p className="product-details-description">
            Rs: Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>

          {/* SIZE SELECTION */}
          <div className="product-size-section">
            <span className="product-size-label">Size:</span>

            {["S", "M", "L"].map((size) => (
              <button
                type="button"
                key={size}
                className={`product-size-btn ${
                  selectedSize === size ? "selected" : ""
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>

          {/* QUANTITY AND ACTION BUTTONS */}
          <div className="product-details-actions">
            <div className="product-quantity">
              <button
                type="button"
                onClick={decreaseQuantity}
                aria-label="Decrease quantity"
              >
                <FaMinus />
              </button>

              <span>{quantity}</span>

              <button
                type="button"
                onClick={increaseQuantity}
                aria-label="Increase quantity"
              >
                <FaPlus />
              </button>
            </div>

            <button type="button" className="product-add-cart">
              <FaShoppingCart />
              Add To Cart
            </button>

            <button
              type="button"
              className={`product-icon-btn ${
                isWishlist ? "wishlist-active" : ""
              }`}
              onClick={() => setIsWishlist(!isWishlist)}
              aria-label="Add to wishlist"
            >
              <FaHeart />
            </button>

            <button
              type="button"
              className="product-icon-btn"
              aria-label="Compare product"
            >
              <FaExchangeAlt />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsItem;
