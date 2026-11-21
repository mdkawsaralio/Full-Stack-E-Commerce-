import React from "react";

import "./Footer.css";

import { Link } from "react-router-dom";

function MainFooter() {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-column contact-column">
            <h3>Contact Us</h3>

            <div className="contact-info">
              <p>Classyshop - Mega Super Store</p>
              <p>507-Union Trade Centre</p>
              <p>France</p>
            </div>

            <p className="email">sales@yourcompany.com</p>

            <h2 className="phone">
              <span className="chat-icon">☏</span>
              (+91) 9876-543-210
            </h2>

            <div className="online-chat">
              <h4>
                Online Chat
                <br />
                Get Expert Help
              </h4>
            </div>
          </div>

          <div className="footer-column">
            <h3>Products</h3>
            <ul>
              <li>
                <Link To="/">Prices Drop</Link>
              </li>
              <li>
                <Link To="/">New Products</Link>
              </li>
              <li>
                <Link To="/">Best Sales</Link>
              </li>
              <li>
                <Link To="/">Contact Us</Link>
              </li>
              <li>
                <Link To="/">Sitemap</Link>
              </li>
              <li>
                <Link To="/">Stores</Link>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Our Company</h3>
            <ul>
              <li>
                <Link to="/">Delivery</Link>
              </li>
              <li>
                <Link to="/">Legal Notice</Link>
              </li>
              <li>
                <Link to="/">Terms And Conditions Of Use</Link>
              </li>
              <li>
                <Link to="/">About Us</Link>
              </li>
              <li>
                <Link to="/">Secure Payment</Link>
              </li>
              <li>
                <Link to="/">Login</Link>
              </li>
            </ul>
          </div>

          <div className="footer-column newsletter">
            <h3>Subscribe To Newsletter</h3>

            <p>
              Subscribe to our latest newsletter to get news about special
              discounts.
            </p>

            <form className="email-form">
              <input
                type="email"
                placeholder="Your Email Address"
                className="email-box"
                required
              />
              <label htmlFor="checkbox" className="checkbox">
                <input id="checkbox" type="checkbox" required />I agree to the
                terms and conditions and the privacy policy
              </label>
              <button type="submit" className="subscribe-btn">
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
      </footer>
    </>
  );
}

export default MainFooter;
