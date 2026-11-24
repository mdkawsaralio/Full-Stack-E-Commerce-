import React from "react";
import CartItems from "../../Cart/CartItems";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";

function CartPage() {
  return (
    <>
      <div role="presentation" className="bread-crumbs">
        <Breadcrumbs aria-label="breadcrumb">
          <Link to="/">Home</Link>
          <Link to="/product-listing">Fashion</Link>
        </Breadcrumbs>
      </div>
      <div className="cart-section">
        <CartItems />
      </div>
    </>
  );
}

export default CartPage;
