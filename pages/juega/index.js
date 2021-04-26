import Head from 'next/head'
import {useState,useEffect,useContext} from 'react'
import getCard from '../../utils/getCard'
import PlayItem from '../../components/PlayItem'
import {useRouter} from 'next/router'
import BingoContext from '../../context/bingo/BingoContext'
import alertPrompt from '../../utils/alertPrompt'

export default function Play() {
  const [card,setCard] = useState([])
  const [name,setName] = useState('')
  const router = useRouter()
  const {initBingo,isPlaying} = useContext(BingoContext)

  useEffect(() => {
    setCard(getCard())
    let getName = prompt('Ingrese su nombre:')
    setName(getName)
  }, [])

  useEffect(() => {
    if(!isPlaying){
      setCard(getCard())
    }
  }, [isPlaying])

  const arrayHead = ['B','I','N','G','O']

  const backToHome = () => {
    router.push('/')
  }

  return (
    <>
      <Head>
        <title>Bingo! - A jugar!</title>
        <link rel="icon" href="/logo.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossorigin="anonymous" />
      </Head>
      <div className="PlayView l-container">
        <div className="l-contain">
          <div className="PlayView__User">
            <p>{name}</p>
            <i className="fas fa-user fa-2x"></i>
          </div>
          <div className="PlayView__Card">
            {arrayHead.map((letter,_id)=>(
              <div className="PlayView__CardHead" key={_id}>
                <p>{letter}</p>
              </div>
            ))}
            {card.map((number,_id) => (
              <PlayItem number={number} key={_id} />
            ))}
          </div>
          <button className="PlayView__Button" onClick={() => {alertPrompt('Perderas tu cartilla',initBingo)}}>
            Generar cartilla
          </button>
          <button className="PlayView__Button" onClick={() => {alertPrompt('Volveras al inicio',backToHome)}}>
            Volver al inicio
          </button>
        </div>
      </div>
    </>
  )
}