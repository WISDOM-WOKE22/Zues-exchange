import './Confirm.css'
import { useFireStore } from '../../../Hooks/useFirestore'

export default function Confirm({ handleConfirm,crypto,recievedCrypto,amount,color }) {

    const { documents } = useFireStore(
        'Transactions'
    )
    // const hideConfirm = () => {
    //     setShowConFirm(false)
    // }
  return (
    <div className='confirm-container' >
      <div className='confirm-wrapper'>
         <h3>
            <span>Confirm Transaction</span>
            <span className='remove'
             onClick={() => handleConfirm()}
             >X</span>
            </h3>
         <div>
            Buying {(recievedCrypto).toFixed(9)} {(crypto.value)} for ${amount.toLocaleString()}
         </div>
         <button style={{ backgroundColor:color }} >Confirm Transaction</button>
      </div>
    </div>
  )
}
