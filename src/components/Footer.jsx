import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-column">
          <h3>Information</h3>
          <a href="/">About Us</a>
          <a href="/">Terms & Conditions</a>
          <a href="/">Shipping Policy</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Refund & Returns</a>
          <a href="/">Contact Us</a>
        </div>

        <div className="footer-column">
          <h3>Quick Shop</h3>
          <a href="/">Home</a>
          <a href="/">Shop</a>
          <a href="/">My Account</a>
          <a href="/">Orders</a>
        </div>

        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>ASH-ROSH COLLECTION</p>
          <p>Avadi, Tamil Nadu</p>
          <p>WhatsApp: 7812863679</p>
        </div>

        <div className="footer-column">
          <h3>Follow Us</h3>

          <div className="social-icons">
            <FaInstagram />
            <FaWhatsapp />
            <FaFacebookF />
            <FaYoutube />
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2025 Ash-Rosh Collection. All Rights Reserved.
      </div>

    </footer>
  );
}