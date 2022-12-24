import { NavLink } from "react-router-dom"
import '../styles/components/Mobilemenu.css'

export default function Mobilemenu({ hideNavbar }) {
  return (
    <div className="mobile_menu">
      <div className="mobile_con" onClick={() => hideNavbar()}>
        <div className="menu_list">    
            <li>
              <NavLink to='/' className='link m-li'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/login' className='link m-li'>
                Login
              </NavLink>
            </li>
            <li>
            <NavLink to='/sign_up' className='link m-li'>
              SignUp
            </NavLink>
          </li>
        </div>
      </div>
    </div>
  )
}
