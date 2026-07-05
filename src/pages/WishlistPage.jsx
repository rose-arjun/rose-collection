import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./wishlistpage.css"
import { FaRegHeart } from "react-icons/fa";


export default function WishlistPage() {
    const { wishlist, removeFromWishlist, clearWishlist } = useContext(WishlistContext);
    const { addToCart,openCart } = useContext(CartContext);

    const navigate = useNavigate();

    if (wishlist.length === 0) {
        return (
            <div className="empty-wishlist-page">
                <FaRegHeart className="empty-wishlist-icon" />
                <h2>Your wishlist is empty</h2>
                <p>Save items you love by clicking the heart icon on
                    <br />
                    products.</p>

                <button onClick={() => navigate("/collections")}>
                    Continue Shopping
                </button>
            </div>
        );
    }

    const handleAddAll = () => {
        wishlist.forEach((item) => {
            addToCart({
                ...item,
                quantity: 1,
                size: "M"
            })
        })
    }




    return (
        <>

            <div className="wishlist-banner">
                <h1>My Wishlist</h1>
                <p>Home &gt; Wishlist ({wishlist.length} items)</p>
            </div>

            <div className="wishlist-page">
                <div className="wishlist-top">
                    <h3>{wishlist.length} items in your wishlist</h3>

                    <div className="wishlist-actions">
                        <button onClick={clearWishlist}>CLEAR WISHLIST</button>
                        <button 
                        className="add-all-btn"
                        onClick={()=>{
                            wishlist.forEach((product)=>{
                                addToCart({
                                    ...product,
                                    quantity:1,
                                    size: product.size || "M",
                                });
                            });
                            clearWishlist();
                            openCart();
                        }}
                        >ADD ALL TO CART</button>
                    </div>
                </div>

                <div className="wishlist-grid">
                    {wishlist.map((product) => (
                        <div className="wishlist-card" key={product.id}>
                            <button
                                className="wishlist-close"
                                onClick={() => removeFromWishlist(product.id)}
                            >
                                ×
                            </button>

                            <div className="wishlist-image">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    onClick={() => navigate(`/product/${product.id}`)}
                                />
                            </div>

                            <div className="wishlist-info">
                                <h3 onClick={() => navigate(`/product/${product.id}`)}>
                                    {product.name}
                                </h3>

                                <p>Rs. {product.price}.00</p>

                                <button 
                                className="wishlist-cart-btn"
                                onClick={()=>{
                                    addToCart({
                                        ...product,
                                        quantity: 1,
                                        size: product.size || "M",
                                    });
                                    removeFromWishlist(product.id);
                                    openCart();
                                }}>
                                    ADD TO CART
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <button className="wishlist-continue" onClick={() => navigate("/")}>
                    CONTINUE SHOPPING
                </button>
            </div>
        </>
    );
}