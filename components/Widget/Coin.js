import React from "react";
import '../../pages/MarketPlace/Market.css'
import './Coin.css'

const Moeda = ({Data}) => {
  return (
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
          {Data && Data.map((data) => (
              <tr key={data.id} className='crypto-table'>
                <td className="ine">
                  <div className="crypto-img c-image">
                    <img src={data.image}/>
                  </div>
                  <div className="name"> {data.name} </div>
                </td>
                <td>${(data.current_price).toLocaleString()}</td>
               {data.price_change_percentage_24h < 0 ? ( <td className="upt-red">{(data.price_change_percentage_24h.toFixed(2))}%</td>) : 
               (<td className="upt-green">{(data.price_change_percentage_24h).toFixed(2)}%</td>)}
                <td className="coin-volume">${(data.market_cap).toLocaleString()}</td>
                <td>${(data.total_volume).toLocaleString()}</td>
              </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Moeda;