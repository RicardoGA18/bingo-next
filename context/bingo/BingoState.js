import React,{useReducer} from 'react'
import BingoReducer from './BingoReducer'
import BingoContext from './BingoContext'
import {INIT_BINGO,GET_BALL,INIT_PLAY} from '../type'

const BingoState = (props) => {
  const INITIAL_STATE = {
    balls: [],
    position: 0,
    isPlaying: false,
  }
  const [state,dispatch] = useReducer(BingoReducer,INITIAL_STATE)

  const initBingo = () => {
    const newBalls = []
    for(let i = 0; i < 75 ;i++){
      newBalls.push(i+1)
    }
    for(let j = newBalls.length ; j > 0 ; j--){
      let pivote = Math.floor(Math.random() * j)
      let aux = newBalls[j-1]
      newBalls[j-1] = newBalls[pivote]
      newBalls[pivote] = aux
    }
    dispatch({
      type: INIT_BINGO,
      payload:{
        balls: newBalls,
        position: 0,
        isPlaying: false,
      }
    })
  }

  const initPlay = () => {
    dispatch({
      type: INIT_PLAY,
      payload: true,
    })
  }

  const getBall = () => {
    dispatch({
      type: GET_BALL,
      payload: null
    })
  }

  return (
    <BingoContext.Provider value={{ 
      balls: state.balls,
      position: state.position,
      isPlaying: state.isPlaying,
      getBall,
      initBingo,
      initPlay,
    }}>
      {props.children}
    </BingoContext.Provider>
  )
}

export default BingoState