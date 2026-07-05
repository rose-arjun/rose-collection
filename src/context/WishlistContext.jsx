import React from "react";
import { createContext, useEffect, useState } from "react";


export const WishlistContext = createContext();

export default function WishlistProvider({ children })
{
    const [wishlist, setWishlist] = useState(() => {
        const savedWishlist = localStorage.getItem("wishlist");

        if (!savedWishlist || savedWishlist === "undefined") {
            return [];
        }
        try {
            return JSON.parse(savedWishlist);
        } catch {
            return [];
        }

    });

    useEffect(() => {
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }, [wishlist]);

    const addToWishlist = (product) => {
        setWishlist((prev) => {
            const alreadyExists = prev.some((item) => item.id === product.id);

            if (alreadyExists) {
                return prev;
            }
            return [...prev, product];
        });
    };

    const removeFromWishlist = (id) => {
        setWishlist((prev) => prev.filter((item) => item.id !== id));
    };

    const clearWishlist = () => {
        setWishlist([]);
    };

    const isInWishlist = (id) => {
        return wishlist.some((item) => item.id === id);
    };

    return (
        <WishlistContext.Provider
            value={{
                wishlist,
                addToWishlist,
                removeFromWishlist,
                clearWishlist,
                isInWishlist,
            }}

        >
            {children}
        </WishlistContext.Provider>
    );

}