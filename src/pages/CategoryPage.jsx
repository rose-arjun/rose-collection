import { useParams } from "react-router-dom";

import "./categorypage.css";
import { products } from "../data/products";
import { useNavigate } from "react-router-dom";



export default function CategoryPage() {
    const { name } = useParams();

    const filteredProducts = products.filter(
        (product) => product.category === name);
    const navigate=useNavigate();

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

                <label >
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
      <div 
      className="product-card" 
      key={product.id}
      onClick={()=>navigate(`/product/${product.id}`)}>
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>₹{product.price}</p>
      </div>
    ))}
  </div>

</section>        </div>

    );
}