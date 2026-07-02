import React, { useContext } from "react";
import "./checkoutpage.css"
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { FiLock,FiTruck,FiAward } from "react-icons/fi";

export default function CheckoutPage() {
    const { cart } = useContext(CartContext)

    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity, 0
    );

    const totalItems = cart.reduce(
        (sum, item) => sum + item.quantity, 0
    );

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
                    <FiLock />Secure Checkout
                </div>
            </section>

            <section className="checkout-page">
                <div className="checkout-left">
                    <h2>Shipping Address</h2>

                    <form className="checkout-form">
                        <label>Full Name</label>
                        <input placeholder="e.g. Ashshi Kannan" />

                        <label>House no/ Building name</label>
                        <input placeholder="e.g. Flat 101, Galaxy Appartment" />

                        <label>Street/ Area / Colony</label>
                        <input placeholder="e.g. MG Road, Indiranagar" />

                        <label>Landmark <span>(Optional)</span></label>
                        <input placeholder="e.g. Near City Hospital" />

                        <label>Pincode</label>
                        <input placeholder="e.g. 600001" />
                        <div className="form-row">
                            <div>
                                <label> City</label>
                                <input placeholder="e.g. Chennai" />
                            </div>


                            <div>
                                <label>State</label>
                                <input placeholder="e.g. Tamil Nadu" />
                            </div>

                            <div>
                                <label >Country</label>
                                <select>
                                    <option>India</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-row two">
                            <div>
                                <label>Phone Number</label>
                                <input placeholder="10 digit mobile number" />
                            </div>

                            <div>
                                <label>Whatsapp Number</label>
                                <input placeholder="10 digit mobile number" />
                            </div>

                            <div>
                                <label>Email Address</label>
                                <input placeholder="you@example.com" />
                            </div>

                        </div>

                        <label className="save-info">
                            Save this information for next time
                        </label>

                        <h2>Paymet Method</h2>
                        <div className="payment-box">
                            <input type="radio" defaultChecked />
                            <span>UPI, Cards, NetBanking</span>
                        </div>
                    </form>
                </div>

                <div className="checkout-right">
                    <h2>Order Summary</h2>

                    <div className="checkout-items">
                        {cart.map((item) => (

                            <div className="checkout-item" key={`${item.id}-${item.size}`}>
                                <img src={item.image} alt={item.name} />

                                <div className="checkout-item-info">
                                    <h4>{item.name}</h4>
                                    <p>Size: {item.size} &nbsp; | &nbsp; Qty: {item.quantity}</p>
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


                    <div className="checkout-icons">
                        <span><FiLock /> Secure Payment</span>
                        <span><FiTruck /> Free Shipping</span>
                        <span><FiAward /> Premium Quality</span>
                    </div>
                </div>
            </section>

        </>
    )
}