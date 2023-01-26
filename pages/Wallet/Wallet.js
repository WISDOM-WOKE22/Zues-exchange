import './Wallet.css'
import Assets from '../UI/Assets/Assets'
import DoughnutChart from '../../components/Chart/DoughnutChart'
import { FaAngleDoubleRight, FaBitcoin, FaHeart, FaClock, FaUser } from 'react-icons/fa'
import Transaction from '../Transaction/Transaction'
import useBalance from '../../Hooks/useBalance'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useThemeContext } from '../../Hooks/useThemeContext'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Wallet() {
    const [ data, setData ] = useState('')
    const { mainBalance } = useBalance()
    const { color } = useThemeContext()
       

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
  return (
    <div>
        <div className="page wallet-page">
           <div className='wallet-wrapper'>
            <div>
                <motion.div className='porfolio-balance-con' 
                 initial={{ x:'-100vw' }}
                 animate={{ x:0, transition: {
                   duration: 1
                 } }}
                >
                  <div className='portfolio-txt'>
                    <span>Estimated Balance</span> 
                    <br/>
                    <span className='balance'>{(+(mainBalance) / (btc) ).toFixed(9)} BTC</span> ~ 
                    <span className='balance amt'> ${(mainBalance).toLocaleString()}</span>
                  </div>
                  <div className='ln-started'>
                    <span className='ln-txt'>Get started with Bitcoin <FaBitcoin className='ln-icon'/> </span>
                    <p style={{ color }}>Learn more</p>
                    <div className='ln-boxs'>
                      <div className='ln-box1'>
                        <div>
                          <FaHeart className='ln-icon1' style={{ color }}/> 
                          <span>The worlds #1 cryptocurrency</span>
                        </div>
                        <div>
                          <FaClock className='ln-icon1'/>
                          <span>Trade 24 hours a day</span>
                        </div>
                        <div>
                          <FaAngleDoubleRight className='ln-icon1'/>
                          <span> Get started with as little as $50</span>
                        </div>
                      </div>
                      <div className='middle-line' style={{ backgroundColor:color }}/>
                      <div className='ln-box2'>
                        <div className='ln-box2-con'>
                          <FaUser className='ln-icon2' style={{ color }}/>
                          <p>
                            <span style={{ color }}>{(Math.floor(Math.random() * 10000)).toLocaleString()}+</span> customers bought Bitcoin today
                            </p>
                            <Link to='/buy_crypto' className='link buy-link'>
                              <button className='buy-btn' style={{ backgroundColor:color }}>Buy Bitcoin</button>
                            </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                <div className='Echarts-container'>
                  <DoughnutChart/>
                </div>
                <motion.div className='Assets-con' 
                 initial={{ x:'-100vw' }}
                 animate={{ 
                  x:0,
                  transition: {
                    duration:1,
                    delay: 0.5 
                  }
                 }}
                >
                  <Assets/>
                </motion.div>
                <div>
                </div>
            </div>
            <motion.div className='transaction-com'
              initial={{ x:'-100vw' }}
              animate={{ 
               x:0,
               transition: {
                 duration:1,
                 delay: 1
               }
              }}
            >
              <Transaction/>
            </motion.div>
            </div>      
        </div>
    </div>
  )
}
