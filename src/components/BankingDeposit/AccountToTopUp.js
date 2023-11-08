import React from "react";
import "../../styles/Accounttotopup.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function AccountToTopUp() {
  return (
    <div>
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
      <div className="">
        <center>
          <input
            className="cpassinput-1"
            type="number"
            name=""
            placeholder="Amount in NGN"
          />
          <p className="wallet-info">
            How would you like to add money to your wallet
          </p>
        </center>
      </div>
      <div className="bank-trans">
        <div className="grp-1">
          {" "}
          <svg
            className="mt-1 me-1"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M11.6667 8.16631C11.8914 8.16643 12.1074 8.25298 12.2701 8.40805C12.4327 8.56312 12.5294 8.77481 12.5402 8.99926C12.551 9.22371 12.4751 9.44372 12.3281 9.61368C12.1811 9.78365 11.9743 9.89055 11.7507 9.91223L11.6667 9.91631H4.44558L5.28558 10.7563C5.4447 10.9149 5.53675 11.1285 5.54268 11.3531C5.54861 11.5776 5.46796 11.7958 5.31744 11.9625C5.16691 12.1292 4.95804 12.2317 4.73406 12.2486C4.51009 12.2656 4.28817 12.1958 4.11425 12.0536L4.04775 11.9936L1.81417 9.7594C1.246 9.19123 1.61583 8.23281 2.39225 8.16981L2.47392 8.16631H11.6667ZM8.715 2.00631C8.86805 1.85313 9.07246 1.76213 9.28871 1.75093C9.50496 1.73972 9.71769 1.8091 9.88575 1.94565L9.95225 2.00573L12.1858 4.2399C12.754 4.80806 12.3842 5.76648 11.6078 5.82948L11.5261 5.83298H2.33333C2.10862 5.83287 1.89257 5.74631 1.72994 5.59124C1.56731 5.43617 1.47058 5.22448 1.45978 5.00003C1.44898 4.77558 1.52495 4.55558 1.67194 4.38561C1.81893 4.21565 2.02567 4.10875 2.24933 4.08706L2.33333 4.08298H9.55442L8.71442 3.24298C8.55056 3.07892 8.45852 2.85652 8.45852 2.62465C8.45852 2.39277 8.55114 2.17038 8.715 2.00631Z"
              fill="#888888"
            />
          </svg>
          Top up with bank transfer
        </div>
        <div className="grp-2">
          <input type="radio" name="" id="" className="" />
          <p className="sub-2 ps-2">
            Fund your wallet directly,using your bank transfer <br /> Your
            wallet will be updated immediately
          </p>
        </div>
      </div>
      <div className="cards">
        <div className="grp-1">
          {" "}
          <svg
            className="mt-1 me-1"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M12.6875 1.74976H1.3125C0.590625 1.74976 0 2.34038 0 3.06226V10.9373C0 11.6591 0.590625 12.2498 1.3125 12.2498H12.6875C13.4094 12.2498 14 11.6591 14 10.9373V3.06226C14 2.34038 13.4094 1.74976 12.6875 1.74976ZM1.3125 2.62476H12.6875C12.9246 2.62476 13.125 2.82513 13.125 3.06226V4.37476H0.875V3.06226C0.875 2.82513 1.07537 2.62476 1.3125 2.62476ZM12.6875 11.3748H1.3125C1.19696 11.3732 1.0866 11.3266 1.00489 11.2449C0.923187 11.1632 0.876585 11.0528 0.875 10.9373V6.99976H13.125V10.9373C13.125 11.1744 12.9246 11.3748 12.6875 11.3748ZM1.75 8.74976H2.625V10.4998H1.75V8.74976ZM3.5 8.74976H4.375V10.4998H3.5V8.74976ZM5.25 8.74976H6.125V10.4998H5.25V8.74976Z"
              fill="#888888"
            />
          </svg>
          Top up with bank Card
        </div>
        <div className="grp-2">
          <input type="radio" name="" id="" className="" />
          <p className="sub-2 ps-2">
            Fund your wallet directly,using your bank transfer <br /> Your
            wallet will be updated immediately
          </p>
        </div>
      </div>
      <div className="others">
        <div className="grp-1">
          {" "}
          <svg
            className="mt-1 me-1"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.41801 1.62779L4.162 3.23053L9.01383 3.2211L13.8654 3.21168L12.1755 1.60572L10.4859 -0.000244141L5.5797 0.0124097L0.673754 0.0250635L2.41801 1.62779ZM0.000711324 5.73787V10.6871L1.68332 12.2761L3.36592 13.8651L3.43942 8.89999L3.51319 3.93483L2.22794 2.62018C-0.104014 0.234255 0.000711324 0.0875254 0.000711324 5.73787ZM4.30818 9.01899V13.9998H9.15409H14V9.01899V4.03822H9.15409H4.30818V9.01899Z"
              fill="#888888"
            />
            <path
              d="M6.72656 7.05913C7.275 6.41382 8.08594 5.99976 9 5.99976C10.6578 5.99976 12 7.34194 12 8.99976H13C13 6.79038 11.2094 4.99976 9 4.99976C7.80938 4.99976 6.74531 5.52163 6.01406 6.34663L5 5.33257V7.99976H7.66719L6.72656 7.05913ZM11.2734 10.9404C10.7234 11.5857 9.91406 11.9998 9 11.9998C7.34219 11.9998 6 10.6576 6 8.99976H5C5 11.2091 6.79063 12.9998 9 12.9998C10.1906 12.9998 11.2547 12.4779 11.9859 11.6529L13 12.6669V9.99976H10.3328L11.2734 10.9404Z"
              fill="white"
            />
          </svg>
          Request money from others
        </div>
        <div className="grp-2">
          <input type="radio" name="" id="" className="" />
          <p className="sub-2 ps-2">
            Fund your wallet directly,using your bank transfer <br /> Your
            wallet will be updated immediately
          </p>
        </div>
      </div>
      <div className="top-up">
        <div className="grp-1">
          {" "}
          <svg
          className="mt-1 me-1"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <g clip-path="url(#clip0_455_5333)">
              <path
                d="M0.873834 7.04751C0.868001 6.30842 1.65958 5.88842 2.26158 6.22734L2.3275 6.26818L3.88967 7.32051C4.72033 7.88051 4.2035 9.15509 3.24858 9.02093L3.16808 9.00634L3.10508 8.99234C3.46379 9.6926 4.0046 10.2832 4.67061 10.7021C5.33663 11.121 6.10323 11.3526 6.88975 11.3726C7.67628 11.3926 8.45366 11.2002 9.14011 10.8157C9.82655 10.4313 10.3967 9.86888 10.7905 9.18776C10.9078 8.98955 11.0985 8.84559 11.3213 8.7871C11.5441 8.72861 11.7809 8.76031 11.9805 8.87532C12.18 8.99033 12.3261 9.17938 12.3872 9.40146C12.4483 9.62354 12.4193 9.86073 12.3066 10.0616C10.955 12.406 8.15383 13.6503 5.4145 12.9158C4.11994 12.569 2.97483 11.8073 2.15468 10.7473C1.33452 9.68734 0.884589 8.38768 0.873834 7.04751ZM7 3.49967C7.15471 3.49967 7.30308 3.56113 7.41248 3.67053C7.52188 3.77993 7.58333 3.9283 7.58333 4.08301V4.66634H8.16667C8.4375 4.66634 8.70298 4.74176 8.93336 4.88414C9.16374 5.02653 9.34992 5.23025 9.47104 5.47249C9.59216 5.71473 9.64343 5.98591 9.61911 6.25564C9.59479 6.52538 9.49583 6.78301 9.33333 6.99967C9.49583 7.21634 9.59479 7.47397 9.61911 7.74371C9.64343 8.01344 9.59216 8.28462 9.47104 8.52686C9.34992 8.7691 9.16374 8.97282 8.93336 9.11521C8.70298 9.25759 8.4375 9.33301 8.16667 9.33301H7.58333V9.91634C7.58333 10.0711 7.52188 10.2194 7.41248 10.3288C7.30308 10.4382 7.15471 10.4997 7 10.4997C6.84529 10.4997 6.69692 10.4382 6.58752 10.3288C6.47813 10.2194 6.41667 10.0711 6.41667 9.91634V9.33301H5.30833C5.13815 9.33301 4.97494 9.2654 4.85461 9.14507C4.73427 9.02473 4.66667 8.86152 4.66667 8.69134V5.30801C4.66667 5.13783 4.73427 4.97462 4.85461 4.85428C4.97494 4.73395 5.13815 4.66634 5.30833 4.66634H6.41667V4.08301C6.41667 3.9283 6.47813 3.77993 6.58752 3.67053C6.69692 3.56113 6.84529 3.49967 7 3.49967ZM8.16667 7.58301H5.83333V8.16634H8.16667C8.24402 8.16634 8.31821 8.13561 8.37291 8.08091C8.42761 8.02622 8.45833 7.95203 8.45833 7.87468C8.45833 7.79732 8.42761 7.72313 8.37291 7.66844C8.31821 7.61374 8.24402 7.58301 8.16667 7.58301ZM1.694 3.93776C3.045 1.59334 5.84617 0.349675 8.5855 1.08351C9.88006 1.43032 11.0252 2.19209 11.8453 3.25205C12.6655 4.31201 13.1154 5.61167 13.1262 6.95184C13.132 7.69093 12.3404 8.11092 11.7384 7.77259L11.6725 7.73176L10.1103 6.67884C9.27967 6.11884 9.7965 4.84426 10.7514 4.97901L10.8319 4.99359L10.8955 5.00701C10.5367 4.30692 9.99585 3.71647 9.32987 3.29776C8.66388 2.87904 7.89736 2.64754 7.11094 2.6276C6.32452 2.60766 5.54725 2.80003 4.8609 3.18445C4.17455 3.56888 3.60449 4.13117 3.21067 4.81217C3.09479 5.0133 2.90376 5.16015 2.67961 5.22043C2.45546 5.2807 2.21654 5.24947 2.01542 5.13359C1.81429 5.01771 1.66744 4.82669 1.60716 4.60253C1.54689 4.37838 1.57812 4.13888 1.694 3.93776ZM8.16667 5.83301H5.83333V6.41634H8.16667C8.24402 6.41634 8.31821 6.38561 8.37291 6.33091C8.42761 6.27622 8.45833 6.20203 8.45833 6.12467C8.45833 6.04732 8.42761 5.97313 8.37291 5.91844C8.31821 5.86374 8.24402 5.83301 8.16667 5.83301Z"
                fill="#888888"
              />
            </g>
            <defs>
              <clipPath id="clip0_455_5333">
                <rect
                  width="14"
                  height="14"
                  fill="white"
                  transform="translate(0 -0.000244141)"
                />
              </clipPath>
            </defs>
          </svg>
          Digital currency top-up
        </div>
        <div className="grp-2">
          <input type="radio" name="" id="" className="" />
          <p className="sub-2 ps-2">
            Fund your wallet directly,using your bank transfer <br /> Your
            wallet will be updated immediately
          </p>
        </div>
      </div>
      <center>
        <Link to="/topupwithbank">
          <button className="button-1">CONFIRM</button>
        </Link>
      </center>
    </div>
  );
}

export default AccountToTopUp;
