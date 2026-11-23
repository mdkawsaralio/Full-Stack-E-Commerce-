import React from "react";
import LeftSidebar from "../../ProductSidebar/LeftSidebar";
import RightSidebar from "../../ProductSidebar/RightSidebar";
import "./index.css";
import { Link } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";

function ProduceListing() {
  return (
    <>
      <div role="presentation" className="bread-crumbs">
        <Breadcrumbs aria-label="breadcrumb">
          <Link to="/">Home</Link>
          <Link to="/product-listing">Product List</Link>
        </Breadcrumbs>
      </div>
      <div className="product-listing">
        <LeftSidebar />
        <RightSidebar />
      </div>
    </>
  );
}

export default ProduceListing;
