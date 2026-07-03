import React, { useContext, useState } from "react";
import "./checkoutpage.css";
import { CartContext } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { FiLock, FiTruck, FiAward } from "react-icons/fi";

export default function CheckoutPage() {
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    house: "",
    street: "",
    landmark: "",
    pincode: "",
    city: "",
    state: "",
    country: "India",
    phone: "",
    whatsapp: "",
    email: "",
  });

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePlaceOrder = () => {
    if (
      !formData.fullName ||
      !formData.house ||
      !formData.street ||
      !formData.pincode ||
      !formData.city ||
      !formData.state ||
      !formData.phone ||
      !formData.email
    ) {
      alert("Please fill all required shipping details");
      return;
    }

    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    clearCart();
    navigate("/order-success");
  };

  return (
    <>
      <section className="checkout-banner">
        <Link to="/cart" className="back-cart">
          ← Back to Cart
        </Link>

        <div>
          <h1>Checkout</h1>
          <p>Home › Cart › Checkout</p>
        </div>

        <div className="secure-checkout">
          <FiLock /> Secure Checkout
        </div>
      </section>

      <section className="checkout-page">
        <div className="checkout-left">
          <h2>Shipping Address</h2>

          <form className="checkout-form">
            <label>Full Name *</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. Ashshi Kannan"
            />

            <label>House no / Building name *</label>
            <input
              type="text"
              name="house"
              value={formData.house}
              onChange={handleChange}
              placeholder="e.g. Flat 101, Galaxy Apartment"
            />

            <label>Street / Area / Colony *</label>
            <input
              type="text"
              name="street"
              value={formData.street}
              onChange={handleChange}
              placeholder="e.g. MG Road, Indiranagar"
            />

            <label>
              Landmark <span>(Optional)</span>
            </label>
            <input
              type="text"
              name="landmark"
              value={formData.landmark}
              onChange={handleChange}
              placeholder="e.g. Near City Hospital"
            />

            <label>Pincode *</label>
            <input
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              placeholder="e.g. 600001"
            />

            <div className="form-row">
              <div>
                <label>City *</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="e.g. Chennai"
                />
              </div>

              <div>
                <label>State *</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="e.g. Tamil Nadu"
                />
              </div>

              <div>
                <label>Country</label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                >
                  <option>India</option>
                </select>
              </div>
            </div>

            <div className="form-row two">
              <div>
                <label>Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="10 digit mobile number"
                />
              </div>

              <div>
                <label>WhatsApp Number</label>
                <input
                  type="tel"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  placeholder="10 digit WhatsApp number"
                />
              </div>
            </div>

            <label>Email Address *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
            />

            <label className="save-info">
              <input type="checkbox" />
              Save this information for next time
            </label>

            <h2>Payment Method</h2>

            <div className="payment-box">
              <input type="radio" name="payment" defaultChecked />
              <span>UPI, Cards, NetBanking</span>
            </div>
          </form>
        </div>

        <div className="checkout-right">
          <h2>Order Summary</h2>

          <div className="checkout-items">
            {cart.map((item) => (
              <div
                className="checkout-item"
                key={`${item.id}-${item.size}`}
              >
                <img src={item.image} alt={item.name} />

                <div className="checkout-item-info">
                  <h4>{item.name}</h4>
                  <p>
                    Size: {item.size} &nbsp; | &nbsp; Qty:{" "}
                    {item.quantity}
                  </p>
                </div>

                <strong>₹{item.price * item.quantity}</strong>
              </div>
            ))}
          </div>

          <div className="checkout-summary-row">
            <span>Subtotal ({totalItems} items)</span>
            <strong>₹{total}</strong>
          </div>

          <div className="checkout-summary-row">
            <span>Shipping</span>
            <strong className="free">FREE</strong>
          </div>

          <div className="checkout-summary-row">
            <span>Tax</span>
            <span>Calculated at checkout</span>
          </div>

          <hr />

          <div className="checkout-summary-row checkout-total">
            <span>Total</span>
            <strong>₹{total}</strong>
          </div>

          <button
            className="place-order-btn"
            onClick={handlePlaceOrder}
          >
            PLACE ORDER - ₹{total}
          </button>

          <div className="checkout-icons">
            <span>
              <FiLock /> Secure Payment
            </span>
            <span>
              <FiTruck /> Free Shipping
            </span>
            <span>
              <FiAward /> Premium Quality
            </span>
          </div>
        </div>
      </section>
    </>
  );
}