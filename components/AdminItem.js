import React,{useEffect,useContext,useState} from 'react'
import BingoContext from '../context/bingo/BingoContext'

const AdminItem = ({number}) => {
  const {isPlaying,balls,position} = useContext(BingoContext)
  const [used,setUsed] = useState(false)

  useEffect(() => {
    if(isPlaying){
      if(balls[position] === number){
        setUsed(true)
      }
    }
    else{
      setUsed(false)
    }
  }, [isPlaying,position])

  if(used){
    return (
      <div className="cardNumber used">
        <p>{number}</p>
      </div>
    )
  }
  return (
    <div className="cardNumber">
      <p>{number}</p>
    </div>
  )
}

export default AdminItem