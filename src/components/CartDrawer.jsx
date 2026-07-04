
import "./CartDrawer.css";

export default function CartDrawer({
  cartOpen,
  setCartOpen,
  cart,
  totalItems,
  cartTotal,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  navigate,
}) {
  if (!cartOpen) return null;

  return (
    <>
      <div
        className="cart-overlay"
        onClick={() => setCartOpen(false)}
      ></div>

      <div className="cart-drawer">

        <div className="cart-drawer-header">
          <h3>Shopping Cart ({totalItems})</h3>

          <button onClick={() => setCartOpen(false)}>
            ×
          </button>
        </div>

        <div className="cart-drawer-items">

          {cart.length === 0 ? (
            <div className="drawer-empty">
              <h2>Your cart is empty</h2>
              <p>Add some beautiful products to your cart.</p>

              <button
                onClick={() => {
                  setCartOpen(false);
                  navigate("/");
                }}
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div
                className="cart-drawer-item"
                key={`${item.id}-${item.size}`}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  onClick={() => {
                    setCartOpen(false);
                    navigate(`/product/${item.id}`);
                  }}
                  style={{ cursor: "pointer" }}
                />

                <div className="drawer-content">

                  <h4>{item.name}</h4>

                  <p>Size: {item.size}</p>

                  <strong>₹{item.price}</strong>

                  <div className="drawer-qty">

                    <button
                      onClick={() =>
                        decreaseQuantity(item.id, item.size)
                      }
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        increaseQuantity(item.id, item.size)
                      }
                    >
                      +
                    </button>

                  </div>

                  <button
                    className="drawer-remove"
                    onClick={() =>
                      removeFromCart(item.id, item.size)
                    }
                  >
                    Remove
                  </button>

                </div>
              </div>
            ))
          )}

        </div>

        {cart.length > 0 && (
          <div className="cart-drawer-footer">

            <div className="drawer-total">
              <span>Subtotal</span>
              <strong>₹{cartTotal}</strong>
            </div>

            <button
              onClick={() => {
                setCartOpen(false);
                navigate("/cart");
              }}
            >
              VIEW CART
            </button>

            <button
              onClick={() => {
                setCartOpen(false);
                navigate("/checkout");
              }}
            >
              CHECKOUT
            </button>

          </div>
        )}

      </div>
    </>
  );
}