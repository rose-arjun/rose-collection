import { useState, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import "./categorypage.css";
import { products } from "../data/products";
import { WishlistContext } from "../context/WishlistContext";

import ProductCard from "../components/ProductCard/ProductCard"
export default function CategoryPage() {
  const { name } = useParams();
  const navigate = useNavigate();

  const {
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  } = useContext(WishlistContext);

  const [showFilter, setShowFilter] = useState(false);

  // Lock body scroll when filter drawer opens
  useEffect(() => {
    if (showFilter) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showFilter]);

  const filteredProducts =
    name === "all"
      ? products
      : products.filter((product) => product.category === name);

  const toggleWishlist = (product) => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const categories = [
    { label: "All Products", value: "all" },
    { label: "Anarkali", value: "anarkali" },
    { label: "Sarees", value: "sarees" },
    { label: "Kurti", value: "kurti" },
    { label: "Lehenga", value: "lehenga" },
    { label: "Best Seller", value: "best-seller" },
    { label: "Gown", value: "gown" },
    { label: "Summer Kurti", value: "summer-kurti" },
    { label: "Party Wear", value: "party-wear" },
    { label: "Sharara Set", value: "sharara-set" },
  ];

  return (
    <>
      {/* Overlay */}

      {showFilter && (
        <div
          className="overlay"
          onClick={() => setShowFilter(false)}
        ></div>
      )}

      <div className="category-page">

        {/* Sidebar */}

        <aside className={`sidebar ${showFilter ? "active" : ""}`}>

          <div className="sidebar-header">
            <h3>Categories</h3>

            <button
              className="close-btn"
              onClick={() => setShowFilter(false)}
            >
              <FiX />
            </button>
          </div>

          {categories.map((cat) => (
            <p
              key={cat.value}
              className={name === cat.value ? "active-category" : ""}
              onClick={() => {
                navigate(`/collections/${cat.value}`);
                setShowFilter(false);
              }}
            >
              {cat.label}
            </p>
          ))}

          <h3>Availability</h3>

          <label className="stock-check">
            <input type="checkbox" />
            In Stock
          </label>

        </aside>

        {/* Products */}

        <section className="products-section">

          <div className="category-title">
            <h1>
              {name === "all"
                ? "ALL PRODUCTS"
                : name.replace("-", " ").toUpperCase()}
            </h1>
          </div>

          {/* Top */}

          <div className="page-top">

            <button
              className="filter-btn"
              onClick={() => setShowFilter(true)}
            >
              <FiMenu />
              FILTER
            </button>

            <p>{filteredProducts.length} Products</p>

            <select>
              <option>Best Selling</option>
              <option>Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Name: A to Z</option>
              <option>Name: Z to A</option>
            </select>

          </div>

          {/* Grid */}

          <div className="products-grid">

            {filteredProducts.map((product) => (
             
             <ProductCard
              key={product.id}
              product={product}
              navigate={navigate}
              toggleWishlist={toggleWishlist}
              isInWishlist={isInWishlist}
            
              />
            ))}

          </div>

        </section>

      </div>
    </>
  );
}