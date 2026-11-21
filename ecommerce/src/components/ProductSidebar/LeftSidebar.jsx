import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "react-range-slider-input/dist/style.css";
import "./LeftSidebar.css";
import * as RangeSliderModule from "react-range-slider-input";
import Rating from "@mui/material/Rating";
const RangeSlider = RangeSliderModule.default.default;

function LeftSidebar() {
  const [submenuIndex, setSubmenuIndex] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    console.log(ref.current);
  }, []);

  return (
    <aside className="left-side-bar">
      <div className="box">
        <h3>Filter By Categories</h3>

        <ul className="left-side-bar-category-list">
          <li className="category-item">
            <div className="category-heading">
              <Link to="/products/mobile-camera-lens">Mobile Camera Lens</Link>

              <button
                className="toggle-btn"
                type="button"
                onClick={() => setSubmenuIndex(submenuIndex === 0 ? null : 0)}
              >
                {submenuIndex === 0 ? "−" : "+"}
              </button>
            </div>

            {submenuIndex === 0 && (
              <ul className="subleft-side-bar-category-list">
                <li>
                  <Link to="/products/charging-pads">Charging Pads</Link>
                </li>
                <li>
                  <Link to="/products/selfie-sticks">Selfie Sticks</Link>
                </li>
                <li>
                  <Link to="/products/sim-adapters">SIM Adapters</Link>
                </li>
                <li>
                  <Link to="/products/batteries">Batteries</Link>
                </li>
              </ul>
            )}
          </li>

          {/* Smart Watch */}
          <li className="category-item">
            <div className="category-heading">
              <Link to="/products/smart-watch">Smart Watch</Link>

              <button
                className="toggle-btn"
                type="button"
                onClick={() => setSubmenuIndex(submenuIndex === 1 ? null : 1)}
              >
                {submenuIndex === 1 ? "−" : "+"}
              </button>
            </div>

            {submenuIndex === 1 && (
              <ul className="subleft-side-bar-category-list">
                <li>
                  <Link to="/products/digital-watches">Digital Watches</Link>
                </li>
                <li>
                  <Link to="/products/smart-bands">Smart Bands</Link>
                </li>
              </ul>
            )}
          </li>

          {/* Power Banks */}
          <li className="category-item">
            <div className="category-heading">
              <Link to="/products/power-banks">Power Banks</Link>

              <button
                className="toggle-btn"
                type="button"
                onClick={() => setSubmenuIndex(submenuIndex === 2 ? null : 2)}
              >
                {submenuIndex === 2 ? "−" : "+"}
              </button>
            </div>

            {submenuIndex === 2 && (
              <ul className="subleft-side-bar-category-list">
                <li>
                  <Link to="/products/10000mah">10000mAh</Link>
                </li>
                <li>
                  <Link to="/products/20000mah">20000mAh</Link>
                </li>
              </ul>
            )}
          </li>

          {/* Air Buds */}
          <li className="category-item">
            <div className="category-heading">
              <Link to="/products/air-buds">Air Buds</Link>

              <button
                className="toggle-btn"
                type="button"
                onClick={() => setSubmenuIndex(submenuIndex === 3 ? null : 3)}
              >
                {submenuIndex === 3 ? "−" : "+"}
              </button>
            </div>

            {submenuIndex === 3 && (
              <ul className="subleft-side-bar-category-list">
                <li>
                  <Link to="/products/wireless-earbuds">Wireless Earbuds</Link>
                </li>
                <li>
                  <Link to="/products/bluetooth-earbuds">
                    Bluetooth Earbuds
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>

      <div className="box">
        <h3>Filter By Availability </h3>
        <div className="checkbox-item">
          <input type="checkbox" className="checkbox" id="" />
          <label htmlFor="">kawsar</label>
          <span>(12)</span>
        </div>

        <div className="checkbox-item">
          <input type="checkbox" className="checkbox" id="" />
          <label htmlFor="">kawsar</label>
          <span>(12)</span>
        </div>

        <div className="checkbox-item">
          <input type="checkbox" className="checkbox" id="" />
          <label htmlFor="">kawsar</label>
          <span>(12)</span>
        </div>

        <div className="checkbox-item">
          <input type="checkbox" className="checkbox" id="" />
          <label htmlFor="">kawsar</label>
          <span>(12)</span>
        </div>

        <div className="checkbox-item">
          <input type="checkbox" className="checkbox" id="" />
          <label htmlFor="">kawsar</label>
          <span>(12)</span>
        </div>
        <div className="checkbox-item">
          <input type="checkbox" className="checkbox" id="" />
          <label htmlFor="">kawsar</label>
          <span>(12)</span>
        </div>
      </div>

      <div className="box">
        <h3> Filter By Size </h3>
        <div className="checkbox-item">
          <input type="checkbox" className="checkbox" id="" />
          <label htmlFor="">Small</label>
          <span>(12)</span>
        </div>

        <div className="checkbox-item">
          <input type="checkbox" className="checkbox" id="" />
          <label htmlFor="">Medium</label>
          <span>(12)</span>
        </div>

        <div className="checkbox-item">
          <input type="checkbox" className="checkbox" id="" />
          <label htmlFor="">Large</label>
          <span>(12)</span>
        </div>

        <div className="checkbox-item">
          <input type="checkbox" className="checkbox" id="" />
          <label htmlFor="">XL</label>
          <span>(12)</span>
        </div>

        <div className="checkbox-item">
          <input type="checkbox" className="checkbox" id="" />
          <label htmlFor="">XXL</label>
          <span>(12)</span>
        </div>
        <div className="checkbox-item">
          <input type="checkbox" className="checkbox" id="" />
          <label htmlFor="">XXXL</label>
          <span>(12)</span>
        </div>
      </div>

      <div className="box" ref={ref}>
        <h3>Filter by price</h3>
        <div className="range-slider">
          <RangeSlider />
        </div>
        <div className="range-limit">
          <span> From: {100}</span>
          <span> To: {1000}</span>
        </div>
      </div>

      <div className="box">
        <h3>Filter by Rating</h3>
        <div className="rating">
          <Rating name="read-only" value={5} readOnly />
          <Rating name="read-only" value={4} readOnly />
          <Rating name="read-only" value={3} readOnly />
          <Rating name="read-only" value={2} readOnly />
          <Rating name="read-only" value={1} readOnly />
        </div>
      </div>
    </aside>
  );
}

export default LeftSidebar;
