import React from "react";
import "../../styles/forgotpassword.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function ForgotPassword() {
  return (
    <div className="forgotpassword">
         <div className="nav">
        <div className="d-flex m-2 mt-2">
          <div className="app-logo"></div>
          <p className="app-name">Pepsa</p>
        </div>
        <div>
          <button className="btn btn-danger m-2 getstarted">Get Started</button>
        </div>
      </div>
      <div className="password-header">
        <h1 className="passsubheader">Forgot Password?</h1>
      </div>
      <div className="password-hold-input">
        <input
          className="passinput-1"
          type="Email"
          name=""
          placeholder="Email"
        />
      </div>
      <Link to="/setpassword">
        {" "}
        <button className="passwordbutton-1">RECOVER</button>
      </Link>
      <div>
        <p className="password-footer">
          Remember Password? <Link to="">Login</Link>
        </p>
      </div>
      
    </div>
  );
}

export default ForgotPassword;
