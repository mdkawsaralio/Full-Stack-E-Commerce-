import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { IoEye, IoEyeOffSharp } from "react-icons/io5";
import { useState } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <div role="presentation" className="bread-crumbs">
        <Breadcrumbs aria-label="breadcrumb">
          <Link to="/">Home</Link>
          <Link to="/product-listing">Login</Link>
        </Breadcrumbs>
      </div>
      <div className="login-page">
        <div className="login-left-side">
          <div className="login-page-title">
            <h2>Welcome Back!</h2>
            <p>
              Discover a Better Way to Shop. Explore thousands of products, find
              your favorites, and enjoy exclusive deals with ClassyShop.
            </p>
            <span>Your style. Your choice. Your shopping destination.</span>
          </div>
        </div>
        <form className="login-form">
          <div className="login-email">
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="Email"
              id=""
              className="login-input"
              required
            ></input>
          </div>

          <div className="login-password">
            <label htmlFor="password">Password</label>

            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                id="password"
                className="login-input"
                required
              />

              <span
                className="password-eye"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <IoEyeOffSharp /> : <IoEye />}
              </span>
            </div>
          </div>
          <div className="login-checkbox">
            <div className="login-checkbox-input">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember Me</label>
            </div>

            <div>
              <Link to="/password-recovary">Forget Password</Link>
            </div>
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
          <div className="login-register">
            <span>Don't have an account?</span>
            <Link to="/registration">Register</Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
