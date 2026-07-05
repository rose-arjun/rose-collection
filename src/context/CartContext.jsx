import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("cart");

        if (!savedCart || savedCart === "underfined") {
            return [];
        }

        try {
            return JSON.parse(savedCart);
        } catch (error) {
            return []
        }
    });


    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart])

    const addToCart = (product) => {
        setCart((prev) => {
            const existingItem = prev.find(
                (item) =>
                    item.id === product.id &&
                    item.size === product.size
            );
            if (existingItem) {
                return prev.map((item) =>
                    item.id === product.id &&
                        item.size === product.size
                        ? {
                            ...item,
                            quantity: item.quantity + product.quantity

                        }
                        : item
                );
            }
            return [...prev, product]
        })

    };
    const removeFromCart = (id, size) => {
        setCart((prev) =>
            prev.filter((item) => !(item.id === id && item.size === size)))
    };

    const increaseQuantity = (id, size) => {
        setCart((prev) =>
            prev.map((item) =>
                item.id === id && item.size === size
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };

    const decreaseQuantity = (id, size) => {
        setCart((prev) =>
            prev.map((item) =>
                item.id === id && item.size === size && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };


    const clearCart = () => {
        setCart([]);
    }


    const [cartOpen, setCartOpen] = useState(false);

    const openCart = () => setCartOpen(true);
    const closeCart = () => setCartOpen(false);
    return (
        <CartContext.Provider

            value={{
                cart,
                addToCart,
                removeFromCart,
                increaseQuantity,
                decreaseQuantity,
                clearCart,
                cartOpen,
                setCartOpen,
                openCart,
                closeCart
            }}
        >
            {children}
        </CartContext.Provider>
    );

}