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

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("menu");
  const { cart } = useContext(CartContext)
  const navigate=useNavigate();

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
            />
            <button className="search-btn">
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

            <button className="icon-button" 
            style={{ position: "relative" }}
            onClick={()=>{
            console.log("Cart Clicked");
             navigate("/cart");}}>
              <FiShoppingCart />

              {cart.length > 0 && (
                <span className="cart-count">
                  {cart.length}
                </span>
              )}
              </button>
          </div>
        </div>
      </header>

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