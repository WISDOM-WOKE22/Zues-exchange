import './WithdrawalSettings.css'
import Select from 'react-select'
import { useFireStore } from '../../../Hooks/useFirestore'
import { useCollection } from '../../../Hooks/UseCollection'
import { useState } from 'react'
import { FaStickyNote, FaTrash } from 'react-icons/fa'
import { projectFirestore } from '../../../Firebase/FirebaseConfig'
import { useThemeContext } from '../../../Hooks/useThemeContext'

const Cryptocurrency = [
    {value:'Bitcoin',label:'Bitcoin',walletAddress:'U383NU3497ROW57EO505NFKNO'},
    {value:'Ethereum',label:'Ethereum',walletAddress:'BE73894BE4BDKJ-R9B3849DO2'},
    {value:'Binance',label:'Binance',walletAddress:'N3847F7B03B83CHE8393BDH39'},
    {value:'Litecoin',label:'Litecoin',walletAddress:'84UNF7B4B02NDJE9N3DO30S'},
    {value:'USDT',label:'USDT',walletAddress:'9EFJKD93Y3663VDVD6VDG7DJ9RN'},
    {value:'Shiba-inu',label:'Shiba-inu',walletAddress:'82 E8E89U8N0DN9N3HDN9E'},
    {value:'Tron',label:'Tron',walletAddress:'93BF8JXDD30DJD3938N309'}
]

const BankDetails = [
    {bankName:'Access Bank', AcctName:'Wisdom Woke', AcctNumber:'0384382022'},
    {bankName:'UBA Bank', AcctName:'Ikechi Woke', AcctNumber:'083834940482'},
    {bankName:'Fidelity Bank', AcctName:'Wisdom Woke', AcctNumber:'0384020532'}
]

export default function WithdrawalSettings({user}) {
    const { color } = useThemeContext()
    const [ showBankForm, setShowBankForm ] = useState(false)
    const [ bankName, setBankName ] = useState('')
    const [ bankNameError, setBankNameError ] = useState('')
    const [ acctName, setAcctName ] = useState('')
    const [ acctNameError, setAcctNameError ] = useState('')
    const [ acctNumber, setAcctNumber ] = useState('')
    const [ acctNumberError, setAcctNumberError ] = useState('')
    const [ bankSwiftCode, setBankSwiftCode ] = useState('')
    const [ bankSwiftCodeError, setBankSwiftCodeError ] = useState('')
    const [ walletAdress, setWalletAdress ] = useState('')
    const { addDocument } = useFireStore('Bank-Account')
    const uid = user.uid
    const { documents } = useCollection(
        'Bank-Account',
        ["uid","==", uid]
        )

    const SaveBankAcct = () => {
        setAcctNameError('')
        setAcctNumberError('')
        setBankNameError('')
        setBankSwiftCodeError('')
        if(!bankName){
            setBankNameError('No bank name specified')
        }
        if(!acctName){
            setAcctNameError('No account number specified')
        }
        if(!acctNumber){
            setAcctNumberError('No account number specified')
        }
        if(!bankSwiftCode){
            setBankSwiftCodeError('No bank swift code specified')
        }
        if(bankName && acctName && acctNumber && bankSwiftCode){
            addDocument({
               bankName,
               acctName,
               acctNumber,
               bankSwiftCode,
               uid
            })
        setAcctName('')
        setAcctNumber('')
        setBankName('')
        setBankSwiftCode('')
        }
    } 
    const deleteItem = (id) => {
        projectFirestore.collection('Bank-Account').doc(id).delete()
    }
  return (
    <div className='withdrawal-stt-con'>
      <div className='withdrawal-box'>
        <div className='hd-stt-wd'>Bank Account</div>
        <ul>
            {documents && documents.map((bank) => (
               <li className='Bank-item' key={bank.id}>
                <input type='checkbox'/>
                <p>{bank.bankName}</p>
                <p>{bank.acctName}</p>
                <p>{bank.acctNumber}</p>
                <FaTrash 
                 className='bank-icon'
                  onClick={() => deleteItem(bank.id)}/>
               </li> 
            ))}
        </ul>
         <form className='withdrawal-form'>
            <label>
                <span>Bank Name</span>
                <input type='text'
                 placeholder='Enter bank name'
                 onChange={(e) => setBankName(e.target.value)}
                 value={bankName}
                 />
                {bankNameError && <div className='error'>{bankNameError}</div>}
            </label>
            <label className='form-inpt2'>
                <span>Account Name</span>
                <input type='text'
                 placeholder={user.displayName}
                 onChange={(e) => setAcctName(e.target.value)}
                 value={acctName}
                 />
                {acctNameError && <div className='error'>{acctNameError}</div>}
            </label>
            <label>
                <span>Account Number</span>
                <input type='number'
                 placeholder='Enter Account Number'
                 onChange={(e) => setAcctNumber(e.target.value)}
                 value={acctNumber}
                 />
                {acctNumberError && <div className='error'>{acctNumberError}</div>}
            </label>
            <label className='form-inpt2'>
                <span>Bank Swift Code</span>
                <input type='text'
                 placeholder='Enter Account Number'
                 onChange={(e) => setBankSwiftCode(e.target.value)}
                 value={bankSwiftCode}
                 />
                {bankSwiftCodeError && <div className='error'>{bankSwiftCodeError}</div>} 
            </label>
        </form>
        <div>
            <button
             className='edit-btn'
             style={{ background: color }}
             onClick={() => SaveBankAcct()}
             >Add bank</button>
        </div>
      </div>
      <div className='withdrawal-box'>
        {/* <div className='hd-stt-wd'>Cryptocurrency</div>
        <div className='withdrawal-form'>
            <label>
                <span>Select Crptocurrency</span>
                <Select
                onChange={(option) => {setWalletAdress(option.walletAddress)}}
                  className='crypto-select'
                 options={Cryptocurrency}
                 />
            </label>
            <label>
                <span>Wallet address</span>
                <div className='wallet-address'>
                    <div>
                        {walletAdress}
                    </div>
                <FaStickyNote className='copy-icon'/>
                </div>
            </label>
        </div>
        <div>
            <button className='edit-btn'>Save</button>
        </div> */}
      </div>
    </div>
  )
}
