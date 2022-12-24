import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'
import { useAuthContext } from '../Hooks/useAuthContext'
import { useLogout } from '../Hooks/useLogout'
import { useThemeContext } from '../Hooks/useThemeContext'
import '../styles/components/Sidebar.css'
//componets
import MobileSidebar from './mobileSidebar/MobileSidebar'
// react icons
import { FaHome, FaUserCircle, FaAddressCard, FaTable, FaChartArea } from 'react-icons/fa'
import { FaWallet } from 'react-icons/fa'
import { FaChartPie } from 'react-icons/fa'
import { FaLightbulb } from 'react-icons/fa'
import { FaUser } from 'react-icons/fa'
import { FaBars } from 'react-icons/fa'
import { MdSpaceDashboard } from 'react-icons/md'
import { IoSettings } from 'react-icons/io5'
import { FiLogOut } from 'react-icons/fi'

export default function Sidebar() {
    const [ showMobileSidebar, setShowMobileSidebar ] = useState(false)
    const { user } = useAuthContext()
    const { logout } =  useLogout()
    const { color } = useThemeContext()

    const navLinkStyles = ({ isActive }) => {
        return {
          color: isActive ? color:'black',
          borderRightColor: isActive ? color:''
        }
      }

    const showSidebar = () => {
        !showMobileSidebar ? setShowMobileSidebar(true) : setShowMobileSidebar(false)
    }
  return (
    <div className='main-sidebar'>
      <div className='sidebar-l'>
      <div className="logo" style={{ color:color }}>
            <div className="logo_sm" style={{ borderColor:color }}></div>
            <span>Zeus <br/> Exchange</span>
        </div>
        <div className='mn-name'>menu</div>
         <div className='menu-list'>
            {/* <li className='li-item'>
                <NavLink to='/home' className='link li-item-m'>
                    <FaHome className='li-icon'/>
                    <span className='li-name'>Home</span>
                </NavLink>
            </li> */}
            <li className='li-item'>
                <NavLink to='/dashboard' className='link li-item-m' style={navLinkStyles}>
                    <MdSpaceDashboard className='li-icon' />
                    <span className='li-name'>Dashboard</span>
                </NavLink >
            </li>
            <li className='li-item'>
                <NavLink to='/crypto_market' className='link li-item-m' style={navLinkStyles}>
                    <FaChartArea className='li-icon'/>
                    <span className='li-name'>Market</span>
                </NavLink >
            </li>
            <li className='li-item'>
                <NavLink to='/transactions' className='link li-item-m' style={navLinkStyles}>
                    <FaChartPie className='li-icon'/>
                    <span className='li-name'>Transactions</span>
                </NavLink>
            </li>
            <li className='li-item'>
                <NavLink to='/earn' className='link li-item-m' style={navLinkStyles}>
                    <FaTable className='li-icon'/>
                    <span className='li-name'>Earn</span>
                </NavLink>
            </li>
            <li className='li-item'>
                <NavLink to='/wallet' className='link li-item-m' style={navLinkStyles}>
                    <FaWallet className='li-icon'/>
                    <span className='li-name'>My Wallet</span>
                </NavLink>
            </li>
         </div>
        <div className='mn-name'>settings</div>
        <div className='settings'>
            <li className='li-item'>
                <NavLink to='/settings' className='link li-item-m' style={navLinkStyles}>
                    <IoSettings className='li-icon'/>
                    <span>Settings</span>
                </NavLink>
            </li>
            <li className='li-item itm2'>
                <NavLink to='/account' className='link li-item-m' style={navLinkStyles}>
                    <FaUserCircle className='li-icon'/>
                    <span>Account</span>
                </NavLink>
            </li>
        </div>
        <div className='logout-opt'>
            <div className='opt-con'
             onClick={() => logout()}
             style={{ color }}
            >
                <FiLogOut/>
                <span>Logout</span>
            </div>
        </div>
      </div>
      <div className='side-nav'>
        <header className='mobile-menu mobile'>
         <Link to='/' className='link'>
            <div className="logo" style={{ color: color}}>
                <div className="logo_sm" style={{ borderColor: color }}></div>
                <span>Zeus <br/> Exchange</span>
            </div>   
         </Link>
        </header>
        <div className='mobile-menubar'>
            <FaBars className='icon3 menubar mobile' onClick={showSidebar}/>
        </div>
        {showMobileSidebar && <MobileSidebar showSidebar={showSidebar}/>}
        <nav style={{ color }}>
            <li>
                <FaLightbulb className='icon2'/>
            </li>
            <li>
                <FaUser className='icon2'/>
                <span className='user-name'>Hello <span className='user-n'>{user.displayName}</span></span>
            </li>
        </nav> 
      </div>
    </div>
  )
}
