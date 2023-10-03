import "../css/Home.css"
import trooper from "../img/trooper.png"
import helm from "../img/helm.png"
import yoda from "../img/yoda.png"
import fulltrooper from "../img/fulltrooper.png"
import babyoda from "../img/babyoda.png"
import sith from "../img/sith.png"
import control from "../img/control.png"
import consolacontrol from "../img/consolacontrol.png"
import retrocons from "../img/retrocons.png"
import sswitch from "../img/sswitch.png"
import xbox from "../img/xbox.png"
import gameboy from "../img/gameboy.png"
import camisa from "../img/camisa.png"
import camisaNes from "../img/camisaNes.png"
import pink from "../img/pink.png"
import vr from "../img/vr.png"
import pikachu from "../img/pikachu.png"
import sonic from "../img/sonic.png"


const Home = () => {
    return(
    <main>
        <section className="hero">
            <div className="hero__container">
                <h1>Febrero Promocional</h1>
                <h2>Productos seleccionados con 33% de descuento</h2>
                <button className="heroBtn">Ver Consolas</button>
            </div>
        </section>

        <div className="main--starwars">
            <div className="main--starwars--menu">
                <p className="main--title">Star Wars</p>
                <a id="link--starwars" href="products.html">Ver todo<i className="icofont-arrow-right"></i></a>
            </div>
            <div className="main--starwars--contenedor">
                <div className="main--starwars--producto">
                    <img src={trooper} alt="Cabeza de Storm Trooper"/>
                    <p className="main--producto--titulo">Cabeza Storm Trooper</p>
                    <p className="main--producto--precio">$350.00</p>
                    <p className="main--descripcion">
                        Este producto es una cabeza hueca del personaje Storm Trooper, perteneciente a la saga de películas Star Wars.
                    </p>
                    <button className="main--producto--link--starwars main--producto--link" onclick="window.location.href='singleProduct.html';">Ver detalles</button>
                </div>
                <div className="main--starwars--producto">
                    <img src={helm} alt="Cabeza de Storm Trooper"/>
                    <p className="main--producto--titulo">Figura de Darth Vader</p>
                    <p className="main--producto--precio">$500.00</p>
                    <p className="main--descripcion">
                        Este producto es una figura de LEGO a cuerpo completo del personaje Dart Vader, perteneciente a la saga de películas Star Wars.
                    </p>
                    <button className="main--producto--link--starwars main--producto--link" onclick="window.location.href='singleProduct.html';">Ver detalles</button>
                </div>
                <div className="main--starwars--producto">
                    <img src={yoda} alt="Poster de Yoda"/>
                    <p className="main--producto--titulo">Poster</p>
                    <p className="main--producto--precio">$150.00</p>
                    <p className="main--descripcion">
                        Este producto es un póster alusivo al personaje Yoda perteneciente a la saga de películas de fantasía espacial Star Wars.
                    </p>
                    <button className="main--producto--link--starwars main--producto--link" onclick="window.location.href='singleProduct.html';">Ver detalles</button>
                </div>
                <div className="main--starwars--producto">
                    <img src={fulltrooper} alt="Figura de Storm Trooper"/>
                    <p className="main--producto--titulo">Figura Storm Trooper</p>
                    <p className="main--producto--precio">$700.00</p>
                    <p className="main--descripcion">
                        Este producto es una figura de cuerpo completo a escala del personaje Storm Trooper, perteneciente a la saga de películas Star Wars.
                    </p>
                    <button className="main--producto--link--starwars main--producto--link" onclick="window.location.href='singleProduct.html';">Ver detalles</button>
                </div>
                <div className="main--starwars--producto">
                    <img src={babyoda} alt="Figura de Grogu"/>
                    <p className="main--producto--titulo">Figura de Grogu</p>
                    <p className="main--producto--precio">$350.00</p>
                    <p className="main--descripcion">
                        Este producto se trata de una figura a escala de cuerpo completo del personaje Grogu, coprotagonista de la serie The Mandalorian, perteneciente a su vez al universo de Star Wars.
                    </p>
                    <button className="main--producto--link--starwars main--producto--link" onclick="window.location.href='singleProduct.html';">Ver detalles</button>
                </div>
                <div className="main--starwars--producto">
                    <img src={sith} alt="Figura de Kylo Ren"/>
                    <p className="main--producto--titulo">Figura de Kylo Ren</p>
                    <p className="main--producto--precio">$750.00</p>
                    <p className="main--descripcion">
                        Este producto se trata de una figura coleccionable de cuerpo completo a escala del personaje Kylo Ren perteneciente a la tercera trilogía de la saga de películas de Star Wars.
                    </p>
                    <button className="main--producto--link--starwars main--producto--link" onclick="window.location.href='singleProduct.html';">Ver detalles</button>
                </div>
            </div>
        </div>


        <div className="main--consoles">
            <div className="main--consoles--menu">
                <p className="main--title">Consolas</p>
                <a id="link--consoles" href="products.html">Ver todo<i className="icofont-arrow-right"></i></a>
            </div>
            <div className="main--consoles--contenedor">
                <div className="main--consoles--producto">
                    <img src={control} alt="Control Xbox ONE"/>
                    <p className="main--producto--titulo">XBOX ONE</p>
                    <p className="main--producto--precio">$5000.00</p>
                    <p className="main--descripcion">
                        Control inalámbrico para jugar videojuegos en la consola de Microsoft Xbox ONE. No incluye baterías.
                    </p>
                    <button className="main--producto--link--consoles main--producto--link" onclick="window.location.href='singleProduct.html';">Ver detalles</button>
                </div>
                <div className="main--consoles--producto">
                    <img src={consolacontrol} alt="Consola PlayStation 5"/>
                    <p className="main--producto--titulo">PlayStation 5</p>
                    <p className="main--producto--precio">$5000.00</p>
                    <p className="main--descripcion">
                        Consola para jugar videojuegos Sony PlayStation 5, versión digital. No incluye juegos digitales.
                    </p>
                    <button className="main--producto--link--consoles main--producto--link" onclick="window.location.href='singleProduct.html';">Ver detalles</button>
                </div>
                <div className="main--consoles--producto">
                    <img src={retrocons} alt="Consola NES"/>
                    <p className="main--producto--titulo">NES</p>
                    <p className="main--producto--precio">$2500.00</p>
                    <p className="main--descripcion">
                        Consola para jugar videojuegos Nintendo Entertainment System (NES). Incluye dos controles y un juego dentro del catálogo disponible.
                    </p>
                    <button className="main--producto--link--consoles main--producto--link" onclick="window.location.href='singleProduct.html';">Ver detalles</button>
                </div>
                <div className="main--consoles--producto">
                    <img src={sswitch} alt="Joycons"/>
                    <p className="main--producto--titulo">Switch</p>
                    <p className="main--producto--precio">$500.00</p>
                    <p className="main--descripcion">
                        Controles tipo Joycon para la consola Nintendo Switch, incluyen calcomanías decorativas de Splatoon.
                    </p>
                    <button className="main--producto--link--consoles main--producto--link" onclick="window.location.href='singleProduct.html';">Ver detalles</button>
                </div>
                <div className="main--consoles--producto">
                    <img src={xbox} alt="XBOX Series X"/>
                    <p className="main--producto--titulo">XBOX Series X</p>
                    <p className="main--producto--precio">$10000.00</p>
                    <p className="main--descripcion">
                        Consola para jugar videojuegos Microsoft XBOX Series X. Incluye un código para el videojuego Elden Ring.
                    </p>
                    <button class="main--producto--link--consoles main--producto--link" onclick="window.location.href='singleProduct.html';">Ver detalles</button>
                </div>
                <div className="main--consoles--producto">
                    <img src={gameboy} alt="Consola Genérica"/>
                    <p className="main--producto--titulo">GameBoy</p>
                    <p className="main--producto--precio">$2000.00</p>
                    <p className="main--descripcion">
                        Consola de videojuegos retro para coleccionistas.
                    </p>
                    <button class="main--producto--link--consoles main--producto--link" onclick="window.location.href='singleProduct.html';">Ver detalles</button>
                </div>
            </div>
        </div>


        <div className="main--diversos">
            <div className="main--diversos--menu">
                <p className="main--title">Diversos</p>
                <a id="link--diversos" href="products.html">Ver todo<i className="icofont-arrow-right"></i></a>
            </div>
            <div className="main--diversos--contenedor">
                <div className="main--diversos--producto">
                    <img src={camisa} alt="Playera Nintendo"/>
                    <p className="main--producto--titulo">Playera</p>
                    <p className="main--producto--precio">$270.00</p>
                    <p className="main--descripcion">
                        Playera con diseño de Nintendo. Disponible en todas las tallas.
                    </p>
                    <button className="main--producto--link--diversos main--producto--link" onclick="window.location.href='singleProduct.html';">Ver detalles</button>
                </div>
                <div className="main--diversos--producto">
                    <img src={camisaNes} alt="Playera Atari"/>
                    <p className="main--producto--titulo">Playera</p>
                    <p className="main--producto--precio">$270.00</p>
                    <p className="main--descripcion">
                        Playera con diseño de Atari. Disponible en todas las tallas.
                    </p>
                    <button className="main--producto--link--diversos main--producto--link" onclick="window.location.href='singleProduct.html';">Ver detalles</button>
                </div>
                <div className="main--diversos--producto">
                    <img src={pink} alt="Despertador"/>
                    <p className="main--producto--titulo">Despertador</p>
                    <p className="main--producto--precio">$700.00</p>
                    <p className="main--descripcion">
                        Despertador temático con amplia categoría de tonos despertadores de videojuegos clásicos.
                    </p>
                    <button className="main--producto--link--diversos main--producto--link" onclick="window.location.href='singleProduct.html';">Ver detalles</button>
                </div>
                <div className="main--diversos--producto">
                    <img src={vr} alt="Lentes VR"/>
                    <p className="main--producto--titulo">Lentes VR</p>
                    <p className="main--producto--precio">$3500.00</p>
                    <p className="main--descripcion">
                        Sumérgete en la tecnología del VR, adéntrate y conoce el potencial que tiene este tipo de accesorios. Incluye una variedad de entornos de prueba para exprimir al máximo todas sus funcionalidades.
                    </p>
                    <button className="main--producto--link--diversos main--producto--link" onclick="window.location.href='singleProduct.html';">Ver detalles</button>
                </div>
                <div className="main--diversos--producto">
                    <img src={pikachu} alt="Peluche"/>
                    <p className="main--producto--titulo">Peluche Pikachu</p>
                    <p className="main--producto--precio">$700.00</p>
                    <p className="main--descripcion">
                        Peluche del personaje Pikachu perteneciente al universo de Pokemón. Viene en varios tamaños.
                    </p>
                    <button className="main--producto--link--diversos main--producto--link" onclick="window.location.href='singleProduct.html';">Ver detalles</button>
                </div>
                <div className="main--diversos--producto">
                    <img src={sonic} alt="Figura de Sonica"/>
                    <p className="main--producto--titulo">Figura Sonic</p>
                    <p className="main--producto--precio">$850.00</p>
                    <p className="main--descripcion">
                        Figura conmemoratiiva del 30 aniversario del personaje Sonic The Hedgehog perteneciente a SEGA.
                    </p>
                    <button className="main--producto--link--diversos main--producto--link" onclick="window.location.href='singleProduct.html';">Ver detalles</button>
                </div>
            </div>
        </div>
    </main>
    
    
    )
}

export default Home