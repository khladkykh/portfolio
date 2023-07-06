import { useContext, useState, useEffect } from "react";
import CartItem from "../Components/CartItem";
import { Context } from "../Context";

function Cart(){
    const [total, setTotal] = useState(0);

    const{cartItem, emptyCart} = useContext(Context)
    
    const newTotal = cartItem.reduce((prevValue, currentValue) => prevValue + currentValue.price, 0);
    const totalCostDisplay = newTotal.toLocaleString("en-US", {style: "currency", currency: "USD"})
    
    const cartItemElements = cartItem.map(item => (
        <CartItem key={item.id} name={item.name} url={item.url} price={item.price} id={item.id}/>
    ))
  
    return(
        <div className="cart">
            <h1>Cart</h1>
            {cartItemElements}
            {cartItem.length > 0 
                ? 
                <div>
                    <h2 className="cart-total">Total: {totalCostDisplay}</h2> 
                    <button onClick={() => emptyCart()}>Empty Cart</button>
                </div>
                : 
                <h2 className="cart-message">You have no items in your cart</h2>}
        </div>
    )
}

export default Cart;