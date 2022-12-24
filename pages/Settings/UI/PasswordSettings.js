import { useState } from 'react'
import { useFireStore } from '../../../Hooks/useFirestore'
import { projectFirestore, projectAuth } from '../../../Firebase/FirebaseConfig'
import TransactionPin from '../../WithdrawalPage/TransactionPin/TransactionPin'
import './PasswordSettings.css'
import { useCollection } from '../../../Hooks/UseCollection'
import { useThemeContext } from '../../../Hooks/useThemeContext'

export default function PasswordSettings({user}) {
    const uid = user.uid
    const [ showTransactionPin, setShowTransactionPin ] = useState(false)
    const [ transactionPin, setTransactionPin ] = useState('')
    const [ pinId, setPinId ] = useState('')
    const [ transactionPinError, setTrensactionPinError ] = useState('')
    const [ authUi, setAuthUi ] = useState(false)
    const { color } = useThemeContext()
    const { documents } = useCollection(
        'TransactionPin',
        ['uid',"==",uid]
    )
    const { addDocument } = useFireStore('TransactionPin')
    const handleSetPin = () => {
        addDocument({
            transactionPin,
            uid
        })
    }
    const reAuthenticateUser = () => {
        projectAuth.currentUser.reauthenticateWithCredential(Credential).then((res) => {
             
        }).catch((error) => {
            console.log(error)
        })
    }
    const showAuthUI = () => {
        authUi? setAuthUi(false):setAuthUi(true)
    }
    const setPin = () => { 
       showTransactionPin ? setShowTransactionPin(false): setShowTransactionPin(true)
    }
    const updatePin = () => {
        // if(transactionPin){
        //     showAuthUI()
        // }else{
        //     setTrensactionPinError('input a new Pin')
        // }
        // if(user){
            setPinId(documents[0].id)
            projectFirestore.collection('TransactionPin').doc(pinId).update({transactionPin:transactionPin})
        // }
    }
    // console.log(documents)
  return (
    <div className='password-Settings'>
      <div className='passwrd-stt-con'>
        <div>
            <div className='hd-passwrd'>
                Password
            </div>
            <hr/>
            <div className='sm-passwrd-con'>
                <p>Remember to don't share your password with anyone. Always set a password that is not related to your name or email</p>
                <button style={{ color }}>Change password</button>
            </div>
        </div>
        <div className='passwrd-stt-box'>
            <div className='hd-passwrd'>
                Phone numbers
            </div>
            <hr/>
            <div className='sm-passwrd-con'>
                <p>
                    <div>+xxx xxxxxxx{user.phoneNumber && (user.phoneNumber).slice(9/0)}</div>
                    Keep your primary  number up to date
                    <div className='rq'>Required</div>
                </p>
                
                <button style={{ color }}>Manage</button>
            </div>
        </div>
        <div className='passwrd-stt-box'>
            <div className='hd-passwrd'>
                Transaction Password
            </div>
            <hr/>
            <div className='sm-passwrd-con'>
                <p>
                    
                    Make sure you do not share your transaction pin with anyone
                    <div className='rq'>Required</div>
                </p>
                <button onClick={() => setPin()} style={{ color }} >Manage</button>
            </div>
            {showTransactionPin && <div className='sm-passwrd-con'>
                <label className='reset-password'>
                    <input type='number' 
                        onChange={(e) => setTransactionPin(e.target.value)}
                        maxLength='4'
                        placeholder='Transaction Pin'
                        value={transactionPin.slice(0,4)}
                        />
                  {transactionPinError && <div className='error'>{transactionPinError}</div>}
                </label>
                {authUi &&  <div>
                    <label className='reset-email'>
                        <span>Email</span>
                        <input type='email' 
                         placeholder={user.email}
                        />
                    </label>
                    <label className='reset-password'>
                        <span>Password</span>
                        <input type='password'/>
                    </label>
                </div>}
                {(documents.length != 0) && <button onClick={() => updatePin()} style={{ color }}>Reset Pin</button>}
                {(documents.length == 0) && <button onClick={() => handleSetPin()} style={{ color }}>Set Pin</button>}
            </div>}
        </div>
      </div>
    </div>
  )
}
