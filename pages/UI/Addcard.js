import { useState } from 'react'
import { useAuthContext } from '../../Hooks/useAuthContext'
import '../../styles/UI/Addcard.css'
import {useFireStore} from '../../Hooks/useFirestore'
import { AnimatePresence, spring } from 'framer-motion'
import { motion } from 'framer-motion'

export default function Addcard({ showAddCard, uid }) {
    const [ name, setName] = useState('')
    const [ nameError, setNameError ] = useState('')
    const [ cardNumber, setCardNumber ] = useState('')
    const [ cardNumberError, setCardNumberError ] = useState('')
    const [ expiryDate, setExpiryDate ] = useState('')
    const [ expiryDateError, setExpiryDateError ] = useState('')
    const [ cvv, setCvv ] = useState('')
    const [ cvvError, setCvvError ] = useState('')
    const { addDocument } = useFireStore('Add-Card')
    const { user } = useAuthContext()


    const handleSubmit = async (e) => {
      e.preventDefault()
      if(!name){
         setNameError('input card name')
      }
      if(!cardNumber){
        setCardNumberError('input the card number')
      }
      if(!expiryDateError){
         setExpiryDateError('input card expiry date')
      }
      if(!cvv){
        return setCvvError('input card Cvv')
      }
      if(name && cardNumber && expiryDate && cvv){
        addDocument({
          name,
          cardNumber,
          expiryDate,
          cvv,
          uid
        })
        await showAddCard()
      }
      setCardNumber('')
      setName('')
      setCvv('')
      setExpiryDate('')
    } 

  return (
    <div className='card'>
      <AnimatePresence>
       <motion.form className='card-container' onSubmit={(e) => handleSubmit(e)}
        initial={{ y:'1000vh' }}
        animate={{ y:0, transition:{ type:'spring', stiffness:80 } }}
        exit={{ y:'1000vh', transition:{ ease:'easeInOut' } }}
       >
          <h2>
            <span>Add New Card</span>
            <span onClick={() => showAddCard()} 
            className='remove'>X</span>
            </h2>
          <p>Enter card information</p>

          <label>
            <span>Name on card</span>
            <input type='text'
              className='inpt'
              placeholder={user.displayName}
              onChange={(e) => setName(e.target.value)}
            /> 
            {nameError && <div className='error'>{nameError}</div>}
          </label>
          <label>
            <span>Card Number</span>
            <input type='number'
              className='inpt'
              onChange={(e) => setCardNumber(e.target.value)}
              value={cardNumber.slice(0,16)}
            /> 
            {cardNumberError && <div className='error'>{cardNumberError}</div>}
          </label>
          <div className='card-nm'>
            <label>
                <span>Expiry date</span>
                <input type='number'
                className='inpt expiry-date'
                onChange={(e) => setExpiryDate(e.target.value)}
                placeholder='MM/YY'
                value={expiryDate.slice(0,4)}
                /> 
                {expiryDateError && <div className='error'>{expiryDateError}</div>}
            </label>
            <label>
                <span>Security code (CVV)</span>
                <input type='number'
                className='inpt cvv'
                placeholder='CVV'
                maxLength='3'
                onChange={(e) => setCvv(e.target.value)}
                value={cvv.slice(0,3)}
                /> 
                {cvvError && <div className='error'>{cvvError}</div>}
            </label>
          </div>
          <span className='terms'>By adding a new card, you agree to the <span className='bl'>credit/debit card terms</span></span>
          <button>Add Card</button>
       </motion.form>
       </AnimatePresence>
    </div>
  )
}
