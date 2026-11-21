import React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";

import {
  FaRegHeart,
  FaExchangeAlt,
  FaExpand,
  FaExternalLinkAlt,
} from "react-icons/fa";

import "./Productitemlist.css";

function Productitemlist() {
  return (
    <div className="shop-list-card">
      {/* Image */}
      <div className="shop-list-image">
        <Link to="/">
          <img
            src="https://plus.unsplash.com/premium_photo-1683865776032-07bf70b0add1?q=80&w=1332&auto=format&fit=crop"
            alt="Product"
          />
        </Link>

        <span className="shop-list-discount">-10%</span>

        {/* Hover Actions */}
        <div className="shop-list-actions">
          <button className="shop-list-action-btn">
            <FaRegHeart />
          </button>

          <button className="shop-list-action-btn">
            <FaExchangeAlt />
          </button>

          <button className="shop-list-action-btn">
            <FaExpand />
          </button>

          <button className="shop-list-action-btn">
            <FaExternalLinkAlt />
          </button>
        </div>
      </div>

      {/* Details */}
      <div className="shop-list-info">
        <h6 className="shop-list-company">Gadget Zone</h6>

        <h3 className="shop-list-title">
          <Link to="/">Apple AirPods Max Over-Ear Wireless Headphone</Link>
        </h3>

        <Stack className="shop-list-rating">
          <Rating
            name="product-rating"
            defaultValue={5}
            precision={0.5}
            readOnly
          />
        </Stack>

        <div className="shop-list-price">
          <span className="shop-list-old-price">$47.00</span>
          <span className="shop-list-new-price">$42.00</span>
        </div>

        <p className="shop-list-description">
          Experience premium sound quality with comfortable over-ear design.
          Enjoy clear audio, deep bass, and excellent wireless connectivity for
          everyday use.
        </p>

        <div className="shop-list-colors">
          <span className="shop-list-color black"></span>
          <span className="shop-list-color white"></span>
          <span className="shop-list-color red"></span>
          <span className="shop-list-stock">In Stock</span>
        </div>

        <div className="shop-list-bottom">
          <button className="shop-list-options-btn">Details</button>
        </div>
      </div>
    </div>
  );
}

export default Productitemlist;
