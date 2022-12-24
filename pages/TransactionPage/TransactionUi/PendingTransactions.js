import "../../Transaction/Transaction.css"
import { useCollection } from "../../../Hooks/UseCollection"
import { useState } from "react"

export default function PendingTransactions({user}) {
    const { documents } = useCollection(
        'Transactions',
        ['uid',"==",user],
        ["createdAt","desc"]
    )
    let data
    if(documents !== null){
       data = documents.filter((data) => (
         (data.status == 'Pending')
     ))
    }
  return (
    <div>
      <div className='transaction-ui'>
      <div className='transaction-wrapper assets-con'>
        <div className='transaction-head trh'>
           Pending Transactions
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
          {data &&  data.map((transaction) => (
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
    </div>
  )
}
