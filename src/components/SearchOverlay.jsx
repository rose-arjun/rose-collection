import React from "react";
import { FiSearch } from "react-icons/fi";
import { products } from "../data/products";
import "./searchoverlay.css"

export default function SearchOverlay({
    search,
    setSearch,
    filteredProducts,
    setFilteredProducts,
    setSearchOpen,
    navigate, }) {

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearch(value);

        if (value.trim().length < 2) {
            setFilteredProducts([]);
            return;
        }

        const result = products.filter(
            (item) =>
                item.name.toLowerCase().includes(value.toLowerCase()) ||
                item.category.toLowerCase().includes(value.toLowerCase())

        );
        setFilteredProducts(result);

    };

    const closeSearch = () => {
        setSearchOpen(false);
        setSearch("");
        SetFilteredProducts([]);
    };

    const handleTagClick=(tag)=>{
        setSearch(tag);


     

        const result = products.filter(
            (item) =>
                item.name.toLowerCase().includes(tag.toLowerCase()) ||
                item.category.toLowerCase().includes(tag.toLowerCase())

        );
        setFilteredProducts(result);
    };


    return (
        <div className="search-overlay" onClick={closeSearch}>
            <div className="search-modal" onClick={(e)=>e.stopPropagation()}>
                <div className="search-header">
                    <div className="search-input-box">
                        <FiSearch/>
                        <input 
                        type="text"
                        placeholder="Search for products...."
                        value={search}
                        onChange={handleSearch}
                        autoFocus 
                        />
                    </div>
                    <button className="close-search" onClick={closeSearch}>
                         ×
                    </button>
                </div>

                {
                    search.length < 2 ? (
                        <div className="search-default">
                            <h4>TRENDING SEARCHES</h4>
                            
                            
                            <div className="tag-list">
                                <span onClick={()=>handleTagClick("Kurti")}>Kurta Sets</span>
                                <span onClick={()=>handleTagClick("Lehenga")}>Lehenga</span>
                                <span onClick={()=>handleTagClick("Sarees")}>Sarees</span>
                                <span onClick={()=>handleTagClick("Gown")}>Gowns</span>
                                <span onClick={()=>handleTagClick("Best Seller")}>Best Sellers</span>
                            </div>

                            <h4>RELATED SEARCHES</h4>

                            <div className="tag-list related">
                                <span>Wedding Collection</span>
                                <span>Party Wear</span>
                                <span>Casual Ethnic</span>
                                <span>New Arrivals</span>
                            </div>

                            <p className="search-note">
                                Type at least 2 characters to search
                            </p>
                        </div>
                    ) : (
                        <div className="search-result-grid">
                            {filteredProducts.length > 0 ?(
                                filteredProducts.map((item)=>(
                                    <div
                                    className="search-result-card"
                                    key={item.id}
                                    onClick={()=>{
                                        navigate(`/product/${item.id}`);
                                        closeSearch();
                                    }}
                                    >
                                        <img src={item.image} alt={item.name} />
                                        
                                        <div>
                                            <h4>{item.name}</h4>
                                            <p>{item.category}</p>
                                            <strong>₹{item.price}</strong>
                                        </div>
                                    </div>
                                ))
                            ) :(
                                <p className="no-search">No products found</p>
                            )}
                        </div>
                    )
                }

            </div>

        </div>
    );

}
