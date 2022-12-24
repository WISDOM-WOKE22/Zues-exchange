import './WithdrawFiat.css'
import { useState } from 'react'
import { useFireStore } from '../../../Hooks/useFirestore'
import { useCollection } from '../../../Hooks/UseCollection'
import { useAuthContext } from '../../../Hooks/useAuthContext'
import TransactionPin from '../TransactionPin/TransactionPin'
import useBalance from '../../../Hooks/useBalance'

export default function WithdrawFiat({ color }) {
    const { user } = useAuthContext()
    const [ withdrawalAmount, setWithdrawalAmount ] = useState('')
    const [ showTransactionPin, setShowTransactionPin ] = useState(false)
    const [ withdrawalAmountError, setWithdrawalAmountError ] = useState('')
    const [ withdrawalError, setWithdrawalError ] = useState('')
    const uid = user.uid
    const { mainBalance } = useBalance()
    const { addDocument } = useFireStore('Transactions')
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    const { documents } = useCollection('Bank-Account')
    const handleSubmit = (e) => {
        e.preventDefault()
        setWithdrawalError('')
        if(!withdrawalAmount){
          return setWithdrawalError('input an amount')
        }
        if(withdrawalAmount > mainBalance){
          setWithdrawalError('Insufficient balance')
        } else{
          setShowTransactionPin(true)
        }
        
    } 

    const max = () => {
        setWithdrawalAmount(mainBalance)
    }

  return (
    <div className='w-crypto'>
      <div className='w-cypto-container'>
        <div className='bank-container'>
            <h4>Bank</h4>
            <ul className='bank-list'>
                {documents && documents.map((bank) => (
                <li className='bank-item' key={bank.id}>
                 <input type='checkbox' className='bank-i'/>
                  <p className='bank-i'>{bank.bankName}</p>
                  <p className='bank-i'>******{(bank.acctNumber).slice(6,15)}</p>
                </li>
                ))}
            </ul>
        </div>
        <div className='withdrawal-form-container'>
           {!showTransactionPin && (<form className='withdrawal-form' onSubmit={(e) => handleSubmit(e)}>
               <label>
                 <span>Amount</span>
                 <div className='inline inline2'>   
                    <input type='number'
                    onChange={(e) => setWithdrawalAmount(e.target.value)}
                    value={withdrawalAmount}
                    />
                    <div 
                      className='max-btn' 
                      style={{ background: color }}
                      onClick={() => max()}
                      >Max</div>
                 </div>
                 {withdrawalError && <div className='error'>{withdrawalError}</div>}
               </label>
               <button className='edit-btn' style={{ backgroundColor: color }}>Withdraw</button>
               </form>)}
               {showTransactionPin && <TransactionPin amount={withdrawalAmount} setShowTransactionPin={setShowTransactionPin} type={'withdraw'} pair={'Nile'}/> }
        </div>
      </div>
    </div>
  )
}