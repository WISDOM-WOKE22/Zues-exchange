import React, { useState, useEffect } from "react";
import axios from "axios";
import './ZuesEarn.css'

export default function ZuesEarn() {
    const [moedas, setMoedas] = useState([]);
  
    useEffect(() => {
      axios
        .get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
        )
        .then((res) => {
          setMoedas(res.data);
          // console.log(res.data);
        })
        .catch((error) => console.log(error));
    }, []);
  
    const data = moedas.slice(0,10)
  
    // const filteredMoedas = data.filter((moeda) =>
    //   moeda.name.toLowerCase().includes(search.toLowerCase())
    // );
  return (
    <div className="zues-earn-wrapper">
      {data && data.map((coin) => (
        <div key={coin.id} className='coin-con'>
            <div className="coin-image">
                <img src={coin.image} alt='coin-image'/>
            </div>
            <div className="coin-name coin-txt">{coin.name}</div>
            <div className="coin-mining-rate coin-txt green">
                15% - 30%
            </div>
            <div className="coin-txt mine-btn">Mine {coin.name}</div>
        </div>
      ))  }
    </div>
  )
}
