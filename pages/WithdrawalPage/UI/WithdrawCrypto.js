import '../../../components/Deposite/DepositeCrypto.css'
import './WithdrawCrypto.css'
import { useFireStore } from '../../../Hooks/useFirestore' 
import { useState, useEffect } from 'react'
import TranscationPin from '../TransactionPin/TransactionPin'
import Select from 'react-select'
import axios from 'axios'
import Confirm from '../../BuyCrypto/UI/Confirm'
import useBalance from '../../../Hooks/useBalance'


export default function WithdrawCrypto({ uid, color }) {
    const [ showTransactionPin, setShowTransactionPin ] = useState(false)
    const [ data, setData ] = useState('')
    const [ crypto, setCrypto ] = useState('')
    const [ cryptoError, setCryptoError ] = useState('')
    const [ walletAddress, setWalletAddress ] = useState('')
    const [ showConfirm, setShowConfirm ] = useState(false)
    const [ withdrawalAmount, setWithdrawalAmount ] = useState('')
    const [ withdrawalAmountError, setWithdrawalAmountError ] = useState()
    const [ showCryptoOptions, setShowCryptoOptoins ] = useState(false)
    const { mainBalance, Binance, Bitcoin, Shiba, Usdt, Tron, Ethereum } = useBalance()
    const { addDocument } = useFireStore(
        'Transactions',
        ["user.uid","==",uid]
    )

    const Cryptocurrency = [
      {label:'Bitcoin', value:'bitcoin',pair:"BTC", balance:Bitcoin},
      {label:'Ethereum', value:'ethereum', pair:"ETH", balance:Ethereum},
      {label:'Binance', value:'binancecoin', pair:"BNB", balance:Binance},
      {label:'USDT', value:'tether', pair:"USDT", balance:Usdt},
      {label:'Shiba-inu', value:'shiba-inu', pair:"Shib", balance:Shiba},
      {label:'Tron', value:'tron', pair:"Trx", balance:Tron}
  ]

        const date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
 

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
         recievedCrypto = ( +withdrawalAmount / +(Data[0]))
      }

      const handleSubmit = (e) => {
        e.preventDefault()
        if (!withdrawalAmount){
            return setWithdrawalAmountError('input an amount')
        } 
        if(withdrawalAmount){
          if(withdrawalAmount > crypto.balance){
            setWithdrawalAmountError('Insufficient balance')
          }else {
            setShowCryptoOptoins(true)
          }
        }
    }

    const showPin = () => {
        !showTransactionPin ? setShowTransactionPin(true) : setShowTransactionPin(false)
    }
    const handleConfirm = () => {
      //  if()
        !showConfirm? setShowConfirm(true):setShowConfirm(false)
    }


    const handleTransaction = () => {
        addDocument({
            amount:withdrawalAmount,
            uid,
            time:`${day}-${month}-${year}`,
            type:'withdraw',
            status:'Pending'
        })
    }
  return (
    <div className='withdraw-crypto-container'>
      <div className='withdrawal-box'>
        {!showCryptoOptions && <div className=''>
        <form className='withdrawal-form' onSubmit={(e) => handleSubmit(e)}>
              <label>
                <span>Select Crypto</span>
                <Select 
                 onChange={(option) => setCrypto(option)} 
                options={Cryptocurrency}
                />
                {cryptoError && <div className="error">{cryptoError}</div>}
              </label>
               <label>
                 <span>Amount</span>
                 <div className='inline'>   
                    <input type='number'
                    onChange={(e) => setWithdrawalAmount(e.target.value)}
                    value={withdrawalAmount}
                    />
                 </div>
                    {withdrawalAmountError && <span className='error'>{withdrawalAmountError}</span>}
               </label>
                <label>
                    <span>Recieve</span>
                    <div className="buy-crypto-recieve">{(recievedCrypto).toLocaleString()}</div>
                    <span className="buy-crypto-balance"> {crypto.label} balance: ${crypto.balance}</span>
                </label>
               <button className='edit-btn withdrawal-btn' style={{ backgroundColor:color }}>Withdraw {crypto.label}</button>
               </form>
        </div>}


        {showCryptoOptions && (<>
           <div className='withdrawal-form'>
            <label>
                <span>Paste Wallet address</span>
                    <div>
                        <input type='text'
                         className='wallet-address wallet-con'
                         onChange={(e) => setWalletAddress(e.target.value)}  
                         />
                </div>
            </label> 
        </div>
        <div>
            <button onClick={(e) => showPin()} 
            className='copy-btn'
             style={{ backgroundColor:color }}
             >Withdraw</button>
        </div>
        </>)}
      {showTransactionPin && <TranscationPin 
            type={'withdraw'}
            amount={withdrawalAmount} 
            pair={crypto.pair}/>}

      </div>
      { showConfirm && <Confirm
            handleConfirm={handleConfirm}
            crypto={crypto}
            recievedCrypto={recievedCrypto}
            amount={withdrawalAmount}
            color={color}
          /> }
    </div>
  )
}