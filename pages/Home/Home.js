// import CryptoNewsApi from '../../APIs/CryptoNewsApi'
// import Cryptoidget from '../../components/Widget/Cryptoidget'
// import CryptoWidget from '../cryptoChart/CryptoWidget'
import axios from 'axios'
import { useState, useEffect } from 'react'
import './Home.css'
import HomeNews from './UI/HomeNews'
import Trending from './UI/Trending'
import { useFetch } from '../../Hooks/useFetch'
export default function Home() {
  const [moedas, setMoedas] = useState([]);
  const [ search, setSearch ] = useState('')

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setMoedas(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  const data = moedas.slice(0,3)
  console.log(data)

  return (
    <div className='page Home'>
      <div className='Home-container'>

      <div className='home-main-block'>
        <div className='transaction-balance'>
          <div className='bl-txt'>
              Your balance
          </div>
          <div className='balance-amount'>
              $ 0.00
          </div>
        </div>
        <hr className='line'/>
          <div className='hd'>
            <h3>Watchlist</h3>
          <div className='coin-info'>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody className='coin-body'>
            {data && data.map((coin) => (
              <tr className='home-coin' key={coin.id}>
                <td className='coin_name c-n'>
                  <div className='coin-image'>
                    <img src={coin.image}/>
                  </div>
                  <div className='c-name'>
                    <span>{coin.name}</span>
                    <span className='l-name'>{coin.symbol}</span>
                  </div>
                </td>
                <td className='c-n'>{coin.current_price}</td>
                {data.price_change_percentage_24h < 0 ? ( <td className="upt-red">{parseFloat
                (data.price_change_percentage_24h).toFixed(2)}%</td>) : 
                (<td className="upt-green">{parseFloat(data.price_change_percentage_24h).toFixed(2)}%</td>)}
                <td className='c-n'>{(coin.market_cap).toLocaleString()}</td>
                <td className='c-n'>${(coin.total_supply).toLocaleString()}</td>
                <td className='c-n'>${(coin.total_volume).toLocaleString()}</td>
                <td>
                  <button className='edit-btn'>Buy</button>
                </td>
              </tr>
            ))}
              </tbody>
            </table>
          </div>
          </div>
          <div className='crypto-news'>
            <HomeNews/>
          </div>
      </div>
         <div className='Trending'>
         <h3>Trending</h3>
            <Trending/>
         </div>
      </div>
    </div>
  )
}
