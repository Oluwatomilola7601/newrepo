import React from "react";
import "../../styles/getstarted.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function GetStarted() {
  return (
    <div className="">
      <center>
        <div className="nav">
          <div className="d-flex m-2 mt-2">
            <div className="app-logo"></div>
            <p className="app-name">Pepsa</p>
          </div>
          <div>
            <button className="btn btn-danger m-2 getstarted">
              Get Started
            </button>
          </div>
        </div>
        <div className="get-header">
          <h1 className="getsubheader">Get Started</h1>
        </div>

        <div className="getbox2">
          <input type="name" className="input-4" placeholder="Firstname" />
          <input type="name" className="input-5" placeholder="Surname" />
          <input type="phone" className="input-1" placeholder="Phone number" />
          <input
            type="email"
            className="input-2"
            placeholder="Email(optional)"
          />
          <input type="gender" className="input-3" placeholder="Male" />
          <input type="password" className="input-3" placeholder="Password" />
          <input
            type="password"
            className="input-3"
            placeholder="Confirm Password"
          />
        </div>
        <Link to="/verificationcode">
          {" "}
          <button className="button-1">CONFIRM</button>
        </Link>
        <p>
          By confirming you agree to all <Link to="">terms</Link>
        </p>
      </center>
    </div>
  );
}

export default GetStarted;
