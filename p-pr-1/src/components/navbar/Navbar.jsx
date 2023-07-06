import { useState, useContext } from "react"
import { Context } from "../../Context"
import "./navbar.css"
import {RiMenu3Line, RiCloseLine} from "react-icons/ri"
import logo from "../../assets/logo.svg"

const Menu = () => (
    <>
        <p><a href="#home">Home</a></p>
        <p><a href="#about">About</a></p>
        <p><a href="#possibility">OpenAI</a></p>
        <p><a href="#features">Case Studies</a></p>
        <p><a href="#blog">Library</a></p>
    </>
)

function Navbar (){
    const [toggleMenu, setToggleMenu] = useState(false)
    const {formData, item} = useContext(Context)
    return(
        <nav className="gpt3__navbar">
            <div className="gpt3__navbar-links">
                <div className="gpt3__navbar-links_logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="gpt3__navbar-links_container">
                    <Menu/>
                </div>
            </div>
            {formData.email.length > 0 
            ?
            <div className="gpt3__navbar-sign">
                <p>Hello, {item}</p>
            </div>
            : 
            <div className="gpt3__navbar-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
            </div>
            }

            <div className="gpt3__navbar-menu">
                {toggleMenu
                ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)}/>
                : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)}/>
                }
                {toggleMenu && (
                    <div className="gpt3__navbar-menu_container scale-up-center">
                        <div className="gpt3__navbar-menu_container-links">
                            <Menu/>
                            <div className="gpt3__navbar-menu_container-links-sign">
                                <p>Sign in</p>
                                <button type="button">Sign up</button>
                            </div>
                        </div>
                    </div>)}
            </div>
        </nav>
    )
}

export default Navbar;