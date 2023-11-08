import React from 'react'
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "../../styles/setpin.css"

function SetPin() {
  return (
    <div className="setpin">
      <div className="nav">
          <div className="d-flex m-2 mt-2">
            <div className="app-logo"></div>
            <p className="app-name">Pepsa</p>
          </div>
          
        </div>
      <div className="spin-header">
        <h1 className="spinsubheader">Set Pin</h1>
      </div>
      <div className="hold-input">
        <input className="input-1" type="number" name="" placeholder="Transaction Pin"/>
        <input className="input-2" type="password" name="" placeholder="Confirm Pin"/>
      </div>
      <Link to="/login">
        {" "}
        <button className="button-1">COMPLETE</button>
      </Link>
    </div>
  )
}

export default SetPin