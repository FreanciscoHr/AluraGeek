import "../css/Login.css"

const Login = () => {
    return(
        <main>
            <div className="container">
                <div className="titulo">
                    <h3>Iniciar Sesión</h3>
                </div>
                <section className="login__section">
                    <input type="email" placeholder="Escriba su correo elecronico"/>
                    <input type="password" placeholder="Escriba su contraseña"/>
                </section>
            </div>
            
        </main>
    )
}

export default Login