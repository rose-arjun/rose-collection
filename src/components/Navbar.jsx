import { useContext, useState } from "react";
import "./navbar.css";
import { useNavigate } from "react-router-dom";
import {
  FiSearch,
  FiHeart,
  FiShoppingCart,
  FiMenu,
  FiX,
  FiUser,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { CartContext } from "../context/CartContext";
import { products } from "../data/products"



export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("menu");





  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity } = useContext(CartContext)

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const cartTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );


  const [cartOpen, setCartOpen] = useState(false)

  const navigate = useNavigate();


  const [search, setSearch] = useState("");
   const [filteredProducts, setFilteredProducts] = useState([])

  // console.log(filteredProducts);

  //

  const handleSearch = (e) => {
    const value = e.target.value;

    setSearch(value);

    if (value.trim() === "") {
      setFilteredProducts([]);
      return;
    }
    const result = products.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredProducts(result);
  }

   const [searchOpen,setSearchOpen]=useState(false)
































  return (
    <>
      <a
        className="top-bar"
        href="https://wa.me/917812863679"
        target="_blank"
        rel="noopener noreferrer"
      >
        For International Orders:
        <FaWhatsapp className="wa-icon" />
        7812863679
      </a>

      <header className="navbar">

        {/* Mobile Menu Button */}
        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>

        {/* Logo */}
        <div className="logo-section">
          <div className="logo">ASH-ROSH</div>
        </div>

        {/* Search */}
        <div className="search-section">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search here for all products"
              onFocus={()=>setSearchOpen(true)}
              />
              {searchOpen && (
  <div className="search-overlay">
    <div className="search-modal">

      <div className="search-modal-top">
        <div className="search-modal-box">
          <FiSearch />
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={handleSearch}
            autoFocus
          />
        </div>

        <button
          className="search-close"
          onClick={() => {
            setSearchOpen(false);
            setSearch("");
            setFilteredProducts([]);
          }}
        >
          ×
        </button>
      </div>

      <div className="search-modal-grid">
        {filteredProducts.map((item) => (
          <div
            className="search-product-card"
            key={item.id}
            onClick={() => {
              navigate(`/product/${item.id}`);
              setSearchOpen(false);
              setSearch("");
              setFilteredProducts([]);
            }}
          >
            <img src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
            <p>Rs. {item.price}</p>
          </div>
        ))}
      </div>

      {search && filteredProducts.length === 0 && (
        <p className="no-search">No products found</p>
      )}

    </div>
  </div>
)}
             
            <button className="search-btn" onClick={()=> setSearchOpen(true)}>
              <FiSearch />
            </button>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="nav-section">
          <ul className="nav-links">
            <li>HOME</li>
            <li>SHOP ALL</li>
            <li>CONTACT</li>
          </ul>

          <div className="icon-group">
            <button className="icon-button">
              <FiUser />
            </button>


            <button className="icon-button">
              <FiHeart />
            </button>

            <button
              className="icon-button"
              style={{ position: "relative" }}
              onClick={() => setCartOpen(true)}>
              <FiShoppingCart />

              {totalItems > 0 && (
                <span className="cart-count">{totalItems}</span>
              )}

            </button>
          </div>
        </div>
      </header>

      {cartOpen && (
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
              {cart.map((item) => (
                <div className="cart-drawer-item" key={`${item.id}-${item.size}`}>
                  <img src={item.image} alt={item.name}
                    onClick={() => {
                      setCartOpen(false)
                      navigate(`/product/${item.id}`)
                    }}
                    style={{ cursor: "pointer" }}
                  />

                  <div>
                    <h4>{item.name}</h4>
                    <p>Size: {item.size}</p>
                    <strong>₹{item.price}</strong>

                    <div className="drawer-qty">
                      <button onClick={() => decreaseQuantity(item.id, item.size)}>
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => increaseQuantity(item.id, item.size)}>
                        +
                      </button>
                    </div>
                  </div>

                  <button
                    className="drawer-remove"
                    onClick={() => removeFromCart(item.id, item.size)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-drawer-footer">
              <div>
                <span>Subtotal</span>
                <strong>₹{cartTotal}</strong>
              </div>

              <button onClick={() => {
                setCartOpen(false)
                navigate("/cart")
              }}>
                VIEW CART
              </button>
              <button onClick={() => {
                setCartOpen(false)
                navigate("/checkout")
              }}>
                CHECKOUT
              </button>
            </div>
          </div>
        </>
      )}


























      {open && (
        <>
          <div
            className="overlay"
            onClick={() => setOpen(false)}
          ></div>

          <div className="mobile-menu">

            <div className="menu-header">
              <h2>Menu</h2>

              <button onClick={() => setOpen(false)}>
                <FiX />
              </button>
            </div>

            <div className="menu-tabs">

              <button
                className={activeTab === "menu" ? "active-tab" : ""}
                onClick={() => setActiveTab("menu")}
              >
                Menu
              </button>

              <button
                className={activeTab === "categories" ? "active-tab" : ""}
                onClick={() => setActiveTab("categories")}
              >
                Categories
              </button>

            </div>

            <div className="menu-links">

              {activeTab === "menu" ? (
                <>
                  <button className="mobile-link">Home</button>
                  <button className="mobile-link">Shop All</button>
                  <button className="mobile-link">Contact</button>
                  <button className="mobile-link">My Account</button>
                  <button className="mobile-link">Wishlist</button>
                </>
              ) : (
                <>
                  <button className="mobile-link">Sarees</button>
                  <button className="mobile-link">Kurtis</button>
                  <button className="mobile-link">Lehengas</button>
                  <button className="mobile-link">Gowns</button>
                  <button className="mobile-link">Party Wear</button>
                </>
              )}

            </div>

          </div>
        </>
      )}
    </>
  );
}