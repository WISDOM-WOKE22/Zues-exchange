import { useThemeContext } from '../../Hooks/useThemeContext'
import './Earn.css'
import Packages from './EarnPackages/Packages'

export default function Earn() {
  const { color } = useThemeContext()
  return (
    <div className='page earn'>
        <div className='earn-con'>
            <div className='earn-txt'>
            <h2 style={{ color }}>
                Zeus Exchange Investment Packages
            </h2>
            <p>Zeus exchange presents the perfect plateform to multiply your income by simply taking one of the packages. Zeus exchange is committed to operating responsibly and sustainably in all aspects of its business</p>
            </div>
            <div className='pkg-comp'>
                <Packages color={ color }/>
            </div>
        </div>
    </div>
  )
}
