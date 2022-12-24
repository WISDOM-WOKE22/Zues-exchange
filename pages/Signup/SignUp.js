import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSignup } from '../../Hooks/useSignup'
import { useFireStore } from '../../Hooks/useFirestore'
import SignUpImage from '../../assets/signup.png'
import { useAuthContext } from '../../Hooks/useAuthContext'
//styles
import './SignUp.css'
import Navbar from '../../components/Navbar'

export default function SignUp() {
    const { addDocument } = useFireStore('User-Info')
    const { user } = useAuthContext()

    const [ email, setEmail ] = useState('')
    const [ displayName, setDisplayName ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ confirmPassword, setConfirmPassword ] = useState('')
    const [ emailError, setEmailError ] =useState(false)
    const [ displayNameError, setDisplayNameError] = useState(false)
    const [ passwordError, setPasswordError ] = useState(false)
    const [ confirmPasswordError, setConfirmPasswordError ] = useState(false)
    const { error, isLoading, signup, response } = useSignup()

    const handleSubmit = (e) => {
        setConfirmPasswordError(null)
        setEmailError(null)
        setDisplayNameError(null)
        setPasswordError(null)
        e.preventDefault()
        if(!email){
            setEmailError('Input an email')
        }
        if(!displayName){
            setDisplayNameError('input a username')
        }
        if(!password){
           return setPasswordError('input a password')
        }
        if(password.length <= 6){
           setPasswordError('password should be at least 7 characters')
        }
        if(!confirmPassword){
          return setConfirmPasswordError('confirm your password')
        }
        if(confirmPassword !== password ){
           return setConfirmPasswordError('Does not match password')
        }
        if(displayName && email && password && confirmPassword){
            console.log(password.length)
            console.log(email)
            signup(
                email,
                password,
                displayName,
            )
            console.log(response)
        //   console.log({
        //     displayName,
        //     email,
        //     userID
        //   })
        }

    }

    return(
        <div className="ld_page sp">
            <Navbar/>
            <div className='sp-body'>
                  
                <div className='sp-image'>
                    <div className='sp-img'>
                        <img src={SignUpImage}/>
                    </div>
                </div>
                <div className='sp-form sign-up-form'>

                    <form className='auth-form' onSubmit={handleSubmit}>
                    <h2 className='l-h2'> SignUp</h2>
                    { error && <div className='error'>{error}</div>  }
                    <label className='input-con'>
                        <span>Username</span>
                            <input placeholder='Username'
                            type='text'
                            onChange={(e) => setDisplayName(e.target.value)} 
                            value={displayName}
                            />
                            {displayNameError && <span className='error err'>{displayNameError}</span>}
                    </label>
                    <label className='input-con'>
                        <span>Email</span>
                            <input placeholder='Email'
                            type='email'
                            onChange={(e) => setEmail(e.target.value)} 
                            value={email}
                            />
                            {emailError && <span className='error err'>{emailError}</span>}
                    </label>
                    <label className='input-con'>
                        <span>Password</span>
                            <input placeholder='Password'
                            type='password'
                            onChange={(e) => setPassword(e.target.value)} 
                            value={password}
                            />
                            {passwordError && <span className='error err'>{passwordError}</span>}

                    </label>
                    <div className='input-con'>
                        <span>Confirm password</span>
                            <input placeholder='Confirm Password'
                            type='password'
                            onChange={(e) => setConfirmPassword(e.target.value)} 
                            value={confirmPassword}
                            />
                            {confirmPasswordError && <span className='error err'>{confirmPasswordError}</span>}

                    </div>
                    <div className='btn-con'>
                            {!isLoading && <button>SignUp</button>}
                            {isLoading && <button disabled>Loading...</button>}
                    </div>
                    <div className='auth-text'>
                        Already have an account? 
                        <Link to='/login'> Login</Link>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    )
}