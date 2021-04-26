import Head from 'next/head'
import {useRouter} from 'next/router'

export default function Home() {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Bingo!</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className="HomeView l-container">
        <div className="l-contain">
          <h1 className="HomeView__Title">BINGO</h1>
          <button className="HomeView__Create" onClick={() => {router.push('/canta')}}>BOLILLERO</button>
          <button className="HomeView__Join" onClick={() => {router.push('/juega')}}>JUGADOR</button>
        </div>
      </div>
    </>
  )
}
