import { FaBox, FaRegWindowMaximize, FaUser, FaWindowMinimize} from "react-icons/fa"
import { FaExchangeAlt, FaWallet} from "react-icons/fa"
import { NavLink } from "react-router-dom"
import { MdSpaceDashboard } from 'react-icons/md'
import { useThemeContext } from "../Hooks/useThemeContext"
// styles
import '../styles/components/MobileFooter.css'

export default function MobileFooter() {
  const { color, background } = useThemeContext()

  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? color:'black'
    }
  }
  const style = {
    color: background == '$#212121' ? '#fff' : 'black'
  }


  return (
    <div className="mobile-footer" style={{ color, backgroundColor: background }} >
      <div className="footer-con">
        {/* <li>
            <NavLink to='/home' className=" icon-con"> 
               <FaUser className="footer-icon"/>
               <div className="footer-text"> home </div>

             </NavLink>
        </li> */}
        <li style={ style }>
            <NavLink to='/' className=" icon-con" style={navLinkStyles}> 
               <MdSpaceDashboard className="footer-icon"/>
               <div className="footer-text">Dashboard</div>
             </NavLink>
        </li>
        <li>
            <NavLink to='/transactions' className=" icon-con" style={navLinkStyles}> 
               <FaExchangeAlt className="footer-icon"/>
               <div className="footer-text"> Transactions</div>
             </NavLink>
        </li>
        <li>
            <NavLink to='/wallet' className=" icon-con" style={navLinkStyles}> 
               <FaWallet className="footer-icon"/>
               <div className="footer-text">Wallet</div>
             </NavLink>
        </li>
      </div>
    </div>
  )
}
