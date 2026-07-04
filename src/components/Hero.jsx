import React, { useEffect, useState } from "react";
import "./hero.css";
import "../pages/CategoryPage"
import { useNavigate } from "react-router-dom";
export default function Hero() {

  const images = [
    "/h1.jpg",
    "/h2.jpg",
    "/h3.jpg",
    "/h4.jpg",
  ];

  const [index, setIndex] = useState(0);

  const navigate=useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
  }, 5000);

    return () => clearInterval(interval);
  },[]);

  return (
    <section className="hero">
      <img className="hero-bg" src={images[index]} alt="hero" />
      <div className="hero-content">
        <h1>New Collection Arrived..</h1>
        <p>Elegant Western & Ethnic Wear for Every Occasion</p>

        <button
        onClick={()=>{
          navigate("/collections")}
        }>Shop Now</button>
      </div>
    </section>
  );
}