import "./index.css";
import React, { useContext } from "react";
import logo from "./logo.svg";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import { MdOutlineShoppingCart, MdFavoriteBorder } from "react-icons/md";
import { IoIosGitCompare } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

import Navigation from "./Navigation";
import CartDrawer from "../Cart/CartDrawer/CartDrawer";
import { MyContext } from "../../App";

const Header = () => {
  const [open, setopen] = React.useState(false);
  const context = useContext(MyContext);

  const [profileopen, setprofileopen] = React.useState(false);
  const profileRef = React.useRef(null);

  React.useEffect(() => {
    function handleClickOutside(event) {
      if (!profileRef.current?.contains(event.target)) {
        setprofileopen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header className="header-section">
        {/* Top Bar */}
        <div className="w-full px-20 py-2 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p>Upto 50% discount</p>
            </div>

            <div className="flex items-center gap-4 text-sm font-bold">
              <Link to="/">Help Center</Link>
              <Link to="/">Order Tracking</Link>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="w-full px-[3.5%] py-[15px] flex items-center justify-between gap-[30px] bg-white border-b border-gray-200 box-border">
          {/* Logo */}
          <div className="flex items-center shrink-0">
            <Link to="/">
              <img
                src={logo}
                alt="ClassyShop Logo"
                className="w-[200px] h-auto block object-contain"
              />
            </Link>
          </div>

          {/* Search */}
          <div className="flex items-center gap-[15px] flex-1 min-w-0">
            <input
              type="text"
              placeholder="Search products here..."
              className="w-full h-[55px] px-[18px] border border-gray-200 rounded-lg text-[17px] outline-none focus:border-[#f56856] box-border"
            />

            <button
              type="button"
              className="h-[55px] min-w-[140px] border-0 rounded-lg bg-[#f56856] text-white text-[15px] font-semibold cursor-pointer hover:bg-[#e95745]"
            >
              SEARCH
            </button>
          </div>

          {/* Account and Icons */}
          {context.islogin === false ? (
            <div className="flex items-center gap-[25px] shrink-0 whitespace-nowrap">
              <div className="flex items-center gap-[5px]">
                <Link to="/login">Login</Link>
                <span>/</span>
                <Link to="/registration">Register</Link>
              </div>

              <div className="flex items-center">
                <IconButton aria-label="compare products">
                  <Badge badgeContent={4} color="error">
                    <IoIosGitCompare />
                  </Badge>
                </IconButton>

                <IconButton aria-label="favorite products">
                  <Badge badgeContent={4} color="error">
                    <MdFavoriteBorder />
                  </Badge>
                </IconButton>

                <IconButton onClick={() => setopen(true)}>
                  <Badge badgeContent={4} color="error">
                    <MdOutlineShoppingCart />
                  </Badge>
                </IconButton>
              </div>
            </div>
          ) : (
            <>
              <div className="relative" ref={profileRef}>
                <div className="flex items-center gap-[25px] shrink-0">
                  <div className="relative flex gap-1 items-center justify-center">
                    <button
                      ref={profileRef}
                      className=" flex items-center gap-3 p-0 m-0 border-0 bg-transparent cursor-pointer"
                      onClick={() => setprofileopen(!profileopen)}
                    >
                      <div className="w-[60px] h-[60px] flex items-center justify-center border border-gray-200 rounded-full bg-gray-100 hover:bg-gray-300">
                        <CgProfile className="w-6 h-6" />
                      </div>

                      <div className="flex flex-col items-start">
                        <span className="text-sm">Md.kawsar Ali</span>
                        <span className="text-sm">
                          kawsaralio1996@gmail.com
                        </span>
                      </div>
                    </button>

                    {profileopen && (
                      <>
                        <div className="absolute top-full right-15 w-[200px] bg-white shadow-lg rounded-lg border border-gray-200 z-50">
                          <ul className="flex flex-col py-2">
                            <li>
                              <Link
                                to="/profile"
                                className="block px-4 py-3 hover:bg-gray-100 hover:text-red-500"
                              >
                                My Profile
                              </Link>
                            </li>

                            <li>
                              <Link
                                to="/orders"
                                className="block px-4 py-3 hover:bg-gray-100 hover:text-red-500"
                              >
                                My Orders
                              </Link>
                            </li>

                            <li>
                              <button
                                onClick={() => {
                                  context.setislogin(false);
                                  setprofileopen(false);
                                }}
                                className="w-full text-left px-4 py-3 hover:bg-gray-100 hover:text-red-500"
                              >
                                Logout
                              </button>
                            </li>
                          </ul>
                        </div>
                      </>
                    )}
                  </div>

                  <div className="flex items-center">
                    <IconButton aria-label="compare products">
                      <Badge badgeContent={4} color="error">
                        <IoIosGitCompare />
                      </Badge>
                    </IconButton>

                    <IconButton aria-label="favorite products">
                      <Badge badgeContent={4} color="error">
                        <MdFavoriteBorder />
                      </Badge>
                    </IconButton>

                    <IconButton onClick={() => setopen(true)}>
                      <Badge badgeContent={4} color="error">
                        <MdOutlineShoppingCart />
                      </Badge>
                    </IconButton>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        <Navigation />
      </header>

      <CartDrawer open={open} close={() => setopen(false)} />
    </>
  );
};

export default Header;
