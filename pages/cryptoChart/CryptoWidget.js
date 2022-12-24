import { useState, useEffect } from "react";
import axios from "axios";
import "./CryptoWidget.css";
import Coin from "./../../components/Widget/Coin";

export default function CryptoWidget() {
  const [Data, setData] = useState([]);
  const [ search, setSearch ] = useState('')

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  const data = Data.slice(0,10)
  const filteredData = data.filter((data) =>
    data.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="moeda-app crypto-widget">
          <Coin
            Data={filteredData}
          />
    </div>
  );
}