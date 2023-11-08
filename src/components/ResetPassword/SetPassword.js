import React from 'react'
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "../../styles/setpassword.css"

function SetPassword() {
  return (
    <div className="setpassword">
         <div className="nav">
        <div className="d-flex m-2 mt-2">
          <div className="app-logo"></div>
          <p className="app-name">Pepsa</p>
        </div>
       
      </div>
      <div className="spass-header">
        <h1 className="spasssubheader">Set Password</h1>
      </div>
      <div className="hold-input">
        <input className="input-1" type="password" name="" placeholder="Password"/>
        <input className="input-2" type="password" name="" placeholder="Confirm password"/>
      </div>
      <Link to="/changepassword">
        {" "}
        <button className="button-1">Reset</button>
      </Link>
      <div>
      <p className="cpassword-footer">
       Remember Password <Link to="">Login</Link>
      </p>
    </div>
    </div>
  )
}

export default SetPassword