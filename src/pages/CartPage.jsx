import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./cartpage.css"

export default function CartPage() {

    const { cart, removeFromCart } = useContext(CartContext);
    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity, 0
    );

    return (
        <>
            <div className="cart-banner">
                <h1>Shopping Cart</h1>
                <p>Home,Cart</p>
            </div>
            <div className="cart-page">
                {/* Left Side */}
                <div className="cart-left">
                    <div className="cart-header">
                        <p>Product</p>
                        <p>Price</p>
                        <p>Quanitity</p>
                        <p>Total</p>
                    </div>
                    {cart.map((item => (
                        <div className="cart-row" key={item.id}>
                            <div className="product-info">
                                <img src={item.image} alt={item.name} />
                                <div>
                                    <h4>{item.name}</h4>
                                    <p>Size:{item.size}</p>

                                    <button
                                        className="remove-btn"
                                        onClick={() => removeFromCart(item.id) }>
                                        Remove
                                    </button>
                                </div>
                            </div>
                            <p>₹{item.price}</p>
                            <div className="qty-box">
                                <button>-</button>
                                <span>{item.quantity}</span>
                                <button>+</button>
                            </div>
                            <p>₹{item.price * item.quantity}</p>
                        </div>
                    )))}

                </div>

                {/* Right Side */}
                <div className="order-summary">
                    <h2>Order Summary</h2>
                    <div className="summary-row">
                        <span>Subtotal</span>
                        <span>₹{total}</span>
                    </div>

                    <div className="summary-row">
                        <span>Shipping</span>
                        <span>FREE</span>
                    </div>


                    <div className="summary-row total-row">
                        <span>Total</span>
                        <span>₹{total}</span>
                    </div>

                    <button className="checkout-btn">
                        PROCEED TO CHECKOUT
                    </button>
                </div>
            </div>

        </>
    );
}