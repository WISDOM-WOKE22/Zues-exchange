import './UISettings.css'
import Select from 'react-select'
import { useState } from 'react'

// List Countries
const Countries = [
    {value:'United Kindom', label:'United Kindom'}, 
    {value:'France', label:'France'}, 
    {value:'Portugal', label:'Portugal'}, 
    {value:'United States', label: 'United States'}, 
    {value:'Brazil', label:'Brazil'}, 
    {value:'United Kindom', label:'Nigeriaa'} 
]
export default function PersonalSettings({user}) {
    const [ displayName, setDisplayName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ number, setNumber ] = useState('')
    const [ showMainForm, setShowMainForm ] = useState(false)

    const Form = (e) => {
        e.preventDefault()
        showMainForm? setShowMainForm(false): setShowMainForm(true)
    }

  return (
    <div>
     {!showMainForm && <div className='ui-setting stt-form'>
        <div className='stt'>
            <label className='stt'>
                <span>FullName</span>
                <div className='settings-inpt'>{user.displayName}</div>
            </label>
        </div>
        <div className='stt'>
            <label className='stt'>
                <span>mobile Number</span>
                {!user.photoNumber && <div className='settings-inpt'>No Number </div>}
                {user.photoNumber && <div className='settings-inpt'>{user.photoNumber}</div>}
            </label>
        </div>
        <div className='stt'>
            <label>
                <span>Email</span>
                <div className='settings-inpt'>{user.email}</div>
            </label>
        </div>
        <div>
            <button className='en-btn'
              onClick={(e) => Form(e)}>
                Update Profile
            </button>
        </div>
      </div>}
      {showMainForm && <div className='main-form stt-form'>
        <form>
        <div className='stt'>
            <label className='stt'>
                <span>FullName</span>
                <input type='text' 
                placeholder={user.displayName}
                className='stt-inpt'
                // value={displayName}
                />
            </label>
        </div>
        <div className='stt'>
            <label className='stt'>
                <span>mobile Number</span>
                <input type='number' 
                placeholder={user.phoneNumber}
                className='stt-inpt'
                // value={number}
                />
            </label>
        </div>
        <div className='stt'>
            <label>
                <span>Email</span>
                <input type='text'
                placeholder={user.email}
                className='stt-inpt'
                // value={email}
                />
            </label>
        </div>
        <div className='stt'>
            <label>
                <span>National</span>
                <Select
                // onChange={}
                 options={Countries}
                />
                {/* <input type='text'
                placeholder={user.email}
                className='stt-inpt' */}
                
            </label>
        </div>
        <div>
            <button className='en-btn'
              onClick={(e) => Form(e)}
             >Update Profile</button>
        </div>
        </form>
      </div>}
    </div>
  )
}
