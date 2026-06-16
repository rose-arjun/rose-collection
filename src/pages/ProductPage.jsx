import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { useState, useContext } from "react";
import "./productpage.css";
import { CartContext } from "../context/CartContext";

export default function ProductPage()
{

    const {id}=useParams();
    const product=products.find(
        (item )=> item.id===Number(id)
    );

    const [quantity,setQuantity]=useState(1);
    const [size,setSize]=useState("");
    const { addToCart } = useContext(CartContext);

    const handleAddToCart = () => {
    if (!size) {
      alert("Please select size");
      return;
    }

    addToCart({
        ...product,
        quantity,
        size});
    }

    return(
        <div className="product-page">
            <div className="product-image">
            <img 
            src={product.image}
            alt={product.name}
            />
            </div>
            <div className="product-info">
            <h1>{product.name}</h1>
            <h2>₹{product.price}</h2>
            <p>Color: Red</p>
            <h3>Size</h3>
            <div className="sizes">
                {["S","M","L","XL"].map((item)=>(
                    <button
                    key={item}
                    className={size===item? "active-size":""}
                    onClick={()=>setSize(item)}
                    >
                        {item}
                    </button>
                ))}
            </div>

            <h3>Quantity</h3>
            <div className="quantity-box">
                <button onClick={()=>quantity>1 && setQuantity(quantity-1)}
                >
                    -
                </button>
                <span>{quantity}</span>
                <button
                onClick={()=>
                    setQuantity(quantity+1)
                }>
                    +
                </button>
            </div>
            <button className="cart-btn" onClick={handleAddToCart}>
                ADD TO CART
            </button>
            <button className="buy-btn">
                BUY NOW
            </button>


            </div>
            
        </div>

    );
}