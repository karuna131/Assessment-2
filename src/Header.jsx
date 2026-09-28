import {useContext} from "react";
import {CartContext} from "./context/CartContext";

function Header(){
    const {cartItems} = useContext(CartContext);
    console.log('cartItems', cartItems);
    return (
        <>
        <h1>Total Items Added : {cartItems.length}</h1>
        <h1>Item Details</h1>
        {cartItems.map((ele)=>(
            <div key={ele.id}>
                    <p>{ele.title}</p>
            </div>
        ))
        }
        </>
    )
}

export default Header;