import Head from 'next/head'
import Link from 'next/link'

export default function Login() {
  return (
    <>
      <Head>
        <title>Bingo! - Inciar Sesión</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className="LoginView l-container">
        <div className="l-contain">
          <h1 className="LoginView__Title">Iniciar Sesión</h1>
          <form className="LoginView__Form">
            <input type="email" placeholder="Correo electrónico" className="LoginView__Input"/>
            <input type="password" placeholder="Contraseña" className="LoginView__Input"/>
            <input type="submit" value="Ingresar" className="LoginView__Submit"/>
          </form>
          <Link href="/registro">
            <a className="LoginView__Link">¿Aún no tienes cuenta? Regístrate</a>
          </Link>
        </div>
      </div>
    </>
  )
}