/*
Things to add to this page
1) Button to Buy Page
2) button to sell page
3) button to Deposite page
4) button to send page
5) investments
*/

import './Transaction.css'
import { useCollection } from '../../Hooks/UseCollection'
import { useAuthContext } from '../../Hooks/useAuthContext'
import { FaArrowCircleDown, FaArrowCircleUp  } from 'react-icons/fa'

const Transactions = [
    {type:'Deposite', amount:'$10,000', time:'2-10-2022',pair:'ETH/USDT',status:'Completed'},
    {type:'sell', amount:'$5,000', time:'15-10-2022',pair:'BTC/USDT',status:'Completed'},
    {type:'Buy', amount:'$15,000', time:'18-10-2022',pair:'ETH/USDT',status:'Pending'},
    {type:'sell', amount:'$500', time:'21-10-2022',pair:'BTC/USDT',status:'Completed'},
    {type:'Buy', amount:'$5,000', time:'24-10-2022',pair:'ETH/USDT',status:'Completed'},
    {type:'sell', amount:'$2,000', time:'5-11-2022',pair:'ETH/USDT',status:'Pending'},
    {type:'sell', amount:'$5000', time:'10-11-2022',pair:'BTC/USDT',status:'Completed'}
]
export default function Transaction() {
  const { user } = useAuthContext()
  const { documents } = useCollection(
    'Transactions',
    ["uid","==",user.uid],
    ["createdAt","desc"]
    )
  return (
    <div className='transaction-ui'>
      <div className='transaction-wrapper assets-con'>
        <div className='transaction-head trh'>
           Transaction log
        </div>
        <hr/>
        <div className='transactions'> 
        <table className='table'>
          <thead>
            <tr className='tr'>
              <th>Type</th>
              <th>Amount</th>
              <th>Pairs</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          {documents &&  documents.map((transaction) => (
            <tbody key={transaction.id}>
                <tr className='tr'>
                  <td className='td'>{transaction.type}</td>
                  <td className='td'>{transaction.amount}</td>
                  <td className='td'>{transaction.pair}</td>
                  <td className='td'>{transaction.time}</td>
                  {transaction.status === 'Completed' && <td className='by td'>{transaction.status}</td>}
                  {transaction.status !== 'Completed' && <td className='sl td'>{transaction.status}</td>}
                </tr>
            </tbody>
          ))} 
        </table>
        {!documents && <div className='n-tr'>You have no trasaction. Fund your account</div>}
        </div>
      </div>
    </div>
  )
}
