import './DepositeSettings.css'
import { useState } from 'react'
import { useFireStore } from '../../../Hooks/useFirestore'
import { useCollection } from '../../../Hooks/UseCollection'
import CardList from './CardList'
import { useThemeContext } from '../../../Hooks/useThemeContext'

export default function DepositeSettings({ user }) {
    const [ showAddCard, setShowAddCard ] = useState(false)
    const [ showCardList, setShowCardList ] = useState(false)
    const [name, setName ] = useState('')
    const [ nameError, setNameError ] = useState('')
    const [cardNumber, setCardNumber ] = useState('')
    const [ cardNumberError, setCardNumberError ] = useState('')
    const [cvv, setCvv ] = useState('')
    const [ cvvError, setCvvError ] = useState('')
    const [ expiryDate, setExpiryDate ] = useState('')
    const [ expiryDateError, setExpiryDateError ] = useState('')
    const { addDocument } = useFireStore('Add-Card')
    const uid = user.uid
    const { color } = useThemeContext()
    const { documents } = useCollection(
        'Add-Card',
        ["user.uid","==",uid]
    )
    const showCard = () => {
        showAddCard? setShowAddCard(false):setShowAddCard(true)
    }
    const ShowCardList = () => {
      showCardList? setShowCardList(false): setShowCardList(true)
    }
    const handleSubmit = (e) => {
      e.preventDefault()
      setCardNumberError('')
      setExpiryDateError('')
      setCvvError('')
      setNameError('')
      if(!name){
        setNameError('input a name')
        }
        if(!cardNumber){
           setCardNumberError('input your card number')
        }
        if(!cvv){
           setCvvError('input your card Cvv number')
        }
        if(!expiryDateError){
             setExpiryDateError('input your card expiry date')
        }
        if( name && cardNumber && cvv && expiryDate ) {
            addDocument({
              name,
              cardNumber,
              expiryDate,
              cvv,
              uid
            })
            // showAddCard()
            setCardNumber('')
            setCvv('')
            setName('')
            setExpiryDate('')
        }
      } 
  return (
    <div className='DepositeSettings'>
      <div className='Deposite-settings-container'>
         {/* <Addcard/> */}

        <div className='add-option'>
        <div className='passwrd-stt-box'>
            <div className='hd-passwrd'>
               Add Card
            </div>
            <hr/>
            <div className='sm-passwrd-con'>
                <p>
                    add a card that will be use to perform transactions
                    <div className='rq'>Required</div>
                </p>
                
                <button 
                onClick={(e) => showCard()} 
                 style={{ color }}>
                    AddCard
                </button>
            </div>
        </div>
        
            {/* <button className='edit-btn'>
                Add Card
            </button> */}
        {showAddCard &&  <div className='addcard-container'>
        <form className='card-container' onSubmit={(e) => handleSubmit(e)}>
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
                className='inpt'
                onChange={(e) => setExpiryDate(e.target.value)}
                placeholder='MM/YY'
                value={expiryDate.slice(0,4)}
                /> 
                {expiryDateError && <div className='error'>{expiryDateError}</div>}
            </label>
            <label>
                <span>Security code (CVV)</span>
                <input type='number'
                className='inpt'
                placeholder='CVV'
                maxLength='3'
                onChange={(e) => setCvv(e.target.value)}
                value={cvv.slice(0,3)}
                /> 
                {cvvError && <div className='error'>{cvvError}</div>}
            </label>
          </div>
          <span className='terms'>By adding a new card, you agree to the <span style={{ color }}>credit/debit card terms</span></span>
          <button style={{ backgroundColor:color, borderColor:color }}>Add Card</button>
       </form>
        </div>}
        <div className='passwrd-stt-box'>
            <div className='hd-passwrd'>
               Manage Cards
            </div>
            <hr/>
            <div className='sm-passwrd-con'>
                <p>
                    Choose the card that you want to use to make your daily Transactions
                    {/* <div className='rq'>Required</div> */}
                </p>
                
                <button 
                onClick={(e) => ShowCardList()}
                 style={{ color }}>
                    Manage
                </button>
            </div>
         </div>
         {showCardList && <CardList uid={uid} documents={documents}/>}
        </div>
      </div>
    </div>
  )
}
