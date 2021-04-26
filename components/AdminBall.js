import React,{useContext,useEffect} from 'react'
import BingoContext from '../context/bingo/BingoContext'

const AdminBall = () => {
  const {position,balls,isPlaying} = useContext(BingoContext)

  const getColor = () => {
    if(balls[position] >= 60){
      return '#D03C72'
    }else if(balls[position] >= 45){
      return '#44C6C2'
    }else if(balls[position] >= 30){
      return '#DB962E'
    }else if(balls[position] >= 15){
      return '#2F51B2'
    }else{
      return '#CA3A3F'
    }
  }
  const getLetter = () => {
    if(balls[position] >= 60){
      return 'O'
    }else if(balls[position] >= 45){
      return 'G'
    }else if(balls[position] >= 30){
      return 'N'
    }else if(balls[position] >= 15){
      return 'I'
    }else{
      return 'B'
    }
  }
  if(!isPlaying){
    return (
      <div className="bg-ball"></div>
    )
  }

  return (
    <div className="bg-ball bg-change">
      <div className="white-ball">
        <p className="letter">{getLetter()}</p>
        <p className="number">{balls[position]}</p>
      </div>
      <style jsx>{`
        .bg-change{
          background: ${getColor()};
        }
      `}</style>
    </div>
  )
}

export default AdminBall