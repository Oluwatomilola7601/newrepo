import React from "react";
import "../../styles/Login.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


function Login() {
  return (
    <div className="login">
      <div className="nav">
        <div className="d-flex m-2 mt-2">
          <div className="app-logo"></div>
          <p className="app-name">Pepsa</p>
        </div>
        <div>
          <button className="btn btn-danger m-2 getstarted">Get Started</button>
        </div>
      </div>
      <div className="login-header">
        <h1 className="loginsubheader">Login</h1>
      </div>
      <div className="hold-input">
        <input className="input-1" type="email" name="" placeholder="oluwatomigba7601"/>
        <input className="input-2" type="password" name="" placeholder="Password"/>
      </div>
      <Link to="/forgotpassword">
        {" "}
        <button className="button-1">LOGIN</button>
      </Link>
      <div>
        <p className="login-footer">Dont have an account <Link to = "">Sign Up</Link></p>
        <Link to = '/forgotpassword'><p className="login-footer">Forgot Password</p></Link>
      </div>
    </div>
  );
}

export default Login;
