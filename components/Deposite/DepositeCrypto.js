import './DepositeCrypto.css'
import Select from 'react-select'
import { useState } from 'react'
import { FaStickyNote } from 'react-icons/fa'
import { useFireStore } from '../../Hooks/useFirestore'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../Hooks/useAuthContext'

const Cryptocurrency = [
    {value:'Bitcoin',label:'Bitcoin',walletAddress:'U383NU3497ROW57EO505NFKNO',pair:"BTC"},
    {value:'Ethereum',label:'Ethereum',walletAddress:'BE73894BE4BDKJ-R9B3849DO2',pair:"ETH"},
    {value:'Binance',label:'Binance',walletAddress:'N3847F7B03B83CHE8393BDH39',pair:"BNB"},
    {value:'Litecoin',label:'Litecoin',walletAddress:'84UNF7B4B02NDJE9N3DO30S',pair:"LTC"},
    {value:'USDT',label:'USDT',walletAddress:'9EFJKD93Y3663VDVD6VDG7DJ9RN',pair:"USDT"},
    {value:'Shiba-inu',label:'Shiba-inu',walletAddress:'82 E8E89U8N0DN9N3HDN9E',pair:"Shib"},
    {value:'Tron',label:'Tron',walletAddress:'93BF8JXDD30DJD3938N309',pair:"Trx"}
]

export default function DepositeCrypto() {
    const [ walletAddress, setWalletAddress ] = useState('')
    const [ walletAddressError, setWalletAddressError ] = useState('')
    const [ amount, setAmount ] = useState('')
    const [ amountError, setAmountError ] = useState('')
    const { user } = useAuthContext()
    const { addDocument } = useFireStore('Transactions')

    const navigate = useNavigate()
    const uid = user.uid
    const date = new Date();
     let day = date.getDate();
     let year = date.getFullYear();
     let month = date.getMonth() + 1;
     
     const copyWalletAddress = () => {
       if(!walletAddress){
         setWalletAddressError('Select a wallet address ')
        }else{
          setWalletAddressError('')
        }
        if(!amount){
          setAmountError('input amount')
        }else{
          setAmountError('')
        }
        if(walletAddress && amount){
           
           addDocument({
            amount,
            type: 'deposite',
            status:'Pending',
            time:`${day}-${month}-${year}`,
            uid,
            pair:walletAddress.pair
           })
           navigate('/')
       }
       setAmount('')
      //  setWalletAddress('')
      //  setAmountError('')
      //  setWalletAddressError('')
    }


  return (
    <div className='deposite-crypto'>
      <div className='withdrawal-box'>
        <div className='hd-stt-wd'>Cryptocurrency</div>
        <div className='withdrawal-form'>
            <label>
                <span>Select Crptocurrency</span>
                <Select
                onChange={(option) => {setWalletAddress(option)}}
                  className='crypto-select'
                 options={Cryptocurrency}
                 />
                 {walletAddressError && <div className='error'>{walletAddressError}</div>}
            </label>
            <label>
                <span>Amount</span>
                <input 
                  type='number'
                  className='amount-box'
                  onChange={(e) => setAmount(e.target.value)}
                  value={amount}
                />
                {amountError && <div className='error'>{amountError}</div>}
            </label>
            <label>
                <span>Wallet address</span>
                <div className='wallet-address'>
                    <div>
                        {walletAddress.walletAddress}
                    </div>
                <FaStickyNote
                 className='copy-icon'
                  onClick={() => copyWalletAddress()}
                  />
                </div>
            </label>
        </div>
        {/* <div>
            <button className='edit-btn'>Save</button>
        </div> */}
      </div>
    </div>
  )
}
