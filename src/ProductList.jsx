import { useEffect, useContext } from "react";
import {CartContext} from './context/CartContext';
import './index.css'

function ProductList(){
    const {cartItems, setCartIteams, productList} = useContext(CartContext);

    console.log("cartItems", cartItems)

    function handleClick(ele) {
        setCartIteams([...cartItems, ele]);
    }

    return(
        <div className="product-list">
        {productList.map((ele)=>(
            <div className="cart" key={ele.id}>
                <h1>{ele.title}</h1>
                <p>{ele.price}</p>
                <button onClick={() => handleClick(ele)}>Add to Cart</button>
            </div>
        ))}
        </div>
    )
}

export default ProductList;