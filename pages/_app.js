import '../styles/index.css'
import BingoState from '../context/bingo/BingoState'

function MyApp({ Component, pageProps }) {
  return (
    <BingoState>
      <Component {...pageProps} />
    </BingoState>
  )
}

export default MyApp
