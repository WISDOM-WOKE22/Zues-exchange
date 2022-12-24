import { useState } from 'react'
import '../styles/Pages/Deposite.css'
import DepositeFiat from "./UI/DepositeFiat"
// import DepositeCrypto from './UI/DepositeCrypto'
import DepositeCrypto from '../components/Deposite/DepositeCrypto'
import { useThemeContext } from '../Hooks/useThemeContext'

export default function Deposite() {
    const [ showDepositeCrypto, setShowDepositeCrypto ] = useState(false)
    const [ showFiat, setShowFiat ] = useState(true)
    const { color } = useThemeContext()
    const showCrypto = () => {
      setShowDepositeCrypto(true)
      setShowFiat(false)
    }
  const Fait = () => {
    setShowDepositeCrypto(false)
    setShowFiat(true)
  }
  return (
    <div className="page deposite">
        <div className="dpt-choice">
            <button className="Fiat" 
             style={{ color, borderColor:color }}
            onClick={() => Fait()}>
              Deposite Fiat
            </button>
            <button className="crypto"
             style={{ color, borderColor:color }}
             onClick={() => showCrypto()}>
              Deposite Crypto
            </button>
        </div>
     {showDepositeCrypto && <DepositeCrypto/>}
     {showFiat && <DepositeFiat color={color}/>}
     {/* {showDepositeCrypto} */}
    </div>
  )
}
