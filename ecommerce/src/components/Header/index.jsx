import "./index.css";
import logo from "./logo.svg";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { IoIosGitCompare } from "react-icons/io";

import Navigation from "./Navigation";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="top-bar">
          <div className="left-top-bar">
            <p> Upto 50% discount</p>
          </div>
          <div className="right-top-bar">
            <Link to="/"> Help Center </Link>
            <Link to="/"> Order Tracking </Link>
          </div>
        </div>
      </div>
      <div className="header">
        <div className="left-header">
          <div className="logo-icon">
            <Link to="/">
              <img src={logo} alt="ClassyShop Logo" className="logo" />
            </Link>
          </div>
        </div>

        {/* Middle Header - Search */}
        <div className="middle-header">
          <input type="text" placeholder="Search products here..." />
          <button type="button">SEARCH</button>
        </div>

        {/* Right Header - Account and Icons */}
        <div className="right-header">
          <div className="login-register">
            <Link to="/">Login</Link>
            <span>/</span>
            <Link to="/">Register</Link>
          </div>

          <div className="header-icons">
            <IconButton aria-label="show 4 unread messages">
              <Badge badgeContent={4} color="error">
                <IoIosGitCompare />
              </Badge>
            </IconButton>

            <IconButton aria-label="show 4 unread messages">
              <Badge badgeContent={4} color="error">
                <MdFavoriteBorder />
              </Badge>
            </IconButton>

            <IconButton aria-label="show 4 unread messages">
              <Badge badgeContent={4} color="error">
                <MdOutlineShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </div>
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
