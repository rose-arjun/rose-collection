import { FiX } from "react-icons/fi";


import "./mobilemenu.css"
export default function MobileMenu({
  open,
  setOpen,
  activeTab,
  setActiveTab,
}) {
  if (!open) return null;

  return (
    <>
      <div className="overlay" onClick={() => setOpen(false)}></div>

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
  );
}