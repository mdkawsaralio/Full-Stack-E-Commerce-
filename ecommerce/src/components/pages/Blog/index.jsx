import React, { useRef } from "react";
import BlogItem from "../../BlogItem";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./index.css";

function Blog() {
  const categoryRef = useRef(null);

  const scrollCategory = (direction) => {
    if (!categoryRef.current) return;

    categoryRef.current.scrollBy({
      left: direction === "right" ? 300 : -300,
      behavior: "smooth",
    });
  };

  return (
    <>
      <h3 className="blog-heading">Blog Post</h3>
      <div className="blog-list" ref={categoryRef}>
        <div className="blog-item">
          <BlogItem />
          <BlogItem />
          <BlogItem />
          <BlogItem />
          <BlogItem />
          <BlogItem />
        </div>
      </div>

      <div className="blog-btn">
        <button type="button" onClick={() => scrollCategory("left")}>
          <FaChevronLeft />
        </button>

        <button type="button" onClick={() => scrollCategory("right")}>
          <FaChevronRight />
        </button>
      </div>
    </>
  );
}

export default Blog;
