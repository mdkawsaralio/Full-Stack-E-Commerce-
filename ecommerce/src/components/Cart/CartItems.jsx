import React from "react";
import "./CartItem.css";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";

function CartItems() {
  return (
    <div className="shopping-cart-page">
      <div className="shopping-cart-container">
        {/* Left Side - Cart Products */}
        <div className="cart-items-left">
          <div className="cart-items-heading">
            <h3>Your Cart</h3>
            <span>You have (3) Product</span>
          </div>

          <div className="cart-item">
            <div className="cart-item-image">
              <img src="/images/product-1.jpg" alt="Cotton T-Shirt" />
            </div>

            <div className="cart-item-details">
              <h4>Mens Cotton Casual Short Sleeve T-Shirts</h4>
              <p className="cart-item-price">$86.00</p>
            </div>

            <div className="cart-item-quantity">
              <input type="number" min="1" defaultValue="1" />
            </div>

            <div className="cart-item-total">$86.00</div>

            <button className="cart-item-delete" type="button">
              <MdDeleteOutline />
            </button>
          </div>

          <Link to="/" className="continue-shopping">
            &lt; Continue shopping
          </Link>
        </div>

        {/* Right Side - Cart Summary */}
        <div className="cart-summary-right">
          <div className="cart-summary-top">
            <div className="cart-summary-row">
              <strong>1 item</strong>
              <span>$86.00</span>
            </div>

            <div className="cart-summary-row">
              <strong>Shipping</strong>
              <span>$7.00</span>
            </div>
          </div>

          <div className="cart-summary-bottom">
            <div className="cart-summary-row">
              <strong>Total (tax excl.)</strong>
              <span>$93.00</span>
            </div>

            <div className="cart-summary-row">
              <strong>Total (tax incl.)</strong>
              <span>$93.00</span>
            </div>

            <div className="cart-summary-row">
              <strong>Taxes:</strong>
              <span>$0.00</span>
            </div>

            <div className="promo-code">
              <a href="#promo">Have a promo code?</a>
            </div>

            <Link to="/checkout">PROCEED TO CHECKOUT</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
