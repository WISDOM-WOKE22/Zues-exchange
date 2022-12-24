import './UiStyles/spot.css'

export default function Spot() {
  return (
    <div className='spot-con'>
      <div className='spot-dt'>
        <div className='spot-txt spot-bg'>
            <span className='spot-txt1'>
                Account balance
            </span>
            <span className='spot-txt2'>
                0.18005388 BTC
            </span>
        </div>
        <div className='spot-txt'>
            <span className='spot-txt1'>
                BUY THIS MONTH
            </span>
            <span className='spot-txt2'>
                3.0675432 BTC
            </span>
        </div>
        <div className='spot-txt'>
            <span className='spot-txt1'>
                SELL THIS MONTH
            </span>
            <span className='spot-txt2'>
                2.0345618 BTC
            </span>
        </div>
        <div className='spot-txt'>
            <span className='spot-txt1'>
                ESTIMATED VALUE
            </span>
            <span className='spot-txt2'>
                $22,000.29
            </span>
        </div>
      </div>
      <div className='spot-chart'>
        <h3>Chart Unavailable</h3>
      </div>
    </div>
  )
}
