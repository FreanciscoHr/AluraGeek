import "../css/Footer.css"
import Logo from "../img/Logo.png"
import { Link } from "react-router-dom"

const Footer = () =>{
    return(
        <div>
            <div className="footer--sections">
                <section className="footer--logo">
                <Link to="/"><img className="header--icon" src={Logo} alt=""/></Link>
                </section>
                <section className="footer--links">
                <ul className="footer--list">
                    <li className="footer--list--element"><Link className="footer--list--element--link" to="/">Quienes somos</Link></li>
                    <li className="footer--list--element"><Link className="footer--list--element--link" to="/">Política de privacidad</Link></li>
                    <li className="footer--list--element"><Link className="footer--list--element--link" to="/">Programa de fidelidad</Link></li>
                    <li className="footer--list--element"><Link className="footer--list--element--link" to="/">Nuestras Tiendas</Link></li>
                    <li className="footer--list--element"><Link className="footer--list--element--link" to="/">Quiero ser franquiciado</Link></li>
                    <li className="footer--list--element"><Link className="footer--list--element--link" to="/">Anúncie aquí</Link></li>
                </ul>
                </section>
                <section className="footer--form--container">
                    <p class="footer-form--title">Hable con nosotros</p>
                    <form action="" className="footer--form">
                        <input class="footer--form--input" type="text" placeholder="Nombre"/>
                        <input class="footer--form--input" type="text" placeholder="Escribe un mensaje"/>
                        <button class="footer--form--submit">Enviar mensaje</button>
                    </form>
                </section>
            </div>
            <div class="footer--container">
                <p class="footer--text">Desarrollado por Francisco Herrera</p>
                <p class="footer--text">2023</p>
            </div>
        </div>
    )}

export default Footer