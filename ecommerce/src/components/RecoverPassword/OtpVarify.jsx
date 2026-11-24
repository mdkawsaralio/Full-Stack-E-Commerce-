import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import "./index.css";

function VerifyOTP() {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (otp.length !== 6) {
      alert("Please enter a valid 6-digit OTP");
      return;
    }

    // Temporary frontend testing:
    // Later replace this with Django OTP verification.

    navigate("/password-recovary/reset-password");
  };

  return (
    <>
      <div role="presentation" className="bread-crumbs">
        <Breadcrumbs aria-label="breadcrumb">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/verify-otp">Verify OTP</Link>
        </Breadcrumbs>
      </div>

      <div className="login-page">
        <div className="login-left-side">
          <div className="login-page-title">
            <h2>Verify Your Email!</h2>

            <p>
              We have sent a verification code to your registered email address.
              Please enter the code to continue.
            </p>

            <span>Your style. Your choice. Your shopping destination.</span>
          </div>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-email">
            <label htmlFor="otp">Verification Code</label>

            <input
              type="text"
              placeholder="Enter 6-digit OTP"
              id="otp"
              className="login-input otp-input"
              value={otp}
              onChange={(e) =>
                setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))
              }
              maxLength={6}
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Verify OTP
          </button>

          <div className="login-register">
            <span>Didn't receive the code?</span>
            <button type="button" className="resend-otp">
              Resend OTP
            </button>
          </div>

          <div className="login-register">
            <span>Remember your password?</span>
            <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default VerifyOTP;
