import './Assets.css'
import useBalance from '../../../Hooks/useBalance'
import BTC  from '../../../assets/logos/Btc.png'
import BNB from '../../../assets/logos/BNB.png'
import ETH from '../../../assets/logos/Eth.png'
import Shib from '../../../assets/logos/Shibainu.svg'
import Trx from '../../../assets/logos/Tron.svg'
import USDT from '../../../assets/logos/Usdt.png'
import { useThemeContext } from '../../../Hooks/useThemeContext'


export default function Assets() {
  const { Binance, Bitcoin, Shiba, Usdt,Tron, Ethereum } = useBalance()
  const { background } = useThemeContext()

  const style = {
    backgroundColor: background == "#212121" ? "#292828" : "#fff",
    color : background == "#212121" ? "#fff" : 'black',
    boxShadow: background == "#212121" ? "none" : '0 0 10px lightgray'
  }

  const assets = [
      { coin:'Bitcoin',symbols:'BTC', Amount:Bitcoin,src:BTC},
      { coin:'Ethereum',symbols:'Eth', Amount:Ethereum,src:ETH},
      { coin:'Binance',symbols:'BNB' ,Amount:Binance,src:BNB},
      { coin:'USDT',symbols:'Usdt', Amount:Usdt,src:USDT},
      { coin:'Shiba_inu',symbols:'Shib', Amount:Shiba,src:Shib},
      { coin:'Tron',symbols:'Trx', Amount:Tron,src:Trx}
  ]
  return (
    <div className='assets' style={ style }>
      <div className='assets-con'>
        <div className='assets-txt'>
            Your assets
        </div>
        <hr/>
        <div className='my-assets'>
            {assets &&  assets.map((asset) => (
                <li className='assets-item'>
                   <div className='asset-image'>
                     <img src={asset.src}/>
                   </div>
                   <div className='cn-dlt'> 
                   <div>
                      <span>{asset.coin}</span>
                      <span className='sym'>{asset.symbols}</span>
                   </div>
                   <div className='cn-numb'>
                       ${ (asset.Amount !== NaN &&  asset.Amount)}.00
                   </div>
                   </div>
                </li>
              ))
            }
        </div>
      </div>
    </div>
  )
}
