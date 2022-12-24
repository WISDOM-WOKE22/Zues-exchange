import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCollection } from '../../../Hooks/UseCollection'
import { useAuthContext } from '../../../Hooks/useAuthContext'
import { useFireStore } from '../../../Hooks/useFirestore'
import { useThemeContext } from '../../../Hooks/useThemeContext'

export default function TranscationPin ({amount, type, pair}) {
    const { user } = useAuthContext()
    const { addDocument } = useFireStore('Transactions')
    const [ transactionPin , setTransactionPin ] = useState('')
    const [ pinError, setPinError ] = useState('')
    const { color } = useThemeContext()
    // const uid = user.uid
    const { documents } = useCollection(
      'TransactionPin',
      ["uid","==",user.uid]
      )
      const navigate = useNavigate()
    const uid = user.uid
    const date = new Date();
     let day = date.getDate();
     let month = date.getMonth() + 1;
     let year = date.getFullYear();

     let Pin
     if(documents !== null && documents.length !== 0){
       documents.forEach((pin) => 
          Pin = pin.transactionPin
       )
     }
    const handleDeposite = (e) => {
      setPinError('')
      e.preventDefault()
      if(Pin == transactionPin){
          // setShowTransactionPin(false)
          addDocument({
            amount,
            type,
            status:'Pending',
            time:`${day}-${month}-${year}`,
            uid,
            pair
          })
          navigate('/dashboard')
      } else {
        setPinError('Incorrect Pin')
      }
 
    }  
    console.log(documents)
  return (
    <>
      <form className='withdrawal-form' 
       onSubmit={(e) => handleDeposite(e)}>
               <label>
                 <span>Transaction Pin</span>
                 <div className='inline'>   
                    <input type='number'
                    onChange={(e) => setTransactionPin(e.target.value)}
                    value={transactionPin.slice(0,4)}
                    />
                 </div>
                 {pinError && <div className='error'>{pinError}</div>}
               </label>
               <button className='edit-btn' style={{ backgroundColor: color }}>Confirm</button>
      </form>
    </>
  )
}
