import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import "./categorypage.css";
import { products } from "../data/products";
import { FiShoppingCart } from "react-icons/fi";
import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";

export default function CategoryPage() {
  const { name } = useParams();
  const navigate = useNavigate();
  const {
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  }=useContext(WishlistContext)

  

  const filteredProducts = products.filter(
    (product) => product.category === name
  );

  const toggleWishlist = (product) => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product)
    }
  };

  return (
    <div className="category-page">
      <aside className="sidebar">
        <h3>Categories</h3>

        <p>Anarkali</p>
        <p>Sarees</p>
        <p>Kurti</p>
        <p>Lehenga</p>
        <p>Best Seller</p>
        <p>Gown</p>
        <p>Summer Kurti</p>
        <p>Party Wear</p>
        <p>Sharara Set</p>
        <p>Total Products</p>

        <h3>Availability</h3>

        <label>
          <input type="checkbox" />
          In Stock
        </label>
      </aside>

      <section className="products-section">
        <div className="category-title">
          <h1>{name}</h1>
        </div>

        <div className="page-top">
          <p>{filteredProducts.length} Products</p>

          <select>
            <option>Featured</option>
            <option>Price Low to High</option>
          </select>
        </div>

        <div className="products-grid">
          {filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <div
                className="product-img-box"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                <img 
                className="product-image"
                src={product.image} 
                alt={product.name} 
                />

                <div className="hover-icons">
                  {/* Wishlist */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleWishlist(product);
                    }}
                  >
                    {isInWishlist(product.id) ? (
                      <FaHeart color="#ff4d8d" />
                    ) : (
                      <FaRegHeart />
                    )}
                  </button>

                  {/* Cart */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/product/${product.id}`)
                    }}
                  >
                    <FiShoppingCart />
                  </button>
                </div>

                {/* Add To Cart */}
                <button
                  className="add-cart-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/product/${product.id}`)
                   
                    
                  }}
                >
                  ADD TO CART
                </button>
              </div>
              <div className="product-info">
              <h3>{product.name}</h3>
              <p>₹{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}