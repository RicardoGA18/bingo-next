import {INIT_BINGO,GET_BALL,INIT_PLAY} from '../type'
import swal from 'sweetalert2'

const BingoReducer = (state,action) => {
  const {payload,type} = action
  switch(type){
    case INIT_BINGO:
      return{
        ...state,
        balls: payload.balls,
        position: payload.position,
        isPlaying: payload.isPlaying,
      }
    case GET_BALL:
      if(state.position <= state.balls.length - 2){
        return{
          ...state,
          position: state.position + 1
        }
      }else{
          swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Ya no quedan mas bolillas, reinicia el juego para continuar',
        })
        return state
      }
    case INIT_PLAY:
      return{
        ...state,
        isPlaying: payload
      }
    default:
      return state
  }
}

export default BingoReducer