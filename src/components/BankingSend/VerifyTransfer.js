import React from "react";
import "../../styles/verifytransfer.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function VerifyTransfer() {
  return (
    <div>
      <center>
        <input
          type="number"
          className="mt-5 p-3 w-75"
          placeholder="#200,000.00"
        />
      </center>
      <div className="details-hold">
        <div className="d-flex justify-content-center">
          <p className="">Account Number</p>
          <p className="nums">0270710011</p>
        </div>
        <div className="d-flex justify-content-center">
          <p className=" ">Name</p>
          <p className="  numbers">Adewale Adejare</p>
        </div>
        <div className="d-flex justify-content-center">
          <p className=" ">Amount</p>
          <p className="  num">#200,000.00</p>
        </div>
        <div className="d-flex justify-content-center">
          <p className="">Transaction fee</p>
          <p className="number ">#100.00</p>
        </div>
      </div>
      <center className="" style={{ marginTop: "20%" }}>
        <button className="button-1">Transaction Pin</button>
        <Link to="/buyairtimeanddata">
          <button className="button-2">VERIFY</button>
        </Link>
      </center>
    </div>
  );
}

export default VerifyTransfer;
