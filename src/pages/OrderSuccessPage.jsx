import "./ordersuccesspage.css";
import { Link } from "react-router-dom";
import { FiCheckCircle } from "react-icons/fi";

export default function OrderSuccessPage() {
  return (
    <div className="success-page">

      <div className="success-card">

        <FiCheckCircle className="success-icon"/>

        <h1>Order Placed Successfully!</h1>

        <p>
          Thank you for shopping with <strong>ASH-ROSH</strong>.
          Your order has been placed successfully.
        </p>

        <div className="success-buttons">

          <Link to="/">
            <button className="home-btn">
              Continue Shopping
            </button>
          </Link>

          <Link to="/cart">
            <button className="cart-btn-success">
              View Cart
            </button>
          </Link>

        </div>

      </div>

    </div>
  );
}