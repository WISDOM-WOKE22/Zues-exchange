import { useState } from 'react'
import './WithdrawPage.css'
import WithdrawFiat from './UI/WithdrawFiat'
import WithdrawCrypto from './UI/WithdrawCrypto'
import { useAuthContext } from '../../Hooks/useAuthContext'
import { useThemeContext } from '../../Hooks/useThemeContext'

export default function WithdrawPage() {
    const [ showCrypto, setShowCrypto ] = useState(false)
    const [ showFiat, setShowFiat ] = useState(true)
    const { color } = useThemeContext()
    const { user } = useAuthContext()
    const uid = user.uid 
    const ShowCrypto = () => {
      setShowCrypto(true)
      setShowFiat(false)
    }
  const Fait = () => {
    setShowCrypto(false)
    setShowFiat(true)
  }
  return (
    <div className='page withdrawal-main'>
        <div className='Withdrawal-page'>
            <div className='withdrawal-page-container'>
              {/* <h2>Withdrawal page</h2> */}
              <div className="dpt-choice">
            <button className="Fiat" 
             style={{ color, borderColor:color }}
            onClick={() => Fait()}>
              Withdraw Fait
            </button>
            <button className="crypto"
             style={{ color, borderColor:color }}
             onClick={() => ShowCrypto()}>
              Withdraw Crypto
            </button>
        </div>
        <div className='withdraw-option'>

          {showFiat && <WithdrawFiat uid={uid} color={color}/>}
          {showCrypto && <WithdrawCrypto uid={uid} color={color}/>}
        </div>
            </div>
        </div>     
    </div>
  )
}
