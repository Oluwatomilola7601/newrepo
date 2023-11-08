import React from "react";
import "../../styles/topupwithbanktransfer.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


function TopUpWithBankTransfer() {
  return (
    <div className="">
      <div className="Airtimeheader">
        <svg
          className="svgg1 "
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
        >
          <g clip-path="url(#clip0_515_819)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.15163 9.69054L6.58951 12.1284C6.68069 12.2134 6.75383 12.3159 6.80456 12.4297C6.85529 12.5436 6.88256 12.6665 6.88476 12.7911C6.88696 12.9157 6.86404 13.0395 6.81736 13.155C6.77068 13.2706 6.7012 13.3756 6.61307 13.4637C6.52493 13.5519 6.41995 13.6213 6.30438 13.668C6.18882 13.7147 6.06503 13.7376 5.94041 13.7354C5.81579 13.7332 5.69289 13.706 5.57904 13.6552C5.46519 13.6045 5.36273 13.5314 5.27776 13.4402L1.25588 9.41829L0.600006 8.76242L1.25588 8.10654L5.27776 4.08467C5.4537 3.92073 5.6864 3.83147 5.92685 3.83572C6.1673 3.83996 6.39671 3.93736 6.56676 4.10741C6.73681 4.27746 6.83422 4.50688 6.83846 4.74732C6.8427 4.98777 6.75345 5.22048 6.58951 5.39642L4.15163 7.83429H16.3781C17.4448 7.83429 18.4678 8.25803 19.222 9.01227C19.9763 9.76652 20.4 10.7895 20.4 11.8562C20.4 12.9228 19.9763 13.9458 19.222 14.7001C18.4678 15.4543 17.4448 15.878 16.3781 15.878H13.9031C13.657 15.878 13.4209 15.7803 13.2468 15.6062C13.0728 15.4321 12.975 15.1961 12.975 14.9499C12.975 14.7038 13.0728 14.4677 13.2468 14.2936C13.4209 14.1196 13.657 14.0218 13.9031 14.0218H16.3781C16.9525 14.0218 17.5033 13.7936 17.9095 13.3875C18.3156 12.9814 18.5438 12.4305 18.5438 11.8562C18.5438 11.2818 18.3156 10.731 17.9095 10.3248C17.5033 9.91871 16.9525 9.69054 16.3781 9.69054H4.15163Z"
              fill="#888888"
            />
          </g>
          <defs>
            <clipPath id="clip0_515_819">
              <rect
                width="19.8"
                height="19.8"
                fill="white"
                transform="translate(0.600006 0.0999756)"
              />
            </clipPath>
          </defs>
        </svg>{" "}
        <h5 className="mt-2 airtimedata">Account to Top-up</h5>
      </div>

      <div>
        <p className="header mt-3">Top-up with bank transfer</p>
       <center>
       <input type="number" className="input" placeholder="#200,000.00" />
       </center>
      </div>
      <div className="subheader">
        <center>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="14"
              viewBox="0 0 15 14"
              fill="none"
            >
              <path
                d="M3.41669 9.91659V5.83325H4.58335V9.91659H3.41669ZM6.91669 9.91659V5.83325H8.08335V9.91659H6.91669ZM1.66669 12.2499V11.0833H13.3334V12.2499H1.66669ZM10.4167 9.91659V5.83325H11.5834V9.91659H10.4167ZM1.66669 4.66659V3.49992L7.50002 0.583252L13.3334 3.49992V4.66659H1.66669Z"
                fill="black"
              />
            </svg>
            Providus Bank
          </p>
        </center>
        <center>
          <b className="bold">
            0270710011{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M10.125 1.5H4.125C4.02554 1.5 3.93016 1.53951 3.85984 1.60984C3.78951 1.68016 3.75 1.77554 3.75 1.875V3.75H1.875C1.77554 3.75 1.68016 3.78951 1.60984 3.85984C1.53951 3.93016 1.5 4.02554 1.5 4.125V10.125C1.5 10.2245 1.53951 10.3198 1.60984 10.3902C1.68016 10.4605 1.77554 10.5 1.875 10.5H7.875C7.97446 10.5 8.06984 10.4605 8.14017 10.3902C8.21049 10.3198 8.25 10.2245 8.25 10.125V8.25H10.125C10.2245 8.25 10.3198 8.21049 10.3902 8.14017C10.4605 8.06984 10.5 7.97446 10.5 7.875V1.875C10.5 1.77554 10.4605 1.68016 10.3902 1.60984C10.3198 1.53951 10.2245 1.5 10.125 1.5ZM7.5 9.75H2.25V4.5H7.5V9.75ZM9.75 7.5H8.25V4.125C8.25 4.02554 8.21049 3.93016 8.14017 3.85984C8.06984 3.78951 7.97446 3.75 7.875 3.75H4.5V2.25H9.75V7.5Z"
                fill="black"
              />
            </svg>
          </b>
        </center>
        <p className="text">
          This account will only work for this <br /> transaction. Account
          expires in 30 minutes.
        </p>
      </div>
      <div className="button">
        <Link to="/">
          <center>
          <button className="button-2">CHANGE PAYMENT METHOD</button>
          </center>
        </Link>
        <Link to="/topupwithcard">
          {" "}
          <center>
          <button className="button-1">CONFIRM PAYMENT</button>
          </center>
        </Link>
      </div>
      
    </div>
  );
}

export default TopUpWithBankTransfer;
