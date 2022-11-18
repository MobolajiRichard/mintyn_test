import { ReactComponent as Graph } from "./graph.svg";
import {ChevronLeft, ChevronRight} from '@mui/icons-material'

const Chart = () => {
  return (
    <div className="chart__container">
        <div className="graph__container">
            <div className="graph__header">
                <h3>Today:11, Nov 2022</h3>
                <div className="graph__date">
                    <select className="graph__select">
                        <option>1 Jan - 1 Jun</option>
                        <option>1 Jul - 1 Dec</option>
                    </select>
                    <div className="graph__select__button">
                        <button>
                            <ChevronLeft/>
                        </button>
                        <button>
                            <ChevronRight/>
                        </button>
                    </div>
                </div>
            </div>
            <Graph/>
        </div>
        <div className="graph__order__payment__container">
            <div className="graph__order__payment bottom">
                <p className="order__payment">Orders</p>
                <div className="order__payment__border"><div className="bg__green"></div><div className="bg__yellow"></div></div>
                <p>Pending Orders: <span className="yellow">20</span></p>
                <p>Reconciled Orders: <span className="green">80</span></p>
                <p>Total Orders: <span className="blue">100</span></p>
            </div>
            <div className="graph__order__payment">
            <p className="order__payment">Payments</p>
            <div className="order__payment__border"><div className="bg__green"></div><div className="bg__yellow"></div></div>
                <p>Un-reconciled Payments: <span className="yellow">20</span></p>
                <p>Reconciled Payments: <span className="green">80</span></p>
                <p>Total Payments: <span className="blue">100</span></p>
            </div>
        </div>
        <div></div>
    </div>
  )
}

export default Chart