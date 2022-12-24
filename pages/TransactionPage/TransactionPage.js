import React from 'react'
import './TransactionPage.css'
import { useAuthContext } from '../../Hooks/useAuthContext'
import { useCollection } from '../../Hooks/UseCollection'
import PendingTransactions from './TransactionUi/PendingTransactions'
import DepositeTransactions from './TransactionUi/DepositeTransactions'
import WithdrawalTransactions from './TransactionUi/WithdrawalTransactions'
import ActivityGraph from '../../components/ActivityGraph/ActitvityGraph'
import useBalance from '../../Hooks/useBalance'
import { motion } from 'framer-motion'

export default function TransactionPage() {
  const {
    balance,
    TotalPending,
    TotalWithdrawal,
    TotalDeposite
  } = useBalance()
    const { user } = useAuthContext()
    const { documents } = useCollection(
        'Transactions',
        ["uid","==",user.uid]
        )
        // console.log(documents)
  return (
    <div className='page transaction-page'>
      <div className='transaction-page-container'>
        <h3>Transaction Page</h3>
        <div className='transaction-box-container'>
            <motion.div className='transaction-boxs' 
              initial={{ x:'-100vw' }}
              animate={{ x: 0, transition:{ duration:1, type: 'tween' } }}
            >
               <div className='transaction-box'>
                 <h4>Total Transaction</h4>
                 <h2 className='
                 transaction-amount'>${(balance)}</h2>
               </div>
               <div className='transaction-box'>
                 <h4>Total Deposite</h4>
                 <h2 className='
                 transaction-amount'>${(TotalDeposite)}</h2>
               </div>
               <div className='transaction-box'>
                 <h4>Total Withdrawal</h4>
                 <h2 className='
                 transaction-amount'>${(TotalWithdrawal)}</h2>
               </div>
               <div className='transaction-box'>
                 <h4>Total Pending</h4>
                 <h2 className='
                 transaction-amount'>${(TotalPending)}</h2>
               </div>
            </motion.div>
            <motion.div className='activity-chart' 
              initial={{ x: '-100vw' }}
              animate={{ x:0, transition: { duration:1, type:'tween', delay: 0.5 } }}
            >
              <ActivityGraph/>
            </motion.div>
        </div>    
            <motion.div className=' db-body'
              initial={{ x:'-100vw' }} 
              animate={{ x:0, transition:{ duration:1, delay:0.8 } }}
            >
                <div className='db-item transaction-itm'>
                <PendingTransactions className='transaction-itm' user={user.uid}/>
                </div>
                <div className='db-item transaction-itm' >
                <DepositeTransactions className='transaction-itm' user={user.uid}/>
                </div>
                <div className='db-item transaction-itm' >
                <WithdrawalTransactions className='transaction-itm' user={user.uid}/>
                </div>
            </motion.div>
        </div>
    </div>
  )
}
