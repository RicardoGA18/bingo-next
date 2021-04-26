import Head from 'next/head'
import AdminItem from '../../components/AdminItem'
import BingoContext from '../../context/bingo/BingoContext'
import {useContext,useEffect} from 'react' 
import {useRouter} from 'next/router'
import AdminBall from '../../components/AdminBall'
import alertPrompt from '../../utils/alertPrompt'

export default function admin(){
  const arrayName = ['B','I','N','G','O']
  const {initBingo,getBall,isPlaying,initPlay} = useContext(BingoContext)
  const router = useRouter()

  useEffect(() => {
    initBingo()
  }, [])

  const setNumbers = () => {
    let numberArray = []
    for(let i = 0; i < 75; i++){
      numberArray.push(i+1)
    }
    return numberArray.map(number => (
      <AdminItem number={number} key={number}/>
    ))
  }

  const buttonGame = () => {
    if(!isPlaying){
      initPlay()
      return
    }
    getBall()
  }

  const backToHome = () => {
    router.push('/')
  }

  return (
    <>
      <Head>
        <title>Bingo! - Canta!</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className="AdminView l-container">
        <div className="l-contain">
          <div className="AdminView__Content">
            <div className="AdminView__Ball">
              <div className="auxiliar">
                <div className="position">
                  <AdminBall />
                </div>
              </div>
            </div>
            <div className="AdminView__Buttons">
              <button onClick={buttonGame}>Sacar bolilla</button>
              <button onClick={() => {alertPrompt('Perderás el avance del juego',initBingo)}}>Reiniciar Juego</button>
              <button onClick={() => {alertPrompt('Perderás el juego actual',backToHome)}}>Volver al inicio</button>
            </div>
          </div>
          <div className="AdminView__Card">
            <div className="grid">
              {arrayName.map((letter,_id)=>(
                <div className="cardName" key={_id}>
                  <p>{letter}</p>
                </div>
              ))}
              {setNumbers()}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}