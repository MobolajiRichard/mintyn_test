import { Search, FiberManualRecord, ExpandMore } from "@mui/icons-material";
import { data } from "./dummydata";
import { Avatar } from "@mui/material";
import { useState, useEffect } from "react";
import "./payment.css";

const Payments = () => {

//dividing the dummydata into 2 different array 
  const dataOne = data.filter((d) => d.id < 11);
  const dataTwo = data.filter((d) => d.id > 11);

  //creating a state to hold the dummydata
  const [searchResult, setSearchResult] = useState(dataOne);

  //state to hold the pagination
  const [pagination, setPagination] = useState(1);

  //setting the dummydata based on the pagination
  useEffect(() => {
    if (pagination === 1) {
      setSearchResult(dataOne);
    } else if (pagination === 2) {
      setSearchResult(dataTwo);
    }
  }, [pagination, dataOne, dataTwo]);

  //onclick function to change pagination
  const paginationChange = (num) => {
    if (num === "prev") {
      setPagination((prev) => prev - 1);
    }

    if (num === "next") {
      setPagination((prev) => prev + 1);
    }

    if(num === 2 || num === 1){
        setPagination(num);
    }
    
  };

  return (
    <div className="payment__search__result__container">
      <p className="payment__search__header__text">Payments</p>
      <div className="payment__search__header">
        <p>Showing 20 out of 500</p>
        <div className="payment__search__container">
          <Search fontSize="small" />
          <input className="payment__search" placeholder="Search payments" />
        </div>
        <div className="payment__search__options">
          <p>Show</p>
          <select className="payment__search__select">
            <option className="optionn">All</option>
            <option>Reconciled</option>
            <option>Un-Reconciled</option>
            <option>Settled</option>
            <option>Unsettled</option>
          </select>
        </div>
      </div>
   
        <table className="payment__search__table">
          <thead>
            <tr>
              <th>Item Type</th>
              <th>Price</th>
              <th>Transaction No</th>
              <th>Time</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {searchResult.map((d) => (
              <tr key={d.id} className="payment__search__result__row">
                <td className="payment__item__type__avatar">
                  <Avatar>
                    <p className="payment__item__type__vw">{d.logo}</p>
                  </Avatar>
                  <p> {d.name}</p>
                </td>
                <td>&#8358;{d.price}</td>
                <td>{d.transaction__no}</td>
                <td>{d.time}</td>
                <td className="payment__status__container ">
                  <div
                    className={`payment__status ${
                      d.status === "Reconciled"
                        ? "reconcile"
                        : d.status === "Pending"
                        ? "pending"
                        : ""
                    }`}
                  >
                    <FiberManualRecord fontSize="small" />
                    <p>{d.status}</p>
                  </div>
                  <ExpandMore />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      <div className="payment__search__footer">
        
        <p>Showing {pagination === 1 ? '1 to 10' : '11 to 20'} of 500 entries</p>
        <div className="payment__search__footer__Pagination">
          <button
          disabled={pagination <= 1? true :false }
            onClick={() => paginationChange("prev")}
            className="previous__next"
          >
            <p>Previous</p>
          </button>
          <p onClick={() => paginationChange(1)} className="one__two">
            1
          </p>
          <p onClick={() => paginationChange(2)} className="one__two">
            2
          </p>
          <button
          disabled={pagination === 2? true :false }
            onClick={() => paginationChange("next")}
            className="previous__next"
          >
            <p>Next</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payments;
