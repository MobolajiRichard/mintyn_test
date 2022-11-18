import { ReactComponent as SmallChart } from "./smallchart.svg";
import './charts.css'

const Transaction = () => {
  return (

      <div className="chart__transactions">
        <div className="chart__transactions__daily__total">
          <div className="chart__transaction">
            <div >
              <p className="chart__transaction__name">Daily Transaction Volume</p>
              <p className="chart__transaction__amount">2,342</p>
            </div>
            <SmallChart />
          </div>
          <div className="chart__transaction">
            <div>
              <p className="chart__transaction__name">Daily Transaction Value</p>
              <p className="chart__transaction__amount">&#8358;4,000,000</p>
            </div>
            <SmallChart />
          </div>
        </div>
        <div className="chart__transactions__daily__total">
          <div className="chart__transaction">
            <div>
              <p className="chart__transaction__name">Total Transaction Volume</p>
              <p className="chart__transaction__amount">452,000</p>
            </div>
            <SmallChart />
          </div>
          <div className="chart__transaction">
            <div>
              <p className="chart__transaction__name">Total Transaction Value</p>
              <p className="chart__transaction__amount">&#8358;4,000,000</p>
            </div>
            <SmallChart />
          </div>
        </div>
      </div>


  );
};

export default Transaction;
