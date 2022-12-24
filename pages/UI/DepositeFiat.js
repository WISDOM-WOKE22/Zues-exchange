import Select from "react-select"
import AddCard from '../UI/Addcard'
import { useState, useRef } from 'react' 
import { useAuthContext } from "../../Hooks/useAuthContext"
import BankTransfer from "../../components/Deposite/BankTransfer/BankTransfer"
import { useCollection } from "../../Hooks/UseCollection"
import '../../styles/UI/DepositeFiat.css'
import { useFireStore } from "../../Hooks/useFirestore"
import TranscationPin from "../WithdrawalPage/TransactionPin/TransactionPin"

const currencies = [
    {value:'Pounds', label:' Pound Sterling', sym:'GBP'},
    {value:'dollars', label:'US Dollars', sym:'USD'},
    {value:'Naira', label:'NGN Naira',sym:'NGN'}
]

export default function DepositeFiat({ color }) {
    const [ currency, setCurrency ] = useState('')
    const [ symbol, setSymbol ] = useState('')
    const [ amount, setAmount ] = useState('')
    const [ showBankTransfer, setShowBankTransfer ] = useState(false)
    const [ showstep1, setShowStep1 ] = useState(true)
    const [ showstep2, setShowStep2 ] = useState(false)
    const [ currencyError, setCurrencyError ] = useState(null)
    const [ error, setError ] = useState(null)
    const [ showCard, setShowCard ] = useState(false)
    const [ showTransactionPin, setTransactionPin ] = useState(false)
    const radio1 = useRef()
    const radio2 = useRef()
    const { user } = useAuthContext()
    const { addDocument } = useFireStore('Transactions')
    const uid = user.uid
    const { documents } = useCollection(
      'Add-Card',
      ["uid","==",uid],
      ["createdAt","desc"]
      )
    const showAddCard = () => {
      showCard? setShowCard(false): setShowCard(true)
    }
    const handleClick = (e) => {
      e.preventDefault()
      if(!currency){
        return setCurrencyError('please select a local currency')
      }
      if(!radio1.current.checked && !radio2.current.checked){
        return   setError('select an option')
      }
      if(radio1.current.checked && radio2.current.checked){
        return 
      }
      if(currency && (radio1.current.checked || radio2.current.checked)){
        if(radio1.current.checked){
          setShowBankTransfer(true)
          setShowStep1(false)
        }
        if(radio2.current.checked){
          setShowCard(true)
          setShowStep1(false)
          setShowStep2(true)
        }
        setError(null)
      }
      return
  }
  const conFirmTransaction = (e) => {
    e.preventDefault()
    showTransactionPin? setTransactionPin(false):setTransactionPin(true)
    // if(showstep2){
    //   setShowStep2(false)
    // }
   }
  // console.log(documents)
  return (
    <div className="dp-crypto">
      {showstep1 && <form className="dp-form " 
      onSubmit={(e) => handleClick(e)}
      >
        <h2>1. Select currency</h2>
        <label>
            <span>Currency</span>
            <Select 
              className="select"
              onChange={(option) =>{
                 setCurrency(option.value)
                 setSymbol(option.sym)}}
              options={currencies}
              />
        </label>
              {currencyError && <span className="error">
                {currencyError}
                </span>}
        <div className="dp-txt">
            <span>Deposite with</span>
            <div className="tf-ch">
              <div className="ch">
                <div>
                  <input type='checkbox'
                  ref={radio1}
                  />
                </div>
                <div><span>Bank Transfer</span></div>   
              </div>   
              <div className="ch">
                <div>
                 <input type='checkbox'
                  ref={radio2}
                 />
                </div>
                <div><span>Bank Card(Visa/MC)</span></div>   
              </div>   
              {error && <span className="error">{error}</span>}
            </div>
        </div>
         <button style={{ background:color, borderColor:color }}>Continue</button>
      </form>}
      {showstep2 && <div className="form2">
      <form className="dp-form form2" onSubmit={(e) => conFirmTransaction(e)}>
        <h2>2. Enter Amount</h2>
          <label>
              <span>Amount</span>
              <input type='Number'
                placeholder={currency}
                onChange={(e) => setAmount(e.target.value)}
                />
          </label>
          <div className="sh-currency">
            <span>you pay</span>
            <h3>{amount && <span>{(amount).toLocaleString()}</span>}
                {!amount && <span>0.00</span>}
            { symbol}</h3>
          </div>
          <button style={{ background:color, borderColor:color }}>Procced</button>
      </form>
      </div>}
      <div className="card-list">
        <ul>
          {documents && documents.map((card) => (
            <li key={card.id} className='user-card'>
              <input 
              type='checkbox'
              />
              <div>*****{(card.cardNumber).slice(7,16)}</div>
              <div>{card.name}</div>
            </li>
          ))}
        </ul>
      </div>
      {showBankTransfer && <BankTransfer uid={uid}/>}
     {(showCard &&  <AddCard showAddCard={showAddCard} uid={user.uid}/>)}
     {showTransactionPin && <TranscationPin amount={amount} type={'deposite'} pair={'Nile'} />}
    </div>
  )
}
  