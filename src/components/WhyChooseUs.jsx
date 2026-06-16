import React from "react";
import { FiCreditCard, FiZap, FiHeadphones } from "react-icons/fi";
import "./whychooseus.css";

export default function WhyChooseUs() {
  return (
    <section className="why-choose">
      <h2>Why Choose Us</h2>

      <p className="subtitle">
        We are committed to providing you with the best shopping
        experience with secure payments, fast shipping and excellent
        customer service.
      </p>

      <div className="features">

        <div className="feature-card">
          <div className="icon-circle">
            <FiCreditCard />
          </div>
          <h3>Secure Payment</h3>
          <p>
            100% secure payment with SSL encryption.
          </p>
        </div>

        <div className="feature-card">
          <div className="icon-circle">
            <FiZap />
          </div>
          <h3>Fast Shipping</h3>
          <p>
            Quick delivery to your doorstep.
          </p>
        </div>

        <div className="feature-card">
          <div className="icon-circle">
            <FiHeadphones />
          </div>
          <h3>24/7 Support</h3>
          <p>
            Our support team is always ready to help.
          </p>
        </div>

      </div>
    </section>
  );
}