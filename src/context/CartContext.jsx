import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

function CartProvider({children}) {
    const [cartItems, setCartIteams] = useState([]);
    const [productList, setProducts] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            const responce = await fetch(`https://dummyjson.com/products`);
            const data = await responce.json();
            console.log(data)
            setProducts(data.products);
        }
        fetchData();
    }, [])

    const value= {
        cartItems,
        setCartIteams,
        productList
    }

    return (
        <CartContext value={value}>
            {children}
        </CartContext>
    )
}


export default CartProvider;