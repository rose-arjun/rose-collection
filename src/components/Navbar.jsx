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

import SearchOverlay from "./SearchOverlay";
import CartDrawer from "./CartDrawer";
import MobileMenu from "./MobileMenu";



export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("menu");
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity } = useContext(CartContext);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const cartTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );


  const [cartOpen, setCartOpen] = useState(false);

  const navigate = useNavigate();

  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

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
              onClick={() => setSearchOpen(true)}
              readOnly
            />

            <button className="search-btn"
              onClick={() => setSearchOpen(true)}>
              <FiSearch />
            </button>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="nav-section">
          <ul className="nav-links">
            <li onClick={()=> navigate("/")}>HOME</li>
            <li onClick={()=> navigate("/collections")}>SHOP ALL</li>
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
              onClick={() => setCartOpen(true)}>
              <FiShoppingCart />

              {totalItems > 0 && (
                <span className="cart-count">{totalItems}</span>
              )}

            </button>
          </div>
        </div>
      </header>

      {searchOpen && (
        <SearchOverlay
          search={search}
          setSearch={setSearch}
          filteredProducts={filteredProducts}
          setFilteredProducts={setFilteredProducts}
          setSearchOpen={setSearchOpen}
          navigate={navigate}
        />
      )}

      <CartDrawer
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
        cart={cart}
        totalItems={totalItems}
        cartTotal={cartTotal}
        removeFromCart={removeFromCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        navigate={navigate}
      />

      <MobileMenu
        open={open}
        setOpen={setOpen}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

    </>
  );
}