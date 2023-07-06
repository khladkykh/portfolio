import { useContext } from "react"
import { Link } from "react-router-dom"
import { Context } from "../Context"

function Header() {
    const {cartItem} = useContext(Context)

    const cartIconClassName = cartItem.length > 0 ? "ri-shopping-cart-2-fill icon-header" : "ri-shopping-cart-2-line icon-header"
    // const favoriteIconClassName = 
    return(
        <header>
            <Link to="/">
                <div className="logo">
                    <h1 className="colored-h">GreatShop</h1>
                </div>
            </Link>
                <div className="menu">
                    <Link to="/"><h3 className="header-mainLink">Home</h3></Link>
                    <Link to="/about"><h3 className="header-mainLink">About</h3></Link>
                    <Link to="/services"><h3 className="header-mainLink">Services</h3></Link>
                </div>
                
                <Link to="/cart">
                    <i className={cartIconClassName}></i>
                </Link>
          
        </header>
    )
}

export default Header