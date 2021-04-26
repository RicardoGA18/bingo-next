import React,{useState,useEffect,useContext} from 'react'
import BingoContext from '../context/bingo/BingoContext'

const PlayItem = ({number}) => {
  const [used,setUsed] = useState(false)
  const {isPlaying,initPlay} = useContext(BingoContext)

  useEffect(() => {
    if(!isPlaying){
      setUsed(false)
    }
  }, [isPlaying])

  if(!number){
    return (
      <div className="PlayView__CardItem">
        <div className="img">
          <img src="/logo.png"/>
        </div>
      </div>
    )
  }

  if(used){
    return (
      <div className="PlayView__CardItem used" onClick={() => {setUsed(false); initPlay()}}>
        <p>{number}</p>
      </div>
    )
  }

  return (
    <div className="PlayView__CardItem" onClick={() => {setUsed(true); initPlay()}}>
      <p>{number}</p>
    </div>
  )
}

export default PlayItem