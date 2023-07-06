import logo from "../logo.png"

function Nav(){
    return(
        <nav className="navbar">
            <img src={logo} width="200px" className="logo ml-3"></img>
        </nav>
    )
}

export default Nav;