import './EditAccount.css'
import { useAuthContext } from '../../../Hooks/useAuthContext'
import { useThemeContext } from '../../../Hooks/useThemeContext'
import { useCollection } from '../../../Hooks/UseCollection'
import { projectFirestore } from '../../../Firebase/FirebaseConfig'
import { useState } from 'react'
import Select from 'react-select'

export default function EditAccount() {
  const [ userName, setUserName ] = useState('')
  const [ userNameError, setUserNameError ] = useState('')
  const [ Email, setEmail ] = useState('')
  const [ EmailError, setEmailError ] = useState('')
  const [ phoneNumber, setphoneNumber ] = useState('')
  const [ phoneNumberError, setphoneNumberError ] = useState('')
  const [ DOB, setDOB ] = useState('')
  const [ DOBError, setDOBError ] = useState('')
  const [ Nationality, setNationality ] = useState('')
  const [ NationalityError, setNationalityError ] = useState('')
  const [ Currency, setCurrency ] = useState('')
  const [ CurrencyError, setCurrencyError ] = useState('')
  const { color } = useThemeContext()
    const { user } = useAuthContext()

    const updateUserName = () => {
      if(!userName){
        return setUserNameError('input a new user name')
      }else{
        console.log(userName)
        setUserNameError('')
        setUserName('')
      }
      
    }
    const updateEmail = () => {
        if(!Email){
          return setEmailError('input a new email')
        }else{
          console.log(Email)
          setEmailError('')
          setEmail('')
        }
    }
    const updateMobile = () => {
      if(!phoneNumber){
        return setphoneNumberError('input a phone number')
      }else {
        console.log(phoneNumber)
        setphoneNumber('')
        setphoneNumberError('')
      }
    }
    const updateDOB = () => {
       if(!DOB){
        return setDOBError('select your date of birth')
       }else {
        console.log(DOB)
        setDOBError('')
        setDOB('')
       }
    }

  return (
    <div className='page Edit-account'>
      <div className='Edit-account-container'>
        <div className='Edit-account-wrapper'>
        <div className="user-acct-info">
                  <div className="acc-info-con">
                    <div className="hd-user-info">Contact info</div>
                    <hr className="line"/>
                    <div className="user-info-dt edit-block">
                      <label className='Edit-label'>
                        <span>Username</span>
                        <input type='text'
                          placeholder={user.displayName}
                          onChange={(e) => setUserName(e.target.value)}
                          className='edit-input'
                          value={userName}
                        />
                        {userNameError && <div className='error'>{userNameError}</div> }
                      </label>
                      <button
                       className='edit-btn2'
                       style={{ backgroundColor: color }}
                        onClick={() => updateUserName()}>
                          Update Username
                       </button>
                    </div>
                    <hr className="line"/>
                    <div className="user-info-dt edit-block">
                      <label className='Edit-label'>
                        <span>Email</span>
                        <input type='text'
                          placeholder={user.email}
                          onChange={(e) => setEmail(e.target.value)}
                          className='edit-input'
                          value={Email}
                        />
                        {EmailError && <div className='error'>{EmailError}</div> }
                      </label>
                      <button
                       className='edit-btn2'
                       style={{ backgroundColor: color }}
                       onClick={() => updateEmail()}>
                         Update Email
                      </button>
                    </div>
                    <hr className="line"/>
                    <div className="user-info-dt edit-block">
                      <label className='Edit-label'>
                        <span>Phone number</span>
                        <input type='number'
                          placeholder={user.phoneNumber}
                          onChange={(e) => setphoneNumber(e.target.value)}
                          className='edit-input'
                          value={phoneNumber}
                        />
                        {phoneNumberError && <div className='error'>{phoneNumberError}</div> }
                      </label>
                      <button
                       className='edit-btn2'
                       style={{ backgroundColor: color }}
                       onClick={() => updateMobile()}>
                         Update Number
                      </button>
                    </div>
                  </div>
                  <div className="acc-info-con li-info">
                    <div className="hd-user-info">Personal info</div>
                    <hr className="line"/>
                    <div className="user-info-dt">
                      <div className="info-mn">Legal name</div>
                      <div>{user.displayName}</div>
                    </div>
                    <hr className="line"/>
                    <div className="user-info-dt edit-block">
                      <label className='Edit-label'>
                        <span>Date of birth</span>
                        <input type='date'
                          onChange={(e) => setDOB(e.target.value)}
                          className='edit-input'
                          value={DOB}
                        />
                        {DOBError && <div className='error'>{DOBError}</div> }
                      </label>
                      <button
                       className='edit-btn2'
                       style={{ backgroundColor: color }}
                       onClick={() => updateDOB()}>
                        Update Date of birth
                      </button>
                    </div>
                    {/* <hr className="line"/> */}
                    {/* <div className="user-info-dt">
                      <div className="info-mn">Nationality</div>
                      {!user.phoneNumber && <div>None</div>}
                      {user.phoneNumber && <div>{user.phoneNumber}</div>}
                    </div> */}
                  </div>
                  {/* <div className="acc-info-con li-info">
                    <div className="hd-user-info">Preference</div>
                    <hr className="line"/>
                    <div className="user-info-dt edit-block">
                      <label className='Edit-label'>
                        <span>Username</span>
                        <Select
                          value={Currency}
                        />
                        {CurrencyError && <div className='error'>{CurrencyError}</div> }
                      </label>
                      <button className='edit-btn2'>Change Currency</button>
                    </div>
                  </div> */}
                  {/* <div className="acc-info-con li-info del-con">
                    <div className="hd-user-info">Delete Account</div>
                    <p className="del-txt">Note that this action cannot be reversed once carried out. it adviceable to clear keep account balance at $0.00 before taking this action</p>
                    <div  className="del-btn-con">
                      <button className="del-btn">Delete account</button>
                    </div>
                  </div> */}
            </div>
        </div>
      </div>
    </div>
  )
}
