import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { MdPayment } from "react-icons/md";
import { IoGift } from "react-icons/io5";
import { IoHeadsetSharp } from "react-icons/io5";
import "./FooterTop.css";
function FooterTop() {
  return (
    <div className="footer-top">
      <div className="footer-top-item">
        <FaShippingFast />
        <h3>Free Shipping</h3>
        <span>For All Order Over 300 Tk</span>
      </div>
      <div className="footer-top-item">
        <GiReturnArrow />
        <h3>30 Days Return</h3>
        <span>For An Exchange Product</span>
      </div>
      <div className="footer-top-item">
        <MdPayment />
        <h3>Secure Pyment</h3>
        <span>Pyment Card Accepted</span>
      </div>

      <div className="footer-top-item">
        <IoGift />
        <h3>Special Gift</h3>
        <span>For First Order</span>
      </div>
      <div className="footer-top-item">
        <IoHeadsetSharp />
        <h3>24 Hours Support</h3>
        <span>24/7 Call Support</span>
      </div>
    </div>
  );
}

export default FooterTop;
