import React from "react";
import "./RightSidebar.css";
import Productitem from "../Productitem/Productitem";
import { CiGrid41 } from "react-icons/ci";
import { IoReorderThreeOutline } from "react-icons/io5";
import { useState } from "react";
import Productitemlist from "../Productitemlist/Productitemlist";

function RightSidebar() {
  const [selectedView, setSelectedView] = useState("grid");
  return (
    <>
      <div className="product-group">
        <div className="grid-option">
          <div className="grid-option-icon">
            <button
              type="button"
              className={`grid-icon ${selectedView === "grid" ? "selected" : ""}`}
              onClick={() => setSelectedView("grid")}
            >
              <CiGrid41 />
            </button>
            <button
              type="button"
              className={`grid-icon ${selectedView === "list" ? "selected" : ""}`}
              onClick={() => setSelectedView("list")}
            >
              <IoReorderThreeOutline />
            </button>
          </div>
          <div className="grid-option-description">
            <span>Available Product: (12) </span>
          </div>
          <div className="grid-option-sort">
            <span>Sort By</span>

            <select className="sort-option-btn">
              <option value="">Default Sorting</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
              <option value="newest">Newest First</option>
              <option value="popular">Most Popular</option>
            </select>
          </div>
        </div>

        {selectedView === "grid" ? (
          <>
            <div className="product-grid">
              <div className="product-grid-item">
                <Productitem />
              </div>
              <div className="product-grid-item">
                <Productitem />
              </div>
              <div className="product-grid-item">
                <Productitem />
              </div>
              <div className="product-grid-item">
                <Productitem />
              </div>

              <div className="product-grid-item">
                <Productitem />
              </div>
              <div className="product-grid-item">
                <Productitem />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="product-list-orientation">
              <div className="product-list-item">
                <Productitemlist />
              </div>
              <div className="product-list-item">
                <Productitemlist />
              </div>
              <div className="product-list-item">
                <Productitemlist />
              </div>
              <div className="product-list-item">
                <Productitemlist />
              </div>
              <div className="product-list-item">
                <Productitemlist />
              </div>
              <div className="product-list-item">
                <Productitemlist />
              </div>
              <div className="product-list-item">
                <Productitemlist />
              </div>
              <div className="product-list-item">
                <Productitemlist />
              </div>
              <div className="product-list-item">
                <Productitemlist />
              </div>
              <div className="product-list-item">
                <Productitemlist />
              </div>
              <div className="product-list-item">
                <Productitemlist />
              </div>
              <div className="product-list-item">
                <Productitemlist />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default RightSidebar;
