import React, { useContext } from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import {
  FaRegHeart,
  FaExchangeAlt,
  FaExpand,
  FaExternalLinkAlt,
} from "react-icons/fa";
import "./Productitem.css";
import { MyContext } from "../../App";
function Productitem() {
  const context = useContext(MyContext);
  return (
    <div className="shop-product-card">
      <div className="shop-product-image">
        <Link to="/">
          <img
            src="https://plus.unsplash.com/premium_photo-1683865776032-07bf70b0add1?q=80&w=1332&auto=format&fit=crop"
            alt="Product"
          />
        </Link>

        <div className="shop-product-actions">
          <button className="shop-product-action-btn">
            <FaRegHeart />
          </button>

          <button className="shop-product-action-btn">
            <FaExchangeAlt />
          </button>

          <button
            className="shop-product-action-btn"
            onClick={() => context.setOpenProductDetailsModal(true)}
          >
            <FaExpand />
          </button>

          <button className="shop-product-action-btn">
            <FaExternalLinkAlt />
          </button>
        </div>
      </div>

      <div className="shop-product-info">
        <h6>
          <Link to="/">Company name</Link>
        </h6>

        <p>Product name</p>

        <Stack spacing={1}>
          <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
        </Stack>
        <p>Price:</p>
      </div>
    </div>
  );
}

export default Productitem;
