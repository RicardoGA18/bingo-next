import Head from 'next/head'
import Link from 'next/link'

export default function Register() {
  return (
    <>
      <Head>
        <title>Bingo! - Regístrate</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className="LoginView l-container">
        <div className="l-contain">
          <h1 className="LoginView__Title">Registro</h1>
          <form className="LoginView__Form">
            <input type="text" placeholder="Nombre de usuario" className="LoginView__Input"/>
            <input type="email" placeholder="Correo electrónico" className="LoginView__Input"/>
            <input type="password" placeholder="Contraseña" className="LoginView__Input"/>
            <input type="password" placeholder="Repetir contraseña" className="LoginView__Input"/>
            <input type="submit" value="Regístrate" className="LoginView__Submit"/>
          </form>
          <Link href="/iniciar-sesion">
            <a className="LoginView__Link">¿Ya tienes cuenta? Inicia sesión</a>
          </Link>
        </div>
      </div>
    </>
  )
}