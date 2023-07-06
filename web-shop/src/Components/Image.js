import { useContext, useState } from "react";
import { Context } from "../Context";

function Image(img){

    const [isHovered, setIsHovered] = useState(false)

    const{toggleFavorite, cartItem, addItem, removeItem} = useContext(Context)

    function heartIcon () {
        if(img.isFavorite){
            return <i className="ri-heart-2-fill icon-heart" onClick={() => toggleFavorite(img.id)}></i>
        } else if(isHovered){
            return <i className="ri-heart-2-line icon-heart" onClick={() => toggleFavorite(img.id)}></i>
        }
    } 
    
    function cartIcon (){
        const alreadyInCart = cartItem.some(item => item.id === img.id)
        if(alreadyInCart){
            return <i className="ri-shopping-cart-2-fill icon-cart" onClick={() => removeItem(img.id)}></i>
        } else if(isHovered){
            return <i className="ri-shopping-cart-2-line icon-cart" onClick={() => addItem(img)}></i>
        }
    }
 
    return(
        <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="images"
        >
            <img src={img.url} className="image"/>
                {heartIcon()}
                {cartIcon()}
        </div>
    )
}

export default Image;