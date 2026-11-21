import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function BlogItem() {
  return (
    <div className="product-item">
      <Link to="/" className="blog-link">
        <div className="item-img">
          <img
            src="https://plus.unsplash.com/premium_photo-1683865776032-07bf70b0add1?q=80&w=1332&auto=format&fit=crop"
            alt="Blog"
          />
          <p className="img-date">13 oct 2026</p>
        </div>

        <div className="product-info">
          <h6>Author</h6>
          <p>
            Lorem Ipsum is the standard dummy text of the printing and
            typesetting industry, used as a placeholder to fill space in layouts
            before final content is added.
          </p>
        </div>
      </Link>
    </div>
  );
}

export default BlogItem;
