import React from "react";
// import "../styles/Receipt.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Receipt() {
  return (
    <div className="receipt">
      <Link to="/sendmoney">
        <svg
          className="close"
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          fontWeight="bolder"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.99996 5.49997L1.50016 0L0 1.49976L5.50002 6.99991L0 12.4999L1.50016 14L6.99996 8.49989L12.4999 14L13.9997 12.4999L8.49985 6.99991L13.9997 1.49976L12.4999 0L6.99996 5.49997Z"
            fill="black"
          />
        </svg>
      </Link>
      <center>
        <div className="mt-5">
          <div className="img"></div>
          <p>Group Savings,Digital Banking,Empowerment</p>
        </div>
        <div>
          <p className="success-text">Successful</p>
          <p className="card-depo">Card deposit</p>
        </div>
      </center>
      <center>
        <p className="mt-0 p-3 amount">#200,100.00</p>
      </center>
      <div className="details-hold">
        <div className="d-flex justify-content-center">
          <p className="">Card Type</p>
          <p className="nums">Master Card</p>
        </div>
        <div className="d-flex justify-content-center">
          <p className=" ">Account Number</p>
          <p className="  numbers">0000 *********</p>
        </div>
        <div className="d-flex justify-content-center">
          <p className=" ">CCV</p>
          <p className="  num">***</p>
        </div>
        <div className="d-flex justify-content-center">
          <p className=" ">Amount</p>
          <p className="number ">#200,000.00</p>
        </div>
        <div className="d-flex justify-content-center">
          <p className=" ">Transaction fee</p>
          <p className="number ">#100.00</p>
        </div>
      </div>
      <center className="" style={{ marginTop: "5%" }}>
        <button className="button-1">
          <svg
            className="me-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path
              d="M11 21.2007V19.2007H19V12.1007C19 10.1507 18.3207 8.49635 16.962 7.13768C15.6033 5.77902 13.9493 5.10002 12 5.10068C10.05 5.10068 8.39567 5.78002 7.037 7.13868C5.67834 8.49735 4.99934 10.1514 5 12.1007V18.2007H4C3.45 18.2007 2.979 18.0047 2.587 17.6127C2.195 17.2207 1.99934 16.75 2 16.2007V14.2007C2 13.8507 2.08767 13.5213 2.263 13.2127C2.43834 12.904 2.684 12.6583 3 12.4757L3.075 11.1507C3.20834 10.0174 3.53767 8.96735 4.063 8.00068C4.58834 7.03402 5.24667 6.19235 6.038 5.47568C6.82867 4.75902 7.73633 4.20068 8.761 3.80068C9.78567 3.40068 10.8653 3.20068 12 3.20068C13.1333 3.20068 14.2083 3.40068 15.225 3.80068C16.2417 4.20068 17.15 4.75502 17.95 5.46368C18.75 6.17168 19.4083 7.00902 19.925 7.97568C20.4417 8.94235 20.775 9.99235 20.925 11.1257L21 12.4257C21.3167 12.5757 21.5627 12.8007 21.738 13.1007C21.9133 13.4007 22.0007 13.7174 22 14.0507V16.3507C22 16.684 21.9123 17.0007 21.737 17.3007C21.5617 17.6007 21.316 17.8257 21 17.9757V19.2007C21 19.7507 20.804 20.2217 20.412 20.6137C20.02 21.0057 19.5493 21.2014 19 21.2007H11ZM9 14.2007C8.71667 14.2007 8.479 14.1047 8.287 13.9127C8.095 13.7207 7.99934 13.4833 8 13.2007C8 12.9173 8.096 12.6797 8.288 12.4877C8.48 12.2957 8.71734 12.2 9 12.2007C9.28334 12.2007 9.521 12.2967 9.713 12.4887C9.905 12.6807 10.0007 12.918 10 13.2007C10 13.484 9.904 13.7217 9.712 13.9137C9.52 14.1057 9.28267 14.2014 9 14.2007ZM15 14.2007C14.7167 14.2007 14.479 14.1047 14.287 13.9127C14.095 13.7207 13.9993 13.4833 14 13.2007C14 12.9173 14.096 12.6797 14.288 12.4877C14.48 12.2957 14.7173 12.2 15 12.2007C15.2833 12.2007 15.521 12.2967 15.713 12.4887C15.905 12.6807 16.0007 12.918 16 13.2007C16 13.484 15.904 13.7217 15.712 13.9137C15.52 14.1057 15.2827 14.2014 15 14.2007ZM6.025 12.6507C5.90834 10.884 6.44167 9.36735 7.625 8.10068C8.80834 6.83402 10.2833 6.20068 12.05 6.20068C13.5333 6.20068 14.8377 6.67135 15.963 7.61268C17.0883 8.55402 17.7673 9.75835 18 11.2257C16.4833 11.209 15.0873 10.8007 13.812 10.0007C12.5367 9.20068 11.5577 8.11735 10.875 6.75068C10.6083 8.08402 10.0457 9.27168 9.187 10.3137C8.32834 11.3557 7.27367 12.1347 6.025 12.6507Z"
              fill="#3059C0"
            />
          </svg>
          Report this transaction
        </button>
        <br />
        <svg
          className="mt-5"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="33"
          viewBox="0 0 12 13"
          fill="none"
        >
          <path
            d="M10.5 6.20068L7 2.70068V4.70068C3.5 5.20068 2 7.70068 1.5 10.2007C2.75 8.45068 4.5 7.65068 7 7.65068V9.70068L10.5 6.20068Z"
            fill="black"
          />
        </svg>
      </center>
    </div>
  );
}

export default Receipt;
