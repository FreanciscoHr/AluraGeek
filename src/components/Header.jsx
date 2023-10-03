import "../css/Header.css"
import Logo from "../img/Logo.png"
import IconSearch from "../img/IconSearch.png"
import { Link } from "react-router-dom"

const Header = () =>{
    return(
    <header className="header">
        <div className="header__container">
            <div className="header__logo__busqueda">
                <Link className="logo" to="/">
                    <img src={Logo} alt="AluraGeek" className="header__logo"/>
                </Link>
                <div className="header__Search">
                    <input type="text" className="input__search" placeholder="¿Qué deseas buscar?"/>
                    <img src={IconSearch} alt="" className="iconSearch"/>
                </div>
            </div>
            <Link to="/Login" className="loginBtn">Login</Link>
        </div>
    </header>
    )
}

export default Header