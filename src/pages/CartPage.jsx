import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import {Link} from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import "./cartpage.css"
import { useNavigate } from "react-router-dom";
export default function CartPage() {

    const { cart, removeFromCart,increaseQuantity,decreaseQuantity } = useContext(CartContext);
    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity, 0
    );
    
    const navigate=useNavigate();

    if(cart.length===0){
    return (
            <div className="empty-cart">
                <div className="empty-cart-box">

                    <div className="empty-icon">
                        <FiShoppingBag/>
                    </div>

                    <h2>Your cart is empty</h2>
                    <p>
                        Looks like you haven't added anything to your cart yet.
                    </p>

                    <Link to="/">
                        <button className="continue-btn">
                            CONTINUE SHOPPING
                        </button>
                    </Link>
                </div>
                
            </div>
            );
            }
    return(
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
                        <div className="cart-row" key={`${item.id}-${item.size}`}>
                            <div className="cart-product">
                                <img src={item.image} alt={item.name} />
                                <div>
                                    <h4>{item.name}</h4>
                                    <p>Size:{item.size}</p>

                                    <button
                                        className="remove-btn"
                                        onClick={() => removeFromCart(item.id,item.size) }
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>

                            <p className="cart-price">₹{item.price}</p>
                            <div className="qty-box">
                                <button 
                                onClick={()=>decreaseQuantity(item.id, item.size)}>
                                    -
                                </button>
                                <span>{item.quantity}</span>
                                <button 
                                onClick={()=>increaseQuantity(item.id,item.size)}>
                                    +
                                </button>
                            </div>
                            <p className="cart-total">₹{item.price * item.quantity}</p>
                        </div>
                    )))}

                </div>

                {/* Right Side */}
                <div className="order-summary">
                    <h2>Order Summary</h2>
                    <div className="summary-row">
                        <span>Subtotal({cart.length}) items</span>
                        <span>₹{total}</span>
                    </div>

                    <div className="summary-row">
                        <span>Shipping</span>
                        <span className="free-text">FREE</span>
                    </div>

                    <div className="summmary-row">
                        <span>Tax</span>
                        <span>Calculated at checkout</span>

                    </div>
                    <div className="summary-row total-row">
                        <span>Total</span>
                        <span>₹{total}</span>
                    </div>

                    <button className="checkout-btn" onClick={()=> navigate("/checkout")}>
                        PROCEED TO CHECKOUT
                    </button>
                    <p className="summary-note">Shipping & taxes calculated at checkout</p>
                </div>
            </div>

        </>
    );
}
