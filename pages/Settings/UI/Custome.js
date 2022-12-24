import React from 'react'
import './UISettings.css'
import './CustomeSettings.css'
import { useThemeContext } from '../../../Hooks/useThemeContext'
import { useState } from 'react'
import { FaLightbulb } from 'react-icons/fa'

export default function () {
  // const [ color, setColor ] = useState()
  const [ darkTheme, setDarkTheme ] = useState(false)
  const [ lightTheme, setLightTheme ] = useState(true)
  const { color, background, customizeBackground, customizeColor } = useThemeContext()

 const theme = () => {
     if(lightTheme){
      setDarkTheme(true)
      setLightTheme(false)
      customizeBackground('#212121')
    }
    if(darkTheme){
      setLightTheme(true)
      setDarkTheme(false)
      customizeBackground('#fff')
    }
 }
 console.log('background:',background ,'Color:',color)

  return (
    <div className='custome-container'>
      <div className='ui-setting constome-wrapper'>
         <div className='Template-color-stt'>
            <h4>Customize to your taste</h4>
            <div className='tplt-color'>
                <div className='tplt-box tplt-box1'
                 onClick={() => customizeColor('#0052FF')}/>
                <div className='tplt-box tplt-box2'
                 onClick={() => customizeColor('#2DBD96')}/>
                <div className='tplt-box tplt-box3' 
                 onClick={() => customizeColor('#FCD535')}/>
                <div className='tplt-box tplt-box4' 
                 onClick={() => customizeColor('#f3112f')}/>
                <div className='tplt-box tplt-box5'
                 onClick={() => customizeColor('#40196B')}/>
                <div className='tplt-box tplt-box6' 
                 onClick={() => customizeColor('#fc04a9')}/>
                <div className='tplt-box tplt-box7'
                 onClick={() => customizeColor('#1ca549')}/>
                <div className='tplt-box tplt-box8' 
                 onClick={() => customizeColor('rebeccapurple')}/>
                <div className='tplt-box tplt-box9'
                 onClick={() => customizeColor('#ff004c')}/>
            </div>
         </div>
         <div className='theme change-theme'>
           <button className='theme-btn'
            onClick={() => theme()}>
            <div className='theme-btn-con'>
              <input type='checkbox' className='theme-btn-main' style={{ backgroundColor:color }}/>
            </div>
           </button>
           <span>Enable Dark mode</span>
         </div>
      </div>
    </div>
  )
}
