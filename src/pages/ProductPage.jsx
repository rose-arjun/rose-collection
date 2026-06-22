import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { useState, useContext } from "react";
import "./productpage.css";
import { CartContext } from "../context/CartContext";
export default function ProductPage() {

    const { id } = useParams();
    const product = products.find(
        (item) => item.id === Number(id)
    );

    if (!product) {
        return <h1>Product Not Found</h1>;
    }


    const relatedProducts=products.filter((item)=>item.id !==product.id).slice(0,4);


    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState("");
    const [openSection, setOpenSection] = useState("");
    const { addToCart } = useContext(CartContext);

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







    return (
        <div className="product-page">
            {/* Left side-product image */}

            <div className="product-image">
                <img src={product.image} alt={product.name} />
            </div>

            {/* Right Side- Product Details */}

            <div className="product-info">
                <h1>{product.name}</h1>
                <h2>Rs.{product.price}.0</h2>
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
                    <h3>Quanitity</h3>
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
                        onClick={handleAddToCart}
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
        

        









    );



}
