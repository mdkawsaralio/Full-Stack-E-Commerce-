import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { IoEye, IoEyeOffSharp } from "react-icons/io5";
import { useState } from "react";

function Registration() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <div className="registration-page">
        {/* Left Side */}
        <div className="registration-left-side">
          <div className="registration-page-title">
            <h2>Join ShopOra!</h2>

            <p>
              Create Your Account and Discover a Better Way to Shop. Explore
              thousands of products, find your favorites, and enjoy exclusive
              deals with ClassyShop.
            </p>

            <span>Your style. Your choice. Your shopping destination.</span>
          </div>
        </div>

        {/* Right Side - Registration Form */}
        <form className="registration-form">
          <div className="registration-name">
            <label htmlFor="fullname">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              id="fullname"
              className="registration-input"
              required
            />
          </div>

          <div className="registration-email">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              id="email"
              className="registration-input"
              required
            />
          </div>

          <div className="registration-password">
            <label htmlFor="password">Password</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create password"
                id="password"
                className="registration-input"
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

          <div className="registration-confirm-password">
            <label htmlFor="confirm-password">Confirm Password</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Confirm password"
                id="password"
                className="registration-input"
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

          <div className="registration-checkbox">
            <div className="registration-checkbox-input">
              <input type="checkbox" id="terms" required />

              <label htmlFor="terms">I agree to the Terms & Conditions</label>
            </div>
          </div>

          <button type="submit" className="registration-btn">
            Create Account
          </button>

          <div className="registration-login">
            <span>Already have an account?</span>
            <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Registration;
