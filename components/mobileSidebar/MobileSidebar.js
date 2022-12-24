import '../sidebar/MainSidebar.css'
import './MobileSidebar.css'
import { NavLink } from 'react-router-dom'
import { useLogout } from '../../Hooks/useLogout'
import { useThemeContext } from '../../Hooks/useThemeContext'
// icons
import { FaUserCircle, FaChartArea } from 'react-icons/fa'
import { FaWallet } from 'react-icons/fa'
import { FaChartPie } from 'react-icons/fa'
import { MdSpaceDashboard } from 'react-icons/md'
import { IoSettings } from 'react-icons/io5'
import { FiLogOut } from 'react-icons/fi'

export default function MobileSidebar({ showSidebar }) {
    const { logout } = useLogout()
    const { color } = useThemeContext()
       const navLinkStyles = ({ isActive }) => {
        return {
          color: isActive ? color:'black',
          borderRightColor: isActive ? color:''
        }
      }
  return (
    <div className='mobile-sidebar-con'
     onClick={() => showSidebar()}
    >
      <div className='mobile-sidebar'>
         <div className='menu-list'>
            {/* <li className='li-item'>
                <NavLink to='/home' className='link li-item-m'>
                    <FaHome className='li-icon'/>
                    <span className='li-name'>Home</span>
                </NavLink>
            </li> */}
            <li className='li-item'>
                <NavLink to='/dashboard' className='link li-item-m'  style={navLinkStyles}>
                    <MdSpaceDashboard className='li-icon'/>
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
                <NavLink to='/wallet' className='link li-item-m' style={navLinkStyles}>
                    <FaWallet className='li-icon'/>
                    <span className='li-name'>My Wallet</span>
                </NavLink>
            </li>
         </div>
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
                    <span>account</span>
                </NavLink>
            </li>
        </div>
        <div className='logout-opt'>
            <div className='opt-con'
              style={{ color }}
             onClick={() => logout()}
            >
                <FiLogOut/>
                <span>Logout</span>
            </div>
        </div>
      </div>
    </div>
  )
}
