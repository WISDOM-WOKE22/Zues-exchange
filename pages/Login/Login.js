import { useState, useEffect} from 'react'
import { useLogin } from '../../Hooks/useLogin'
import { Link, useNavigate } from 'react-router-dom'
import LoginImage from '../../assets/login.jpg'
//styles
import '../Signup/SignUp.css'
import Navbar from '../../components/Navbar'

export default function Login() {
  const navigate = useNavigate()
  const handlenavigate = () => {
    navigate('/')
  } 
  useEffect(()=>{},[handlenavigate])

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ emailError, setEmailError ] =useState(false)
    const [ passwordError, setPasswordError ] = useState(false)
    const { error, isLoading, login } = useLogin()

    const handleSubmit = (e) => {
        setEmailError(null)
        setPasswordError(null)
        e.preventDefault()
        if(!email){
            setEmailError('Input an email')
        }
        if(!password){
         return setPasswordError('input a password')
        }
        if(password.length <= 6){
          return setPasswordError('password should be more than 6 digits')
        }
        if(email && password){
            console.log(password.length)
            login(
               email,
               password
            )
        }
    }

    return(
        <div className="ld_page sp">
            <Navbar/>
            <div className='sp-body'>
                <div className='sp-image'>
                    <div className='sp-img'>
                        <img src={LoginImage}/>
                    </div>
                </div>
                <div className='sp-form'>
                    <form className='auth-form' onSubmit={handleSubmit}>
                    <h2 className='l-h2'>Login</h2>
                    {error && <div className='error'>{error}</div>}
                    <label className='input-con'>
                        <span>Email</span>
                            <input placeholder='Email'
                            type='text'
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
                    <div className='btn-con'>
                        {!isLoading && <button>Login</button>}
                        {isLoading && <button disabled>Loading....</button>}
                    </div>
                    <div className='auth-text'>
                        Don't have an account? 
                        <Link to='/sign_up'> SignUp</Link>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    )
}