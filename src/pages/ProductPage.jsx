import { useNavigate, useParams } from "react-router-dom";
import { products } from "../data/products";
import { useEffect, useState, useContext } from "react";
import "./productpage.css";
import { CartContext } from "../context/CartContext";
import { FiHeart } from "react-icons/fi";
import { WishlistContext } from "../context/WishlistContext";
import { FaRegHeart, FaHeart } from "react-icons/fa";

export default function ProductPage() {

    const { id } = useParams();
    const navigate = useNavigate();
    const product = products.find(
        (item) => item.id === Number(id)
    );

    if (!product) {
        return <h1>Product Not Found</h1>;
    }


    const relatedProducts = products
        .filter((item) => item.id !== product.id)
        .slice(0, 4);

    // console.log(relatedProducts);


    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState("");
    const [openSection, setOpenSection] = useState("");
    const { addToCart } = useContext(CartContext);
    const {
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
    } = useContext(WishlistContext);





    const handleAddToCart = () => {
        if (!size) {
            alert("Please select size..");
            return;
        }
        addToCart({
            ...product,
            quantity,
            size,
        });
    };

    const toggleSection = (section) => {
        if (openSection === section) {
            setOpenSection("")
        } else {
            setOpenSection(section)
        }
    };


    useEffect(() => {
        setQuantity(1);
        setSize("");
        setOpenSection("");
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, [id]);


    const handleWishlist = () => {
        if (isInWishlist(product.id)) {
            removeFromWishlist(product.id);
        } else {
            addToWishlist(product);
        }
    };





    const toggleWishlist = (product) => {
        if (isInWishlist(product.id)) {
            removeFromWishlist(product.id);
        } else {
            addToWishlist(product)
        }
    };

    const {openCart}=useContext(CartContext);




    return (

        <>
            <div className="product-page">
                {/* Left side-product image */}

                <div className="product-image-box">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="product-image"
                    />

                    <button
                        className="wishlist-btn"
                        onClick={() => {
                            if (isInWishlist(product.id)) {
                                removeFromWishlist(product.id);
                            } else {
                                addToWishlist(product);
                            }
                        }}
                    >
                        {isInWishlist(product.id) ? (
                            <FaHeart color="#ff4d8d" />
                        ) : (
                            <FaRegHeart />
                        )}
                    </button>
                </div>


                {/* Right Side- Product Details */}

                <div className="product-info">

                    <h1>{product.name}</h1>
                    <h2>Rs.{product.price}.00</h2>
                    <p>Color: Red</p>

                    <div className="product-size">
                        <h3>Size</h3>
                        <div className="sizes">
                            {
                                ["S", "M", "L", "XL"].map((item) => (
                                    <button
                                        key={item}
                                        className={size === item ? "active-size" : ""}
                                        onClick={() => setSize(item)}
                                    >
                                        {item}

                                    </button>
                                ))
                            }
                        </div>
                    </div>

                    <div className="product-quantity">
                        <h3>Quantity</h3>
                        <div className="quantity-box">
                            <button
                                onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                            >
                                -
                            </button>
                            <span>{quantity}</span>
                            <button
                                onClick={() => setQuantity(quantity + 1)}>
                                +
                            </button>
                        </div>
                    </div>

                    <div className="button-group">


                        <button
                            className="cart-btn"
                            onClick={handleAddToCart}
                        >ADD TO CART
                        </button>
                        <button
                            className="buy-btn"
                            onClick={() => {
                                handleAddToCart()
                                navigate("/checkout")
                            }}

                        >BUY NOW
                        </button>
                    </div>

                    <div className="product-extra">
                        <div
                            className="accordion-title"
                            onClick={() => toggleSection("details")}
                        >
                            <span>Product Details</span>
                            <span>{openSection === "details" ? "-" : "+"}</span>
                        </div>

                        {
                            openSection === "details" && (
                                <div className="accordion-content">
                                    <p>Premium Cotton Fabric</p>
                                    <p>Regular Fit</p>
                                    <p>Soft & Comfortable</p>
                                </div>
                            )
                        }
                        <div
                            className="accordion-title"
                            onClick={() => toggleSection("shipping")}
                        >
                            <span>Shipping & Returns</span>
                            <span>{openSection === "shipping" ? "−" : "+"}</span>
                        </div>

                        {openSection === "shipping" && (
                            <div className="accordion-content">
                                <p>Free shipping on orders above ₹999.</p>
                                <p>Easy 7-day returns.</p>
                            </div>
                        )}

                        <div
                            className="accordion-title"
                            onClick={() => toggleSection("size")}
                        >
                            <span>Size & Fit</span>
                            <span>{openSection === "size" ? "−" : "+"}</span>
                        </div>

                        {openSection === "size" && (
                            <div className="accordion-content">
                                <p>Model is wearing Size M.</p>
                                <p>Regular Fit.</p>
                            </div>
                        )}

                        <div
                            className="accordion-title"
                            onClick={() => toggleSection("wash")}
                        >
                            <span>Wash Care</span>
                            <span>{openSection === "wash" ? "−" : "+"}</span>
                        </div>

                        {openSection === "wash" && (
                            <div className="accordion-content">
                                <p>Machine wash cold.</p>
                                <p>Do not bleach.</p>
                            </div>
                        )}
                    </div>





                </div>

            </div>

            <section className="related-products">
                <h2>Recommended Products</h2>

                <div className="related-grid">
                    {relatedProducts.map((item) => (
                        <div className="related-card" key={item.id}>
                            <div className="related-img-box">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    onClick={() => navigate(`/product/${item.id}`)}
                                />

                                <button
                                    className="related-heart"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        toggleWishlist(item);
                                    }}
                                    
                                >
                                    {isInWishlist(item.id) ? (
                                        <FaHeart color="#ff4d8d" />
                                    ) : (
                                        <FaRegHeart />
                                    )}
                                </button>
                            </div>

                            <h3 onClick={() => navigate(`/product/${item.id}`)}>
                                {item.name}
                            </h3>

                            <p>₹{item.price}</p>

                            <button
                                className="related-add-cart"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    addToCart({
                                        ...item,
                                        quantity: 1,
                                        size: "M",
                                    });
                                    openCart();
                                }}
                            >
                                ADD TO CART
                            </button>
                        </div>
                    ))}
                </div>
            </section>





        </>











    );



}
