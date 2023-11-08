import React from "react";
import "../../styles/changepassword.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function ChangePassword() {
  return (
    <div className="changepassword">
      <div className="nav">
        <svg
          className="mt-2"
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
        >
          <path
            d="M4.5 6.5H20.5M4.5 12.5H20.5M4.5 18.5H11.5"
            stroke="#9D0208"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <div className="d-flex m-2 mt-2">
          <div className="app-logo"></div>
          <p className="app-name">Pepsa</p>
        </div>
        <svg
          className="mt-2"
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
        >
          <g clip-path="url(#clip0_2685_4910)">
            <path
              d="M22.9 2.1H2.1V0.5H22.9V2.1ZM2.116 4.3432C2.15224 4.16191 2.25014 3.99877 2.39307 3.88151C2.536 3.76425 2.71513 3.70011 2.9 3.7H22.1C22.2849 3.70011 22.464 3.76425 22.6069 3.88151C22.7499 3.99877 22.8478 4.16191 22.884 4.3432L24.484 12.3432C24.5072 12.4592 24.5044 12.5789 24.4757 12.6937C24.4471 12.8085 24.3933 12.9155 24.3183 13.007C24.2433 13.0986 24.149 13.1723 24.0421 13.223C23.9351 13.2736 23.8183 13.2999 23.7 13.3H1.3C1.18169 13.2999 1.06486 13.2736 0.957944 13.223C0.851025 13.1723 0.756673 13.0986 0.681686 13.007C0.606699 12.9155 0.552944 12.8085 0.524294 12.6937C0.495643 12.5789 0.492811 12.4592 0.516 12.3432L2.116 4.3432ZM2.1 14.9V22.9H0.5V24.5H24.5V22.9H22.9V14.9H19.7V18.1H5.3V14.9H2.1Z"
              fill="#747474"
            />
            <path
              d="M6.8999 14.8999H18.0999V16.4999H6.8999V14.8999Z"
              fill="#747474"
            />
          </g>
          <defs>
            <clipPath id="clip0_2685_4910">
              <rect
                width="24"
                height="24"
                fill="white"
                transform="translate(0.5 0.5)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="cpassword-header">
        <h1 className="cpasssubheader">Change Password</h1>
      </div>
      <div className="cpassword-hold-input">
        <input
          className="cpassinput-1"
          type="password"
          name=""
          placeholder="Old Password"
        />
        <input
          className="cpassinput-1"
          type="password"
          name=""
          placeholder="Password"
        />
        <input
          className="cpassinput-2"
          type="password"
          name=""
          placeholder="Confirm Password"
        />
      </div>
      <Link to="/dispatch">
        {" "}
        <button className="cpasswordbutton-1">CHANGE</button>
      </Link>
      <div>
        <p className="cpassword-footer">
          You need Help <Link to="">Support</Link>
        </p>
      </div>
    </div>
  );
}

export default ChangePassword;
