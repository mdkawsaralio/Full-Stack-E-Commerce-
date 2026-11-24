import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { IoEye, IoEyeOffSharp } from "react-icons/io5";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import "./index.css";
import { toast } from "react-toastify";

function ResetPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    toast.success("Password changed successfully!");

    // Later connect this with your Django API
  };

  return (
    <>
      <div role="presentation" className="bread-crumbs">
        <Breadcrumbs aria-label="breadcrumb">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/reset-password">Reset Password</Link>
        </Breadcrumbs>
      </div>

      <div className="login-page">
        <div className="login-left-side">
          <div className="login-page-title">
            <h2>Create New Password!</h2>

            <p>
              Choose a strong password to protect your ClassyShop account. Make
              sure your new password is easy for you to remember.
            </p>

            <span>Your style. Your choice. Your shopping destination.</span>
          </div>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-password">
            <label htmlFor="new-password">New Password</label>

            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter new password"
                id="new-password"
                className="login-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={8}
              />

              <span
                className="password-eye"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <IoEyeOffSharp /> : <IoEye />}
              </span>
            </div>
          </div>

          <div className="login-password">
            <label htmlFor="confirm-password">Confirm Password</label>

            <div className="password-wrapper">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm new password"
                id="confirm-password"
                className="login-input"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                minLength={8}
              />

              <span
                className="password-eye"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <IoEyeOffSharp /> : <IoEye />}
              </span>
            </div>
          </div>

          <button type="submit" className="login-btn">
            Reset Password
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

export default ResetPassword;
