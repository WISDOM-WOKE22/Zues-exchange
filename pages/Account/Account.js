import { useState } from "react"
import { Link } from "react-router-dom"
import '../../index.css'
import { FaUserCircle } from "react-icons/fa"
import { useAuthContext } from "../../Hooks/useAuthContext"
import { useThemeContext } from "../../Hooks/useThemeContext"
import { motion } from "framer-motion"
import { projectAuth } from "../../Firebase/FirebaseConfig"
import firebase from "firebase"
// import { useThemeContext } 
import './Account.css'

export default function Account() {
    const { user } = useAuthContext()
    const { color, background } = useThemeContext()
    const [ password, setPassword ] = useState('')
    const [ passwordError, setPasswordError ] = useState('')
    const [ showPasswordInput, setShowPasswordInput ] = useState(false)

    const email = user.email
    var credential = firebase.auth.EmailAuthProvider.credential(
      email,
      password
    )
    const style = {
        color : background == '#212121' ? '#fff' : "black"
    }


  //   const reauthenticate = async () => {
  //     try {.
  //         const auth = getAuth();
  //         const user = auth.currentUser;
  //         const credential = await EmailAuthProvider.credential(
  //             email,
  //             password
  //         );
  //         await reauthenticateWithCredential(user, credential);
  //         return true
  //     } catch (e) {
  //         return null
  //     }
  // }

    const deleteAccount = async () => {
      setPasswordError('')
      if(!showPasswordInput){
        setShowPasswordInput(true)
      }
      if(!password){
        setPasswordError('Input password ')
      }
     if(password){
        await user.reauthenticateWithCredential( credential )
         .then(() => console.log('success'))
         .catch(e => setPasswordError('incorrect Password')) 
        await user.delete().then(() => console.log('Account deleted'))
         .catch(error => console.log('account-deleting did not complete')) 
     }
    }

  return (
    <div className="page account" style={ style }> 
     <div className="acc-con">
          <motion.div className="user-img" 
            initial={{ x:'-100vw' }}
            animate={{ x:0 , transition:{ duration:1 }}}
          >
            <div className="user-image">
                {user.photoURL &&
                 <img src={user.photoURL} 
                  className='img'
                />}
               {!user.photoURL && <FaUserCircle className="img icon-img"/>}
            </div>
            <div className="user-info">
              <h2 className="name">{user.displayName}</h2>
              <span className="email">{user.email}</span>
            </div>
            <Link to="/account/edit_account">
              <button className="edit-btn" style={{ backgroundColor:color }}>Edit</button>
            </Link>
       </motion.div>
            <div className="user-acct-info">
                  <motion.div className="acc-info-con"
                   initial={{ x:'-100vw' }}
                   animate={{ x:0 , transition:{ duration:1, delay:0.4 }}}
                  >
                    <div className="hd-user-info">Contact info</div>
                    <hr className="line"/>
                    <div className="user-info-dt">
                      <div className="info-mn">Username</div>
                      <div>{user.displayName}</div>
                    </div>
                    <hr className="line"/>
                    <div className="user-info-dt">
                      <div className="info-mn">Email</div>
                      <div>{user.email}</div>
                    </div>
                    <hr className="line"/>
                    <div className="user-info-dt">
                      <div className="info-mn">Phone number</div>
                      {!user.phoneNumber && <div>No Number</div>}
                      {user.phoneNumber && <div>{user.phoneNumber}</div>}
                    </div>
                  </motion.div>
                  <motion.div className="acc-info-con li-info"
                   initial={{ x:'-100vw' }}
                   animate={{ x:0 , transition:{ duration:1, delay:0.8 }}}
                  >
                    <div className="hd-user-info">Personal info</div>
                    <hr className="line"/>
                    <div className="user-info-dt">
                      <div className="info-mn">Legal name</div>
                      <div>{user.displayName}</div>
                    </div>
                    <hr className="line"/>
                    <div className="user-info-dt">
                      <div className="info-mn">Date of birth</div>
                      <div>None</div>
                    </div>
                    <hr className="line"/>
                    <div className="user-info-dt">
                      <div className="info-mn">Nationality</div>
                      {!user.phoneNumber && <div>None</div>}
                      {user.phoneNumber && <div>{user.phoneNumber}</div>}
                    </div>
                  </motion.div>
                  <motion.div className="acc-info-con li-info"
                   initial={{ x:'-100vw' }}
                   animate={{ x:0 , transition:{ duration:1, delay:1.2 }}}
                  >
                    <div className="hd-user-info">Preference</div>
                    <hr className="line"/>
                    <div className="user-info-dt">
                      <div className="info-mn">Currency</div>
                      <div>To be done later</div>
                    </div>
                  </motion.div>
                  <motion.div className="acc-info-con li-info del-con" 
                     initial={{ x:'-100vw' }}
                     animate={{ x:0 , transition:{ duration:1, delay:1.4 }}}
                  >
                    <div className="hd-user-info">Delete Account</div>
                    <p className="del-txt" style={ style }>Note that this action cannot be reversed once carried out. it adviceable to clear keep account balance at $0.00 before taking this action</p>
                    {showPasswordInput && <div className="del-input-container">
                      <input type='number'
                       className="delete-input" 
                       placeholder="Input password"
                       onChange={(e) => setPassword(e.target.value)}
                       value={password}
                       />
                       { passwordError && <div className="error">{passwordError}</div> }
                    </div>}
                    <div  className="del-btn-con">
                      <button className="del-btn"
                       onClick={() => deleteAccount()}
                       >Delete account</button>
                    </div>
                  </motion.div>
            </div>
     </div>
    </div>
  )
}
