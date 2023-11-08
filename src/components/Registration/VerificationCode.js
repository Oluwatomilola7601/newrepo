import React from 'react'
import "../../styles/verificationcode.css"
import { Link } from 'react-router-dom/cjs/react-router-dom.min'


function VerificationCode() {
  return (
    <div className="verificationcode">
      <div className="nav">
          <div className="d-flex m-2 mt-2">
            <div className="app-logo"></div>
            <p className="app-name">Pepsa</p>
          </div>
        </div>
      <div className="verify-header">
        <h1 className="verifysubheader">Verification Code</h1>
      </div>
      <div className="verify-hold-input">
        <input
          className="verifyinput-1"
          type="number"
          name=""
          placeholder="Verification code"
        />
      </div>
      <Link to="/setpin">
        {" "}
        <button className="verifybutton-1">VERIFY</button>
      </Link>
      <div>
        <p className="verify-footer">
          Didnt get a code? <Link to="">Resend</Link>
        </p>
      </div>
    </div>
  )
}

export default VerificationCode