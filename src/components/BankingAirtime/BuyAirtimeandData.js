import React from "react";
import "../../styles/buyairtimeanddata.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function BuyAirtimeandData() {
  return (
    <div className="AirtimeData">
      <div className="Airtimeheader">
        <svg
          className="svgg1"
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
        <h5 className="mt-2 airtimedata">Airtime and Data</h5>
        <svg
          className="svgg2"
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
        >
          <path
            d="M11.8 21V19H19.8V11.9C19.8 9.95 19.1207 8.29567 17.762 6.937C16.4033 5.57833 14.7493 4.89933 12.8 4.9C10.85 4.9 9.19566 5.57933 7.83699 6.938C6.47832 8.29667 5.79932 9.95067 5.79999 11.9V18H4.79999C4.24999 18 3.77899 17.804 3.38699 17.412C2.99499 17.02 2.79932 16.5493 2.79999 16V14C2.79999 13.65 2.88766 13.3207 3.06299 13.012C3.23832 12.7033 3.48399 12.4577 3.79999 12.275L3.87499 10.95C4.00832 9.81667 4.33766 8.76667 4.86299 7.8C5.38832 6.83333 6.04666 5.99167 6.83799 5.275C7.62866 4.55833 8.53632 4 9.56099 3.6C10.5857 3.2 11.6653 3 12.8 3C13.9333 3 15.0083 3.2 16.025 3.6C17.0417 4 17.95 4.55433 18.75 5.263C19.55 5.971 20.2083 6.80833 20.725 7.775C21.2417 8.74167 21.575 9.79167 21.725 10.925L21.8 12.225C22.1167 12.375 22.3627 12.6 22.538 12.9C22.7133 13.2 22.8007 13.5167 22.8 13.85V16.15C22.8 16.4833 22.7123 16.8 22.537 17.1C22.3617 17.4 22.116 17.625 21.8 17.775V19C21.8 19.55 21.604 20.021 21.212 20.413C20.82 20.805 20.3493 21.0007 19.8 21H11.8ZM9.79999 14C9.51666 14 9.27899 13.904 9.08699 13.712C8.89499 13.52 8.79932 13.2827 8.79999 13C8.79999 12.7167 8.89599 12.479 9.08799 12.287C9.27999 12.095 9.51732 11.9993 9.79999 12C10.0833 12 10.321 12.096 10.513 12.288C10.705 12.48 10.8007 12.7173 10.8 13C10.8 13.2833 10.704 13.521 10.512 13.713C10.32 13.905 10.0827 14.0007 9.79999 14ZM15.8 14C15.5167 14 15.279 13.904 15.087 13.712C14.895 13.52 14.7993 13.2827 14.8 13C14.8 12.7167 14.896 12.479 15.088 12.287C15.28 12.095 15.5173 11.9993 15.8 12C16.0833 12 16.321 12.096 16.513 12.288C16.705 12.48 16.8007 12.7173 16.8 13C16.8 13.2833 16.704 13.521 16.512 13.713C16.32 13.905 16.0827 14.0007 15.8 14ZM6.82499 12.45C6.70832 10.6833 7.24166 9.16667 8.42499 7.9C9.60832 6.63333 11.0833 6 12.85 6C14.3333 6 15.6377 6.47067 16.763 7.412C17.8883 8.35333 18.5673 9.55767 18.8 11.025C17.2833 11.0083 15.8873 10.6 14.612 9.8C13.3367 9 12.3577 7.91667 11.675 6.55C11.4083 7.88333 10.8457 9.071 9.98699 10.113C9.12832 11.155 8.07366 11.934 6.82499 12.45Z"
            fill="#888888"
          />
        </svg>
      </div>
      <p className="text-center mt-2">Buy Airtime and Data</p>
      <Link to="/buyairtime">
        <button className="buyairtime">
          <h4>
            <svg
              className="me-2"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M14.566 19.152C10.3312 17.3545 6.91984 14.0408 4.99999 9.86003V9.85803L4.48099 8.71803C4.13795 7.96322 4.07401 7.11115 4.30054 6.3136C4.52708 5.51604 5.02939 4.82481 5.71799 4.36303L7.05099 3.46903C7.25863 3.32992 7.51084 3.2736 7.75793 3.31117C8.00502 3.34875 8.22909 3.47748 8.38599 3.67203L10.816 6.68403C10.9006 6.78893 10.9631 6.90983 10.9997 7.03949C11.0364 7.16914 11.0465 7.30487 11.0294 7.43853C11.0123 7.57218 10.9684 7.701 10.9003 7.81725C10.8322 7.93351 10.7412 8.03479 10.633 8.11503L9.37599 9.04703C10.5575 11.4394 12.4944 13.3759 14.887 14.557L15.819 13.301C15.8992 13.1928 16.0005 13.1019 16.1168 13.0337C16.233 12.9656 16.3618 12.9217 16.4955 12.9046C16.6292 12.8875 16.7649 12.8976 16.8945 12.9343C17.0242 12.971 17.1451 13.0335 17.25 13.118L20.262 15.548C20.4565 15.7049 20.5853 15.929 20.6229 16.1761C20.6604 16.4232 20.6041 16.6754 20.465 16.883L19.577 18.207C19.1176 18.8917 18.4313 19.3923 17.6389 19.6204C16.8466 19.8485 15.9991 19.7896 15.246 19.454L14.566 19.151V19.152Z"
                fill="#888888"
              />
              <path
                d="M13.75 8.99997C13.75 9.19889 13.829 9.38965 13.9697 9.5303C14.1103 9.67096 14.3011 9.74997 14.5 9.74997H18.328C18.5269 9.74997 18.7177 9.67096 18.8583 9.5303C18.999 9.38965 19.078 9.19889 19.078 8.99997C19.078 8.80106 18.999 8.6103 18.8583 8.46965C18.7177 8.32899 18.5269 8.24997 18.328 8.24997H16.311L19.47 5.09098C19.5416 5.02176 19.5987 4.93897 19.638 4.84745C19.6772 4.75593 19.6979 4.6575 19.6987 4.55792C19.6995 4.45833 19.6805 4.35958 19.6427 4.26743C19.605 4.17528 19.5492 4.09156 19.4788 4.02118C19.4083 3.95079 19.3246 3.89514 19.2324 3.85747C19.1402 3.81981 19.0414 3.80088 18.9418 3.80179C18.8423 3.8027 18.7439 3.82344 18.6524 3.86279C18.5609 3.90214 18.4782 3.95931 18.409 4.03098L15.25 7.18798V5.17197C15.25 4.97306 15.171 4.7823 15.0303 4.64164C14.8897 4.50099 14.6989 4.42197 14.5 4.42197C14.3011 4.42197 14.1103 4.50099 13.9697 4.64164C13.829 4.7823 13.75 4.97306 13.75 5.17197V8.99997Z"
                fill="#888888"
              />
            </svg>
            Buy Airtime
          </h4>
          <p>Buy Airtime froma all network with ease and Speed</p>
        </button>
      </Link>
      <button className="buydata">
        <h4>
          <svg
            className="me-2"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M20.5765 0.330404C21.017 -0.110135 21.7294 -0.110135 22.1652 0.330404L23.6649 1.83011C24.1054 2.27065 24.1054 2.98301 23.6649 3.41886L19.5876 7.49619L21.4153 9.32396C21.7387 9.64733 21.8325 10.1301 21.6591 10.5518C21.4856 10.9736 21.0732 11.2455 20.6186 11.2455H13.8746C13.2513 11.2455 12.7499 10.744 12.7499 10.1207V3.37668C12.7499 2.92209 13.0217 2.50967 13.4435 2.33626C13.8653 2.16286 14.348 2.25659 14.6714 2.57996L16.4991 4.40773L20.5765 0.330404ZM3.37668 12.7499H10.1254C10.7487 12.7499 11.2501 13.2513 11.2501 13.8746V20.6233C11.2501 21.0779 10.9783 21.4903 10.5565 21.6637C10.1347 21.8371 9.65202 21.7434 9.32865 21.42L7.50088 19.5923L3.42355 23.6696C2.98301 24.1101 2.27065 24.1101 1.8348 23.6696L0.330404 22.1699C-0.110135 21.7293 -0.110135 21.017 0.330404 20.5811L4.40773 16.5038L2.57997 14.6714C2.25659 14.348 2.16286 13.8653 2.33626 13.4435C2.50967 13.0217 2.92209 12.7499 3.37668 12.7499Z"
              fill="#888888"
            />
          </svg>
          Buy Data
        </h4>
        <p>Buy Data froma all network with ease and Speed</p>
      </button>
      
    </div>
  );
}

export default BuyAirtimeandData;