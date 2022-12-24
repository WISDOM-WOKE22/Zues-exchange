import { useState, useEffect, useRef } from 'react'
import { FaArrowAltCircleUp, FaDollarSign, FaWallet, FaWarehouse, FaUser } from 'react-icons/fa'
import './Dashboard.css'
import { Link } from 'react-router-dom'
import Transaction from '../Transaction/Transaction'
import Assets from '../UI/Assets/Assets'
import { useAuthContext } from '../../Hooks/useAuthContext'
import { useCollection } from '../../Hooks/UseCollection'
import axios from 'axios'
import useBalance from '../../Hooks/useBalance'
import { useThemeContext } from '../../Hooks/useThemeContext'
import { motion, AnimatePresence } from 'framer-motion'

const balanceVariants = {
  hidden:{
    x: '-100vw'
  },
  visible:{
    x: 0,
    transition:{
        type:'tween',
        duration: 1,
    }
  }
}

const assetVariants = {
  hidden:{
    x:'-100vw'
  },
  visible:{
    x:0,
    transition:{
      type:'tween',
      duration:1,
      delay:0.8
    }
  }
}

export default function Dashboard() {
  const [ data, setData ] = useState('')
  const { mainBalance } = useBalance()
  const { user } =  useAuthContext()
  const { color, background } = useThemeContext()
  const { documents } = useCollection(
    'Transactions',
    ['uid',"==",user.uid]
  )
  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? color:'black'
    }
  }
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=300&page=1&sparkline=false"
      )
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  let bitcoin
  let Btc
  let btc
  if((data.length !== 0) && (data !== null)){
    bitcoin = data.slice(0,1)
    Btc = bitcoin[0]
    btc = Btc.current_price
  }
    //  let balance = '0.000'
  // if((documents !== [] ) && (documents !== null) ){
  //      balance = documents.map( transaction => +(transaction.amount))
  //     .reduce((acc, amount) => ((acc += amount)))
  // }

  return (
  <AnimatePresence>  
  <motion.div className="page DB"
   exit={{
     x:'-100vw',
     transition: {
       ease: 'easeInOut'
     } }} >
      <div className="dashboard-con">
       {/* User info */}
        <div className='user-information '>
          <div className='user-info-con db-head'>
            <div className='user-abt'>
              <div className='user-i-image'>
                {user.photoURL && <img src={user.photoURL}/>}
                {!user.photoURL && <FaUser className='user-icon'/>}
              </div>
              <div className='user-details'>
                  <div className='user-details-container'>
                    <span className='user-name dlt'>
                      <span className='dl'>
                      user-name: 
                      </span>
                      {user.displayName}</span>
                    <span className='user-id dlt'>
                      <span className='dl'>
                        user-Id:
                      </span>
                      {user.uid.slice(0,12)}</span>
                  </div>
                </div>
            </div>
                <div className='db-options'>
                  <div className='db-opt-con'>
                    <Link to='/Deposite' >
                      <button className='db-btn' style={{ color:color, borderColor: color }}>Deposite</button>
                    </Link>
                    <Link to='/withdraw'>
                       <button className='db-btn' style={{ color, borderColor: color }}>Withdraw</button>
                    </Link>
                    <Link to='/buy_crypto'>
                      <button className='db-btn' style={{ color, borderColor: color }}>Buy Crypto</button>
                    </Link>
                  </div>
                </div>
              </div>
          </div>
          
        </div>
          <div className='db-body'>
            <div className='dbf1'>
              <motion.div className='user-acct db-item' 
                initial={{ x:'-100vw' }}
                animate={{ x:0, transition:{ delay:0.4 } }}
              >
                <div className='user-acct-con' style={{ backgroundColor: color }}>
                  <div className='acct-txt'>
                    Estimated Balance
                  </div>
                  <div className='acct-info'>
                    <span className='acct-info-btc' >
                      {btc && (+(mainBalance) / (btc) ).toFixed(9)} 
                      {!btc && <span>0.000000000</span>}BTC</span> ~
                    <span className='acct-info-fiat'>${(mainBalance).toLocaleString()}</span>
                  </div>
                </div>
              </motion.div>
              <div className='acct-dt'>
            <motion.div className='services'
              initial={{ opacity:0 }}
              animate={{ opacity:1, transition:{
                duration:1,
                delay: 0.5
              } }}
            >
              <div className='services-box'>
                <Link to='/buy_crypto' className='link bx'>
                  <div className='srvs'  style={{  borderColor: color, color }}>
                    <FaDollarSign/>
                    <div>Buy <br/> Crypto</div>
                  </div>
                </Link>
                <Link to='/Withdraw' className='link bx'>  
                  <div className='srvs' style={{  borderColor: color, color }}>
                    <FaArrowAltCircleUp/>
                    <div>Withdraw </div>
                  </div>
                </Link>
                <Link to='/Deposite' className='link bx'>
                  <div className='srvs' style={{  borderColor: color, color }}>
                    <FaWarehouse/>
                    <div>Deposite</div>
                  </div>
                </Link>
                <Link to='/earn' className='bx' style={{  borderColor: color, color }}>
                <div className='srvs'>
                  <FaWallet/>
                  <div>Earn</div>
                </div>
                </Link>
              </div>
              </motion.div>
              </div>
              <motion.div className='db-assets db-item'
                variants={balanceVariants}
                initial='hidden'
                animate='visible'
              >
                <Assets/>
              </motion.div>
            </div>
            <motion.div className='db-transaction db-item' 
              variants={ assetVariants }
              initial='hidden'
              animate='visible'
            >
              <Transaction/>
            </motion.div>
          </div>
        </motion.div>
       </AnimatePresence>
  )
}
