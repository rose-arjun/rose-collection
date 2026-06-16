import React from "react";
import "../components/new-arrivals.css";

const products = [
    {
        id: 1, title: "Yazhi 3 pc set", price: "Rs. 2,499", img: "/p1.png"
    },
    { id: 2, title: "Rose Gown", price: "Rs. 749", img: "/p2.png"  },
    { id: 3, title: "Blue Silk Saree", price: "Rs. 849", img: "/p3.png"  },
    { id: 4, title: "Green 2 pc set", price: "Rs. 699", img: "/p4.png" },
];
export default function NewArrivals() {
    return (
        <section className="new-arrivals">
            <h2 className="section-title">New Arrivals 🔥</h2>
            <div className="product-grid">
                {products.map(p => (
                    <article key={p.id} className="product-card">
                        <div className="product-thumb">
                            <img src={p.img} alt={p.title} />
                        </div>
                        <h3 className="product-title">{p.title}</h3>
                        <div className="product-price">{p.price}</div>
                        

                    </article>
                ))}
            </div>
        </section>
    );
}