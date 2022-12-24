import { Link } from 'react-router-dom'
import '../styles/components/Navbar.css'
// import { FaBars } from 'react-icons/fa'
// import Mobilemenu from './Mobilemenu'
// import { useState, useEffect } from 'react'

export default function Navbar() {
  // const [ showMobileMenu, setShowMobileMenu ] = useState(false)
  // const handleClick = () => {
  //    showMobileMenu ? setShowMobileMenu(false): setShowMobileMenu(true)
  // }
  // const hideNavbar = () => {
  //      if(showMobileMenu){
  //       setShowMobileMenu(false)
  //      }
  // }
  
    //  const myWidth  = window.innerWidth;
    //  useEffect(() => {
    //     window.addEventListener('resize', () => {
    //         if(myWidth <= 1000){
    //             showMobileMenu ? setShowMobileMenu(true): setShowMobileMenu(false)
    //         }
    //         if(myWidth >= 1001){
    //             setShowMobileMenu(false)
    //         }
    //         // console.log(myWidth)
    //      })
    // },[showMobileMenu, window])
  return (
    <div className="Navbar">
      <nav>
        <Link to='/' className='link'>
        <div className="logo">
            <div className="logo_sm"></div>
            <span>Zeus <br/> Exchange</span>
        </div>
        </Link>
        <div className='auth list menu'>
            {/* <li>
              <Link to='/login'
               className='link login'>
                Login
               </Link>
            </li> */}
            <li>
              <Link to='/sign_up' className='link sign_up'>Get started</Link>
              </li>
        </div>
      </nav>
    </div>
  )
}
