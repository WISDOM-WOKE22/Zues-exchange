import './ConfirmTransaction.css'
import { useCollection } from '../../../Hooks/UseCollection'

export default function ConfirmTransaction({ amount }) {
  const { documents } = useCollection()
  return (
    <div className='c-transaction-container'>
      <div className='c-transaction-wrapper'>
        <h3>Confirm Withdrawal</h3>
        <div className='ctf-box'>
            <div>
              <span>Amount</span>:
              <span>{amount}</span>
            </div>
            <div>
              <span>Bank Name</span>:
              <span>{amount}</span>
            </div>
        </div>
      </div>
    </div>
  )
}
