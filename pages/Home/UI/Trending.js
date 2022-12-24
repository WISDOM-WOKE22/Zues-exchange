import axios from "axios";
import { useEffect, useState } from "react";
import './Trending.css'

export default function Trending(){
   const [ data, setData ] = useState([])

    useEffect(() => {
        axios
        .get('https://api.coingecko.com/api/v3/search/trending')
        .then(result => setData(result.data.coins))
        .catch(error => console.log(error))
    },[])
     console.log(data)
    return (
        <div className="Trending-container">
           { data && data.map((coin) => (
            <div className="trending-coin" key={coin.id}>
                <div className="trending-coin-name">
                    <div className="coin-image trending-coin-image">
                     <img className="coin-image trending-coin-image" src={coin.item.thumb}/>
                    </div>
                <div className="c-name">
                    <div>{coin.item.name}</div>
                    <span>{coin.item.symbol}</span>
                </div>
            </div>

            <div className="trending-coin-price">
                {/* <div>Price in Bitcoin</div> */}
                <span className="trending-price">{(coin.item.price_btc)}</span>
                <span className="tp-c">btc</span>
            </div>
            </div>
           ))}
        </div>
    )
}