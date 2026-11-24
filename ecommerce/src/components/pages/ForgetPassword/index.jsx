import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import Breadcrumbs from "@mui/material/Breadcrumbs";

function ForgetPassword() {
  return (
    <>
      <div role="presentation" className="bread-crumbs">
        <Breadcrumbs aria-label="breadcrumb">
          <Link to="/">Home</Link>
          <Link to="/login">Forget Password</Link>
        </Breadcrumbs>
      </div>

      <div className="login-page">
        <div className="login-left-side">
          <div className="login-page-title">
            <h2>Forgot Password?</h2>
            <p>
              Don't worry! It happens. Enter your registered email address and
              we will send you a link to reset your password.
            </p>
            <span>Your style. Your choice. Your shopping destination.</span>
          </div>
        </div>

        <form className="login-form">
          <div className="login-email">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              id="email"
              className="login-input"
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Send Reset Link
          </button>

          <div className="login-register">
            <span>Remember your password?</span>
            <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default ForgetPassword;
