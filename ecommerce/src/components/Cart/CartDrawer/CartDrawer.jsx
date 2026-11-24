import React from "react";
import "./CartDrawer.css";
import { MdDeleteOutline } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

function CartDrawer({ open, close }) {
  return (
    <>
      <div className={`cart-container ${open ? "show" : ""}`}>
        <div className="cart-overlay" onClick={close}></div>
        <div className="cart-drawer">
          <div className="cart-heading">
            <h3>Cart List</h3>
            <button type="button" onClick={close}>
              <IoCloseSharp />
            </button>
          </div>
          <div className="cart-product">
            <div className="cart-product-image">
              <img src="/images/product-1.jpg" alt="Cotton T-Shirt" />
            </div>

            <div className="cart-product-info">
              <h4>Mens Cotton Casual Short Sleeve T-Shirts</h4>
              <p>
                1 X <span>$86.00</span>
              </p>
            </div>

            <button className="cart-remove" aria-label="Remove product">
              <MdDeleteOutline />
            </button>
          </div>

          {/* Cart Summary */}
          <div className="cart-bottom">
            <div className="cart-summary">
              <div className="summary-row">
                <span>1 item</span>
                <strong>$86.00</strong>
              </div>

              <div className="summary-row">
                <span>Shipping</span>
                <strong>$7.00</strong>
              </div>
            </div>

            <div className="cart-total">
              <div className="summary-row">
                <span>Total (tax excl.)</span>
                <strong>$93.00</strong>
              </div>

              <div className="summary-row">
                <span>Total (tax incl.)</span>
                <strong>$93.00</strong>
              </div>

              <div className="summary-row">
                <span>Taxes:</span>
                <strong>$0.00</strong>
              </div>
            </div>

            {/* Cart Buttons */}
            <div className="cart-actions">
              <Link to="/cart-items">VIEW CART</Link>

              <Link to="/checkout">PROCEED TO CHECKOUT</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartDrawer;
