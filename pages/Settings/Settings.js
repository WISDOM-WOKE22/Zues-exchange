import { useState } from "react"
import './Settings.css'
import { useThemeContext } from '../../Hooks/useThemeContext'
import { useAuthContext } from '../../Hooks/useAuthContext'
// components
// import PersonalSettings from "./UI/PersonalSettings"
import Custome from "./UI/Custome"
import DepositeSettings from "./UI/DepositeSettings"
import PasswordSettings from "./UI/PasswordSettings"
import WithdrawalSettings from "./UI/WithdrawalSettings"

export default function Settings() {
  const [withdrawalSettings, setWithdrawalSettings ] = useState(true) 
  const [passwordSettings, setPasswordSettings ] = useState(false) 
  const [ customeSettings, setCustomeSettings ] = useState(false)
  const [depositeSettings, setDepositeSettings ] = useState(false) 
  const { user } = useAuthContext()
    const [ theme, setTheme ] = useState('') 

    const showPasswordSettings = () => {
      if(!passwordSettings){
        setPasswordSettings(true)
        setDepositeSettings(false)
        setWithdrawalSettings(false)
        setCustomeSettings(false)
      }
    }
    const showWithdrawalSettings = () => {
      if(!withdrawalSettings){
        setWithdrawalSettings(true)
        setDepositeSettings(false)
        setPasswordSettings(false)
        setCustomeSettings(false)
      }
    }
    const showDepositeSettings = () => {
      if(!depositeSettings){
        setDepositeSettings(true)
        setPasswordSettings(false)
        setWithdrawalSettings(false)
        setCustomeSettings(false)
      }
    }
    const showCustomeSettings = () => {
      if(!customeSettings){
        setCustomeSettings(true)
        setDepositeSettings(false)
        setPasswordSettings(false)
        setWithdrawalSettings(false)
      }
    }

  return (
    <div className="page settings-con">
      <div className="settings-wrapper">
        <div className="settings-opt">
          <div className="opt-con">
            {/* <div className="opt-item" 
              onClick={() => showPersonalSettings()}
              >Personal Settings</div> */}
            <div className="opt-item"
              onClick={() => showWithdrawalSettings()}
            >Withdrawal Settings</div>
            <div className="opt-item"
              onClick={() => showPasswordSettings()}>
              Password Settings
              </div>
            <div className="opt-item" 
              onClick={() => showDepositeSettings()}>
              Deposite Settings
            </div>
            <div className="opt-item" 
              onClick={() => showCustomeSettings()}>
              Custome Settings
            </div>
          </div>
        </div>
          <hr className="st-line"/>
        <div className="settings-item-con">
          {passwordSettings && <PasswordSettings user={user}/>}
          {withdrawalSettings && <WithdrawalSettings user={user}/>}
          {/* <Custome className='custome'/> */}
        {depositeSettings && <DepositeSettings user={user}/>}
        {customeSettings && <Custome/>}
        </div>
      </div>
    </div>
  )
}
