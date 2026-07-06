import React from "react";
import "../ProductCard/productcard.css"
import { FaHeart,FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";



export default function ProductCart({
    product,
    navigate,
    toggleWishlist,
    isInWishlist,
})
{

    return(
         <div className="product-card">

                <div
                  className="product-img-box"
                  onClick={() => navigate(`/product/${product.id}`)}
                >

                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />

                  {/* Hover Icons */}

                  <div className="hover-icons">

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

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/product/${product.id}`);
                      }}
                    >
                      <FiShoppingCart />
                    </button>

                  </div>

                  {/* Add Cart */}

                  <button
                    className="add-cart-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/product/${product.id}`);
                    }}
                  >
                    ADD TO CART
                  </button>

                </div>

                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p>Rs. {product.price}</p>
                </div>

              </div>

    )
}