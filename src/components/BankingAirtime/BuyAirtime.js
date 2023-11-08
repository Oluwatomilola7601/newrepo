import React from "react";
import "../../styles/BuyAirtime.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function BuyAirtime() {
  return (
    <div className="buyairtimedata">
      <div className="TopUpheader">
        <svg
          className="svgg1"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M19 9.99979H1"
            stroke="#888888"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10 19L1 10L10 1"
            stroke="#888888"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <h5 className="mt-2 topuptext">Buy Airtime and Data</h5>
      </div>
      <div className="input-hold">
        <center>
          <h5 className="mt-2">Buy Airtime</h5>
          <input type="operator" name="" id="" placeholder="Operator" />
          <input type="Product" name="" id="" placeholder="Product" />
          <input type="Product" name="" id="" placeholder="Range" />
          <input
            type="number"
            name=""
            className="ph"
            placeholder="Phone Number"
          />
          <input type="number" name="" className="num" placeholder="0.00" />
          <input type="text" className="bal" placeholder="SavePoint balance" />
        </center>
      </div>
      <center>
        <Link to="/buyairtimeanddata2">
          {" "}
          <button className="button-1 ms-3">TRANSFER</button>
        </Link>
      </center>
     
    </div>
  );
}

export default BuyAirtime;
