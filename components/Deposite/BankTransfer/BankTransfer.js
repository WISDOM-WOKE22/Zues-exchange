import { useState } from "react";
import { useFireStore } from "../../../Hooks/useFirestore";
import { useNavigate } from "react-router-dom";
import './BankTransfer.css'
import { FaClone } from "react-icons/fa";

export default function BankTransfer({uid}) {
    const [ amount, setAmount ] = useState('')
    const [ amountError, setAmountError ] = useState('')
    const { addDocument } = useFireStore('Transactions') 
    const accountnumber = '758473483489'
    const navigate = useNavigate

    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    const handleClick = () => {
        if(!amount){
            return setAmountError('please input an amount')
        }
        navigator.clipboard.writeText(accountnumber)
        addDocument({
            amount,
            uid,
            time:`${day}-${month}-${year}`,
            status:'Pending',
            type:'Deposite'
        })
        setAmount('')
        navigate('/')
    }
    return(
        <div className="bank-transfer-container">
            <div className="bank-tf-wrapper">
                <label>
                    <span>Amount</span>
                    <input
                     type='number'
                     onChange={(e) => setAmount((e.target.value).slice(0,6)) }
                     value={amount.slice(0,6)}
                    />
                    {amountError && <div className="error">{amountError}</div>}
                </label>
                <div className="copy">
                    <h3>Chase Bank</h3>
                    <div className="account-name">
                    <h4>Account name:</h4>
                    <span>Zues Exchange</span>
                    {/* <span className="copy-text">Copied</span> */}
                    </div>
                    <div className="copy-container">
                        <input
                        type='text'
                        disabled
                        value={accountnumber}
                        />
                        <FaClone
                        onClick={() => handleClick()}
                        className="copyBtn"
                        />
                    </div>
                </div>
                <div className="simple_note">
                    Note: make that the name of the account used to perform this transactions corresponds with your username
                </div>
            </div>
        </div>
    )
}
