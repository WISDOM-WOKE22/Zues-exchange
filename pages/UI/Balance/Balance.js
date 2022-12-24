import './Balance.css'
import Spot from './UI/Spot'

export default function Balance() {
  return (
    <div className='bl-main'> 
      <div className='bl-con'>
        <div className='bl-nav'>
            <span className='bl-text'>Balance Details</span>
            <div className='bl-switch'>
                <span>Spot</span>
                <span>P2P</span>
                <span>Margin</span>
                <span>Future</span>
                <span>Earn</span>
            </div>
        </div>
            <Spot/>
      </div>
    </div>
  )
}
