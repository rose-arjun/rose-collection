import {createContext, useState } from "react";

export const CartContext=createContext();

export default function CartProvider({children})
{
    const [cart,setCart]=useState([]);



    const addToCart=(product)=>{
        setCart((prev)=>{
            const existingItem=prev.find(
                (item)=>
                    item.id===product.id &&
                    item.size=== product.size
            );
            if(existingItem){
                return prev.map((item)=>
                item.id === product.id &&
                item.size === product.size
                ?{
                    ...item,
                    quantity: item.quantity+product.quantity

                }
                : item
                );
            }
            return [...prev, product]
        })    
    };










    const removeFromCart=(id,size)=>{
        setCart((prev)=>
            prev.filter((item)=>!(item.id ===id && item.size === size)))};

    const increaseQuantity=(id,size)=>{
        setCart((prev)=>
        prev.map((item)=>
        item.id===id && item.size === size 
        ?{...item, quantity: item.quantity+1}
        :item
    )
    );
    };

    const decreaseQuantity=(id,size)=>{
        setCart((prev)=>
        prev.map((item)=>
        item.id===id && item.size === size && item.quantity>1
        ?{...item, quantity: item.quantity-1}
        :item
    )
    );
    };
    return (
        <CartContext.Provider
        
        value={
            {
                cart,
                addToCart,
                removeFromCart,
                increaseQuantity,
                decreaseQuantity
            }
        }
        >
{children}
        </CartContext.Provider>
    );

}