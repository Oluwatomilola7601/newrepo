import React from "react";
import "../../styles/Receiver.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


function Receiver() {
  return (
    <div>
      <p
        className="text-center mt-3"
        style={{ fontWeight: "bold", fontSize: "20px" }}
      >
       Receiver Details
      </p>
      <center>
        <p
          className="ps-4 text-start mt-3 mb-0"
          style={{ fontSize: "18px", fontWeight: "bolder" }}
        >
          Item Category <b style={{ color: "#9D0208" }}>*</b>
        </p>
        <input
          type="text"
          className="form-control "
          placeholder="Delivery destination"
          style={{ width: "90%", height: "50px" }}
        />
        <p
          className="ps-4 text-start mb-0"
          style={{ fontSize: "18px", fontWeight: "bolder" }}
        >
          House/strt.number <b style={{ color: "#9D0208" }}>*</b>
        </p>
        <input
          type="text"
          className="form-control mt-2 strt-icon"
          placeholder="E.g 52, Igbonia Street"
          style={{ width: "90%", height: "50px" }}
        />
        <p
          className="ps-4 text-start mb-0"
          style={{ fontSize: "18px", fontWeight: "bolder" }}
        >
          Landmark <b style={{ color: "#9D0208" }}>*</b>
        </p>
        <input
          type="text"
          className="form-control mt-2"
          placeholder="object/feature to identify location"
          style={{ width: "90%", height: "50px" }}
        />
        <div className="address mt-3">
          <p>
            52, Igbonla street, Faith Bible Church, Akobo, Ibadan, Oyo State
          </p>
        </div>
        <p
          className="ps-4 text-start mb-0"
          style={{ fontSize: "18px", fontWeight: "bolder" }}
        >
          Full Name <b style={{ color: "#9D0208" }}>*</b>
        </p>
        <input
          type="text"
          className="form-control "
          placeholder="Enter receiver name"
          style={{ width: "90%", height: "50px" }}
        />
        <p
          className="ps-4 text-start mb-0"
          style={{ fontSize: "18px", fontWeight: "bolder" }}
        >
          Phone Number <b style={{ color: "#9D0208" }}>*</b>
        </p>
        <input
          type="text"
          className="form-control "
          placeholder="Enter receiver number"
          style={{ width: "90%", height: "50px" }}
        />
        <p
          className="ps-4 text-start mb-0"
          style={{ fontSize: "18px", fontWeight: "bolder" }}
        >
          Email address <b style={{ color: "#9D0208" }}>*</b>
        </p>
        <input
          type="text"
          className="form-control "
          placeholder="Enter receiver email address"
          style={{ width: "90%", height: "50px" }}
        />
        <Link to="/topupaccount">
          <button className="button mt-3">Save</button>
        </Link>
      </center>
    </div>
  );
}

export default Receiver;