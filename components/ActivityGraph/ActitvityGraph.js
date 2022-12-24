import ScrollReveal from "scrollreveal"
import './ActivityGraph.css'
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts"
import useBalance from "../../Hooks/useBalance"

// const data = [
//   {type:'Deposite', amount:'$10,000', time:'2-10-2022',pair:'ETH/USDT',status:'Completed'},
//   {type:'sell', amount:'$5,000', time:'15-10-2022',pair:'BTC/USDT',status:'Completed'},
//   {type:'Buy', amount:'$15,000', time:'18-10-2022',pair:'ETH/USDT',status:'Pending'},
//   {type:'sell', amount:'$500', time:'21-10-2022',pair:'BTC/USDT',status:'Completed'},
//   {type:'Buy', amount:'$5,000', time:'24-10-2022',pair:'ETH/USDT',status:'Completed'},
//   {type:'sell', amount:'$2,000', time:'5-11-2022',pair:'ETH/USDT',status:'Pending'},
//   {type:'sell', amount:'$5000', time:'10-11-2022',pair:'BTC/USDT',status:'Completed'}
// ]
const data = [
  {data:4500},
  {data:5000},
  {data:4700},
  {data:4400},
  {data:4800},
  {data:5300},
  {data:5800},
  {data:6000},
  {data:7000},
  {data:9000},
  {data:4500},
  {data:4200},
  {data:4200},
  {data:5200},
  {data:5000},
  {data:5400},
  {data:5800},
  {data:6200},
  {data:6500},
  {data:6500},
  {data:6000},
  {data:6500},
  {data:6500},
  {data:6300},
  {data:6100},
  {data:6500},
  {data:6500},
  {data:6500},
  {data:7500},
  {data:7000},
  {data:7300},
  {data:6500},
  {data:4200},
  {data:7200},
  {data:7500}
]

export default function ActitvityGraph() {
  const { balance } = useBalance()
 
  return (
    <div className="activity-container">
      <div className="top">
        <div className="top-info">
          <h4>Total transaction</h4>
          <h2>{!balance == '' && <span>${(balance.toLocaleString())}</span>}</h2>
          <h2>{balance == '' && <span>$0.00</span>}</h2>
          <div className="growth">
            <span>+2.45%</span>
          </div>
        </div>
      </div>
      <div className="chart">
        <ResponsiveContainer height="100%" width="100%">
            <AreaChart
              width={500}
              height={400}
              data={data}
              margin={{ top: 0, left: 0, right: 0, bottom: 0}}>
                <Tooltip cursor={false}/>
                <Area
                 animationBegin={800}
                 animationDuration={2000}
                 type='monotone'
                 dataKey="data"
                 stroke="#ffc107"
                 fill="#8068233e"
                 strokeWidth={4}
                />
              </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
