import EChartsReact from "echarts-for-react";
import useBalance from "../../Hooks/useBalance";

export default function DoughnutChart() {

    const { Bitcoin, Binance, Shiba, Usdt, Tron, Ethereum } = useBalance()

    const options = {
        title:{
            text: 'Asset Allocation',
            x: 'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{b} : ${c} ({d}%)"
        },
        series: [{
          type: 'pie',
          data: [
            { name: 'Bitcoin', value: Bitcoin },
            { name: 'Binance', value: Binance },
            { name: 'Shiba', value: Shiba },
            { name: 'USDT', value: Usdt },
            { name: "Tron", value: Tron },
            { name: "Ethereum", value: Ethereum }
          ],
          radius: ['50%', '70%'],
          center: ['50%', '50%'],
          label: {
            show: true,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '30',
              fontWeight: 'bold'
            }
          }
        }]
      };

    return (
        <EChartsReact option={options}/>
    )
}