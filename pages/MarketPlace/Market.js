import './Market.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useThemeContext } from '../../Hooks/useThemeContext';
import Coin from '../../components/Widget/Coin'

export default function Market() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
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
  
    const handleChange = (e) => {
      setSearch(e.target.value);
    };
  
    const filteredSearch = data.filter((data) =>
      data.name.toLowerCase().includes(search.toLowerCase())
    );
    // console.log(data)
  return (
    <div className='market page'>
        <div className='market-wrapper'>
            <div className='market-search-container'>
            <div className="market-search">
                <h2 style={{ color }}>Crypto Market</h2>
                <form>
                    <input
                        className="market-input"
                        type="text"
                        onChange={handleChange}
                        placeholder="Search for a Cryptocurrency"
                    />
                </form>
            </div>
            </div>
           <div className="coin-mn">
            <div className="coin-container">
              <table className="coin-table">
                <thead className="crypto-head">
                  <tr className="crypto-head-con">
                    <th className="name-th">Name</th>
                    <th>LastPrice</th>
                    <th>24h Change</th>
                    <th className="coin-volume">Volume</th>
                    <th>Market Cap</th>
                  </tr>
                </thead>
                <tbody>
                {filteredSearch && filteredSearch.map((data) => (
                    <tr key={data.id} className='crypto-table'>
                      <td className="ine">
                        <div className="crypto-img c-image">
                          <img src={data.image}/>
                        </div>
                        <div className="name"> {data.name} </div>
                      </td>
                      <td>${(data.current_price).toLocaleString()}</td>
                    {data.price_change_percentage_24h < 0 ? ( <td className="upt-red">{(data.price_change_percentage_24h.toFixed(2))}%</td>) : 
                    (<td className="upt-green">{(data.price_change_percentage_24h)}%</td>)}
                      <td className="coin-volume">${(data.market_cap).toLocaleString()}</td>
                      <td>${(data.total_volume).toLocaleString()}</td>
                    </tr>
                ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
    </div>
  )
}
