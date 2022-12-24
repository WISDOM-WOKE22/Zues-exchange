import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { FaLightbulb, FaUser } from 'react-icons/fa'
import { useAuthContext } from '../../Hooks/useAuthContext'
import { projectAuth } from '../../Firebase/FirebaseConfig'
import { useThemeContext } from '../../Hooks/useThemeContext'
import { motion } from 'framer-motion'
// styles
import '../../styles/UI/MobileSidebar.css'

export default function MobileSidebar({showSidebar}) {
   const { color } = useThemeContext()
   const { user } = useAuthContext()
   const logout = () => {
      projectAuth.signOut()
   }
     const navLinkStyles = ({ isActive }) => {
        return {
          color: isActive ? color:'black',
          borderRightColor: isActive ? color:''
        }
      }
  return (
    <div className='mobile-sidebar'>
       <motion.div className='m-sd-con'
        initial={{ x:'100vw' }}
        animate={{ x:0, transition:{ type:"tween", duration:1  } }} 
        onClick={() => showSidebar()}>
         <li className='user-dt'>
            <div className='user-img'>
              <FaUser/>
            </div>
            <span>{user.displayName}</span>
         </li>
         <li>
            <NavLink to='/Buy_&_sell' className='link'  style={navLinkStyles}>
                Buy & sell
            </NavLink>
         </li>
         <li>
            <NavLink to='/u' className='link'  style={navLinkStyles}>
                Trade
            </NavLink>
         </li>
         <li>
            <NavLink to='/earn' className='link'  style={navLinkStyles}>
                Earn
            </NavLink>
         </li>
         <li>
            <NavLink to='/o' className='link'  style={navLinkStyles}>
                Recieve
            </NavLink>
         </li>
         <li className='link'>
            <span>Theme</span>
            <FaLightbulb/>
         </li>
         <li>
            <button className='btn2'
            style={{ color }} 
            onClick={() => logout()}
            >
               Logout
            </button>
         </li>
       </motion.div>
    </div>
  )
}
