import { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu2Line, RiArrowDownSLine, RiCloseLine } from "react-icons/ri";
import "./leftnav.css";

export default function LeftNavigation() {
  const [open, setOpen] = useState(false);

  return (
    <div className="left-navigation">
      <button type="button" onClick={() => setOpen(true)}>
        <RiMenu2Line />
        Shop By Categories
        <RiArrowDownSLine className="button-arrow" />
      </button>

      {/* dark background */}
      <div
        className={`sidebar-overlay ${open ? "show" : ""}`}
        onClick={() => setOpen(false)}
      />

      {/* sidebar */}
      <aside className={`sidebar ${open ? "show" : ""}`}>
        <div className="sidebar-header">
          <h3>Categories</h3>
          <button type="button" onClick={() => setOpen(false)}>
            <RiCloseLine />
          </button>
        </div>

        <ul>
          <li>
            <Link to="/fashion" onClick={() => setOpen(false)}>
              Fashion
            </Link>
          </li>
          <li>
            <Link to="/electronics" onClick={() => setOpen(false)}>
              Electronics
            </Link>
          </li>
          <li>
            <Link to="/home" onClick={() => setOpen(false)}>
              Home & Living
            </Link>
          </li>
          <li>
            <Link to="/sports" onClick={() => setOpen(false)}>
              Sports
            </Link>
          </li>
        </ul>
      </aside>
    </div>
  );
}
