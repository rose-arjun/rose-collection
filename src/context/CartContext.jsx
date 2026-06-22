import {createContext, useState } from "react";

export const CartContext=createContext();

export default function CartProvider({children})
{
    const [cart,setCart]=useState([]);

    const addToCart=(product)=>{
        console.log(product)
        setCart([...cart,product]);
    };
    const removeFromCart=(id)=>{
        setCart((prev)=>prev.filter((item)=>item.id !==id));
    };
    return (
        <CartContext.Provider
        
        value={
            {cart,
                addToCart,
                removeFromCart
            }
        }
        >
{children}
        </CartContext.Provider>
    );

}