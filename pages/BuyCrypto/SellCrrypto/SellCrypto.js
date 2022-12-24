import axios from "axios"
import { useState, useEffect } from "react"
import Select from "react-select"
// import TransactionPin from 

export default function SellCrypto({ cryptos, color, mainBalance }) {
    const [ amount, setAmount ] = useState()
    const [ amountError, setAmountError ] = useState('')
    const [ data, setData ] = useState('')
    const [ crypto, setCrypto ] = useState('')
    const [ cryptoError, setCryptoError ] = useState('')
    const [ showConfirm, setShowConfirm ] = useState(false)

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
      let Data 
      let recievedCrypto = '0.000000000'
      if( (crypto != '')){
         Data =  data.filter((data) => data.id == crypto.value).map((data) => data.current_price);
         recievedCrypto = (+amount * +(Data[0]))
      }
      
      const handleConfirm = () => {
        !showConfirm? setShowConfirm(true):setShowConfirm(false)
    }
       const handleClick = () => {
      setAmountError('')
      setCryptoError('')
      if(!crypto){
        setCryptoError('Select a crypto currency')
      }
      if(!amount){
        setAmountError('Input an amount')
      }
      if(amount > mainBalance){
         return setAmountError('insufficient balance')
      }
        if(crypto && amount){
          handleConfirm()
        }
      }

  return (
    <>
      <div className="buyCrypto-input">
              <label>
                <span>Select Crypto</span>
                <Select 
                 onChange={(option) => setCrypto(option)} 
                options={cryptos}
                />
                {cryptoError && <div className="error">{cryptoError}</div>}
              </label>
              <label>
                <span>Sell</span>
                <input type='number' 
                 onChange={(e) => setAmount(e.target.value)}/>
                 <div className="buy-crypto-in"> 
                  {amountError && <span className="error">{amountError}</span>}
                  <span className="buy-crypto-balance">account balance: ${(mainBalance).toLocaleString()}</span>
                 </div>
              </label>
              <label>
                <span>Recieve</span>
                <div className="buy-crypto-recieve">{(recievedCrypto).toLocaleString()}</div>
              </label>
              <button style={{ backgroundColor:color }}
                onClick={() => handleClick()} 
                >Buy 
                { !crypto && <span> crypto</span> }
                { crypto && <span> {crypto.value}</span> }
              </button>
            </div>
    </>
  )
}
