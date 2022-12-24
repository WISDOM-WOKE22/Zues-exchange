import useBalance from "../../Hooks/useBalance"
import './BuyCrypto.css'
import Select from "react-select"
import { useState, useEffect } from "react"
import { useThemeContext } from "../../Hooks/useThemeContext"
import  axios  from "axios"
import Confirm from "./UI/Confirm"
import TranscationPin from "../WithdrawalPage/TransactionPin/TransactionPin"
import SellCrypto from "./SellCrrypto/SellCrypto"

const cryptos = [
    {label:'Bitcoin', value:'bitcoin'},
    {label:'Ethereum', value:'ethereum'},
    {label:'Binance', value:'binancecoin'},
    {label:'USDT', value:'tether'},
    {label:'Shiba-inu', value:'shiba-inu'},
    {label:'Tron', value:'tron'}
]

export default function BuyCrypto() {
    const [ amount, setAmount ] = useState()
    const [ amountError, setAmountError ] = useState('')
    const [ showSellCrypto, setShowSellCrypto ] = useState(false)
    const [ isHover, setISHover ] = useState(false)
    const [ data, setData ] = useState('')
    const [ crypto, setCrypto ] = useState('')
    const [ cryptoError, setCryptoError ] = useState('')
    const [ showConfirm, setShowConfirm ] = useState(false)
    const { color } = useThemeContext()
    const { mainBalance } = useBalance()

    const style = {
        borderBottomColor: isHover ? color : 'lightgray',
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
      let Data 
      let recievedCrypto = '0.000000000'
      if( (crypto != '')){
         Data =  data.filter((data) => data.id == crypto.value).map((data) => data.current_price);
         recievedCrypto = +amount/+(Data[0])
      }
      // console.log(recievedCrypto)

      const handleConfirm = () => {
        !showConfirm? setShowConfirm(true):setShowConfirm(false)
    }
     
    const handleShowSellCrypto = () => {
      if(!showSellCrypto){
        setShowSellCrypto(true)
      }
    }
    const handleShowBuyCrypto = () => {
      if(showSellCrypto){
        setShowSellCrypto(false)
      }
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
      // console.log(showConfirm)
   return (
    <div className="page">
        <div className="buy-crypto-container">
           <h2>Buy Crypto</h2>
           <div className="buy-crypto-main">
            <div className="buy-crypto-select">
                <div className="buy-crypto-option" 
                 onMouseEnter={() => setISHover(true)}
                 onMouseLeave={() => setISHover(false)}
                 style={style}
                 onClick={() => handleShowBuyCrypto()}
                >Buy</div>
                <div className="buy-crypto-option"
                onMouseEnter={() => setISHover(true)}
                onMouseLeave={() => setISHover(false)}
                onClick={() => handleShowSellCrypto()}
                style={style}
                >Sell</div>
            </div>
            {!showSellCrypto && <div className="buyCrypto-input">
              <label>
                <span>Select Crypto</span>
                <Select 
                 onChange={(option) => setCrypto(option)} 
                options={cryptos}
                />
                {cryptoError && <div className="error">{cryptoError}</div>}
              </label>
              <label>
                <span>Spend</span>
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
            </div>}
            {showSellCrypto && <SellCrypto cryptos={cryptos} color={color} mainBalance={mainBalance} />}
           </div>
        </div>
          { showConfirm && <Confirm
            handleConfirm={handleConfirm}
            crypto={crypto}
            recievedCrypto={recievedCrypto}
            amount={amount}
            color={color}
          /> }
    </div>
  )
}
