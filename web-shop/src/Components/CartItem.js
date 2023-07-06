import { useContext, useState } from "react";
import { Context } from "../Context";

function CartItem(item){
    const [isHovered, setIsHovered] = useState(false)
    const{removeItem} = useContext(Context)

    const iconClassName = isHovered ? "ri-delete-bin-line bin": "ri-delete-bin-fill bin"
    const price = item.price
    const priceDisplay = price.toLocaleString("en-US", {style: "currency", currency: "USD"})

    return(
        <div className="cart-item">
            <div className="cart-item-discr">
                <i 
                className={iconClassName}
                onClick={() => removeItem(item.id)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                ></i>
                <img src={item.url} width="130px" height="130px"/>
                <h3 className="item-name">{item.name}</h3>
            </div>
            <h3>{priceDisplay}</h3>
        </div>
    )
}

export default CartItem;