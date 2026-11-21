import React from "react";
import "./PopularProduct.css";
import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import PopularItem from "./PopularItem";

function PopularProduct() {
  const categoryRef = useRef(null);

  const scrollCategory = (direction) => {
    categoryRef.current.scrollBy({
      left: direction === "right" ? 200 : -200,
      behavior: "smooth",
    });
  };
  return (
    <>
      <section>
        <div className="popular-section">
          <div className="popular-heading">
            <h3>Popular Product</h3>
            <span>Do not Miss out!</span>
          </div>
          <div className="popular-section-cat">
            <div className="category-list" ref={categoryRef}>
              <button className="cat-name">
                <Link to="/">Electronics</Link>
              </button>
              <button className="cat-name">
                <Link to="/">Electronics</Link>
              </button>
              <button className="cat-name">
                <Link to="/">Electronics</Link>
              </button>
              <button className="cat-name">
                <Link to="/">Electronics</Link>
              </button>
              <button className="cat-name">
                <Link to="/">Electronics</Link>
              </button>
              <button className="cat-name">
                <Link to="/">Electronics</Link>
              </button>
              <button className="cat-name">
                <Link to="/">Electronics</Link>
              </button>
              <button className="cat-name">
                <Link to="/">Electronics</Link>
              </button>
              <button className="cat-name">
                <Link to="/">Electronics</Link>
              </button>
              <button className="cat-name">
                <Link to="/">Electronics</Link>
              </button>
              <button className="cat-name">
                <Link to="/">Electronics</Link>
              </button>
              <button className="cat-name">
                <Link to="/">Electronics</Link>
              </button>
            </div>
            <div className="left-right-btn">
              <button onClick={() => scrollCategory("left")}>
                <FaChevronLeft className="left-arrow" />
              </button>
              <button onClick={() => scrollCategory("right")}>
                <FaChevronRight className="right-arrow" />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="popular-item-list">
        <PopularItem />
      </section>
    </>
  );
}

export default PopularProduct;
