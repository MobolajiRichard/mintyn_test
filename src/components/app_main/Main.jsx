import Transaction from "./charts/Transaction"
import Chart from "./charts/Chart"
import Payments from "./Payment/Payments"
import './main.css'

const Main = () => {
  return (
    <div className="main__container">
        <Transaction/>
        <Chart/>
        <Payments/>
    </div>
  )
}

export default Main