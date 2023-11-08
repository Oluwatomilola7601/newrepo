import React from "react";
import "../../styles/Dispatch.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import CustomCalendar from "./Calendar";

function Dispatch() {
  return (
    <div>
      <div className="nav">
        <div className="d-flex m-2 mt-2">
          <div className="app-logo"></div>
          <p className="app-name">Pepsa</p>
        </div>
        <div>
          <button className="btn btn-danger m-2 getstarted">Get Started</button>
        </div>
      </div>
      <div>
        <p
          className="text-center"
          style={{ fontWeight: "bold", fontSize: "20px" }}
        >
          Dispatch Item
        </p>
        <p className="ps-2" style={{ fontSize: "18px", fontWeight: "bolder" }}>
          Item Category <b style={{ color: "#9D0208" }}>*</b>
        </p>
        <center>
          <select
            className="form-select form-select-lg"
            aria-label=""
            style={{ width: "90%" }}
          >
            <option selected>Open this select menu</option>
            <option value="1">
              Grocery and food <input type="radio" name="" id="" />
            </option>
            <option value="2">
              Pharmaceutical and Item
              <input type="radio" name="" id="" place />{" "}
            </option>
            <option value="3">Mail and Small Parcel</option>
            <option value="4">Bulk Item</option>
          </select>
        </center>
        <p
          className="ps-2 mt-3"
          style={{ fontSize: "18px", fontWeight: "bolder" }}
        >
          Order Details <b style={{ color: "#9D0208" }}>*</b>
        </p>
        <center>
          <button
            type="button"
            class="btn btn-light pickup"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            style={{ fontWeight: "bold" }}
          >
            Pick up details
            <svg
              className="ms-5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clip-path="url(#clip0_2732_9007)">
                <path
                  d="M20.2666 11.7333C19.0665 10.4666 17.4666 9.59993 15.7999 9.26659C15.0666 9.0666 14.3332 8.93326 13.5999 8.8666C15.4665 6.6666 15.1332 3.33326 12.9332 1.4666C10.7332 -0.40007 7.39988 -0.0667371 5.53322 2.13326C3.66655 4.33326 3.99988 7.6666 6.19988 9.53326C6.59988 9.8666 6.99988 10.1333 7.39988 10.2666V11.7333L6.33322 10.7333C5.39988 9.79993 3.86655 9.79993 2.86655 10.7333C1.93322 11.6666 1.86655 13.1333 2.79988 14.0666L5.86655 17.6666C5.99988 18.5999 6.33322 19.4666 6.79988 20.2666C7.13322 20.8666 7.59988 21.4666 8.06655 21.9333V23.1999C8.06655 23.5999 8.33322 23.8666 8.73322 23.8666H17.7999C18.1332 23.8666 18.4666 23.5333 18.4666 23.1999V21.4666C19.7332 19.9333 20.3999 17.9999 20.3999 16.0666V12.1999C20.4666 11.9333 20.3999 11.7999 20.2666 11.7333ZM5.59988 5.4666C5.59988 3.2666 7.39988 1.53326 9.59988 1.59993C11.7999 1.59993 13.5332 3.39993 13.4666 5.59993C13.4666 6.79993 12.9332 7.8666 11.9999 8.59993V5.2666C11.9658 4.68884 11.7121 4.146 11.2906 3.74934C10.8692 3.35268 10.312 3.13226 9.73322 3.13326C8.53322 3.0666 7.46655 4.0666 7.46655 5.2666V8.73326C6.33322 8.0666 5.66655 6.79993 5.59988 5.4666ZM19.1332 15.9999C19.1999 17.7333 18.5999 19.3999 17.4666 20.7333C17.3332 20.8666 17.1999 20.9999 17.1999 21.1999V22.5999H9.46655V21.6666C9.46655 21.4666 9.33322 21.2666 9.19988 21.1333C8.73322 20.7333 8.33322 20.2666 7.99988 19.6666C7.59988 18.9999 7.33322 18.1999 7.19988 17.3999C7.19988 17.2666 7.13322 17.1333 7.06655 16.9999L3.86655 13.1999C3.66655 12.9999 3.53322 12.7333 3.53322 12.3999C3.53322 12.1333 3.66655 11.7999 3.86655 11.5999C4.33322 11.1999 4.99988 11.1999 5.46655 11.5999L7.39988 13.5333V15.5333L8.66655 14.8666V5.2666C8.73322 4.79993 9.13322 4.39993 9.66655 4.4666C10.1332 4.4666 10.5999 4.79993 10.5999 5.2666V12.9333L11.9332 13.1999V10.1333C11.9999 10.0666 12.0666 10.0666 12.1332 9.99993C12.5999 9.99993 13.0665 10.0666 13.5332 10.1333V13.5333L14.5999 13.7333V10.2666L15.3999 10.4666C15.7332 10.5333 16.0666 10.6666 16.3999 10.7999V14.1333L17.4666 14.3333V11.2666C18.0666 11.5333 18.5999 11.9333 19.0666 12.3999L19.1332 15.9999Z"
                  fill="#383838"
                />
              </g>
              <defs>
                <clipPath id="clip0_2732_9007">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>

          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Modal title
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <div>
                    <p
                      className="text-center mt-3"
                      style={{ fontWeight: "bold", fontSize: "20px" }}
                    >
                      Receiver Details
                    </p>
                    <center>
                      <p
                        className="ps-4 text-start mt-3 mb-0"
                        style={{ fontSize: "18px", fontWeight: "bolder" }}
                      >
                        Item Category <b style={{ color: "#9D0208" }}>*</b>
                      </p>
                      <input
                        type="text"
                        className="form-control "
                        placeholder="Delivery destination"
                        style={{ width: "90%", height: "50px" }}
                      />
                      <p
                        className="ps-4 text-start mb-0"
                        style={{ fontSize: "18px", fontWeight: "bolder" }}
                      >
                        House/strt.number <b style={{ color: "#9D0208" }}>*</b>
                      </p>

                      {/* Location Input */}
                      <input
                        type="text"
                        className="form-control mt-2 strt-icon"
                        placeholder="E.g 52, Igbonia Street"
                        style={{ width: "90%", height: "50px" }}
                      />
                      <p
                        className="ps-4 text-start mb-0"
                        style={{ fontSize: "18px", fontWeight: "bolder" }}
                      >
                        Landmark <b style={{ color: "#9D0208" }}>*</b>
                      </p>
                      <input
                        type="text"
                        className="form-control mt-2"
                        placeholder="object/feature to identify location"
                        style={{ width: "90%", height: "50px" }}
                      />
                      <div className="address mt-3">
                        <p>
                          52, Igbonla street, Faith Bible Church, Akobo, Ibadan,
                          Oyo State
                        </p>
                      </div>
                      <p
                        className="ps-4 text-start mb-0"
                        style={{ fontSize: "18px", fontWeight: "bolder" }}
                      >
                        Full Name <b style={{ color: "#9D0208" }}>*</b>
                      </p>
                      <input
                        type="text"
                        className="form-control "
                        placeholder="Enter receiver name"
                        style={{ width: "90%", height: "50px" }}
                      />
                      <p
                        className="ps-4 text-start mb-0"
                        style={{ fontSize: "18px", fontWeight: "bolder" }}
                      >
                        Phone Number <b style={{ color: "#9D0208" }}>*</b>
                      </p>
                      <input
                        type="text"
                        className="form-control "
                        placeholder="Enter receiver number"
                        style={{ width: "90%", height: "50px" }}
                      />
                      <p
                        className="ps-4 text-start mb-0"
                        style={{ fontSize: "18px", fontWeight: "bolder" }}
                      >
                        Email address <b style={{ color: "#9D0208" }}>*</b>
                      </p>
                      <input
                        type="text"
                        className="form-control "
                        placeholder="Enter receiver email address"
                        style={{ width: "90%", height: "50px" }}
                      />
                      <Link to="/topupaccount">
                        <button className="button mt-3">Save</button>
                      </Link>
                    </center>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="btn btn-light pickup mt-3"
            data-bs-toggle="modal"
            data-bs-target="#exampleModals"
            style={{ fontWeight: "bold" }}
          >
            Delivery details
            <svg
              className="ms-5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clip-path="url(#clip0_2732_9007)">
                <path
                  d="M20.2666 11.7333C19.0665 10.4666 17.4666 9.59993 15.7999 9.26659C15.0666 9.0666 14.3332 8.93326 13.5999 8.8666C15.4665 6.6666 15.1332 3.33326 12.9332 1.4666C10.7332 -0.40007 7.39988 -0.0667371 5.53322 2.13326C3.66655 4.33326 3.99988 7.6666 6.19988 9.53326C6.59988 9.8666 6.99988 10.1333 7.39988 10.2666V11.7333L6.33322 10.7333C5.39988 9.79993 3.86655 9.79993 2.86655 10.7333C1.93322 11.6666 1.86655 13.1333 2.79988 14.0666L5.86655 17.6666C5.99988 18.5999 6.33322 19.4666 6.79988 20.2666C7.13322 20.8666 7.59988 21.4666 8.06655 21.9333V23.1999C8.06655 23.5999 8.33322 23.8666 8.73322 23.8666H17.7999C18.1332 23.8666 18.4666 23.5333 18.4666 23.1999V21.4666C19.7332 19.9333 20.3999 17.9999 20.3999 16.0666V12.1999C20.4666 11.9333 20.3999 11.7999 20.2666 11.7333ZM5.59988 5.4666C5.59988 3.2666 7.39988 1.53326 9.59988 1.59993C11.7999 1.59993 13.5332 3.39993 13.4666 5.59993C13.4666 6.79993 12.9332 7.8666 11.9999 8.59993V5.2666C11.9658 4.68884 11.7121 4.146 11.2906 3.74934C10.8692 3.35268 10.312 3.13226 9.73322 3.13326C8.53322 3.0666 7.46655 4.0666 7.46655 5.2666V8.73326C6.33322 8.0666 5.66655 6.79993 5.59988 5.4666ZM19.1332 15.9999C19.1999 17.7333 18.5999 19.3999 17.4666 20.7333C17.3332 20.8666 17.1999 20.9999 17.1999 21.1999V22.5999H9.46655V21.6666C9.46655 21.4666 9.33322 21.2666 9.19988 21.1333C8.73322 20.7333 8.33322 20.2666 7.99988 19.6666C7.59988 18.9999 7.33322 18.1999 7.19988 17.3999C7.19988 17.2666 7.13322 17.1333 7.06655 16.9999L3.86655 13.1999C3.66655 12.9999 3.53322 12.7333 3.53322 12.3999C3.53322 12.1333 3.66655 11.7999 3.86655 11.5999C4.33322 11.1999 4.99988 11.1999 5.46655 11.5999L7.39988 13.5333V15.5333L8.66655 14.8666V5.2666C8.73322 4.79993 9.13322 4.39993 9.66655 4.4666C10.1332 4.4666 10.5999 4.79993 10.5999 5.2666V12.9333L11.9332 13.1999V10.1333C11.9999 10.0666 12.0666 10.0666 12.1332 9.99993C12.5999 9.99993 13.0665 10.0666 13.5332 10.1333V13.5333L14.5999 13.7333V10.2666L15.3999 10.4666C15.7332 10.5333 16.0666 10.6666 16.3999 10.7999V14.1333L17.4666 14.3333V11.2666C18.0666 11.5333 18.5999 11.9333 19.0666 12.3999L19.1332 15.9999Z"
                  fill="#383838"
                />
              </g>
              <defs>
                <clipPath id="clip0_2732_9007">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>

          <div
            class="modal fade"
            id="exampleModals"
            tabindex="-1"
            aria-labelledby="exampleModalLabels"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabels">
                    Modal title
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <div>
                    <p
                      className="text-center mt-3"
                      style={{ fontWeight: "bold", fontSize: "20px" }}
                    >
                      Sender Details
                    </p>
                    <center>
                      <p
                        className="ps-4 text-start mb-0"
                        style={{ fontSize: "18px", fontWeight: "bolder" }}
                      >
                        Item Category <b style={{ color: "#9D0208" }}>*</b>
                      </p>
                      <input
                        type="text"
                        className="form-control "
                        placeholder="Pickup location"
                        style={{ width: "90%", height: "50px" }}
                      />
                      <p
                        className="ps-4 text-start mb-0"
                        style={{ fontSize: "18px", fontWeight: "bolder" }}
                      >
                        House/strt.number <b style={{ color: "#9D0208" }}>*</b>
                      </p>
                      <input
                        type="text"
                        className="form-control mt-2 strt-icon"
                        placeholder="E.g 52, Igbonia Street"
                        style={{ width: "90%", height: "50px" }}
                      />
                      <p
                        className="ps-4 text-start mb-0"
                        style={{ fontSize: "18px", fontWeight: "bolder" }}
                      >
                        Landmark <b style={{ color: "#9D0208" }}>*</b>
                      </p>
                      <input
                        type="text"
                        className="form-control mt-2"
                        placeholder="object/feature to identify location"
                        style={{ width: "90%", height: "50px" }}
                      />
                      <div className="address mt-3">
                        <p>
                          52, Igbonla street, Faith Bible Church, Akobo, Ibadan,
                          Oyo State
                        </p>
                      </div>
                      <p
                        className="ps-4 text-start mb-0"
                        style={{ fontSize: "18px", fontWeight: "bolder" }}
                      >
                        Full Name <b style={{ color: "#9D0208" }}>*</b>
                      </p>
                      <input
                        type="text"
                        className="form-control "
                        placeholder="Enter sender name"
                        style={{ width: "90%", height: "50px" }}
                      />
                      <p
                        className="ps-4 text-start mb-0"
                        style={{ fontSize: "18px", fontWeight: "bolder" }}
                      >
                        Phone Number <b style={{ color: "#9D0208" }}>*</b>
                      </p>
                      <input
                        type="text"
                        className="form-control "
                        placeholder="Enter sender number"
                        style={{ width: "90%", height: "50px" }}
                      />
                      <p
                        className="ps-4 text-start mb-0"
                        style={{ fontSize: "18px", fontWeight: "bolder" }}
                      >
                        Email address <b style={{ color: "#9D0208" }}>*</b>
                      </p>
                      <input
                        type="text"
                        className="form-control "
                        placeholder="Enter sender email address"
                        style={{ width: "90%", height: "50px" }}
                      />
                      <Link to="/receiver">
                        <button className="button mt-3">Save</button>
                      </Link>
                    </center>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </center>
        <p
          className="ps-2 mt-3"
          style={{ fontSize: "18px", fontWeight: "bolder" }}
        >
          Order Details <b style={{ color: "#9D0208" }}>*</b>
        </p>
        <center>
          <div class="input-group mb-3 box-radio rounded-1 d-flex align-items-center border gap-4 justify-content-start px-4 pb-3">
            <div class="mb-1">
              <input
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                class="form-check-input mt-0 "
                style={{ width: "25px", height: "25px" }}
                type="checkbox"
                value=""
                aria-label="Checkbox for following text input"
              />
              {/* button trigger modal */}

              <div
                className="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1
                        className="modal-title fs-5 text-center"
                        id="staticBackdropLabel"
                      >
                        Delivery Schedule
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      {/* <CustomCalendar /> */}
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" className="btn btn-primary">
                        Understood
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              {" "}
              <p className="text-secondary fs-5">
                Schedule delivery (Optional)
              </p>
            </div>
          </div>
          <div
            class="input-group mb-3 box-radio rounded-1 border d-flex align-items-center gap-4 "
            style={{ paddingLeft: "22px" }}
          >
            <div class="mb-1">
              <input
                class="form-check-input mt-0 "
                style={{ width: "25px", height: "25px" }}
                type="checkbox"
                value=""
                aria-label="Checkbox for following text input"
              />
            </div>
            <div className="pt-2">
              {" "}
              <p className="text-secondary fs-5">
                Two way delivery (Return Item)
              </p>
            </div>
          </div>
        </center>
      </div>
      <center>
        <Link to="/sender">
          <button className="button">Continue</button>
        </Link>
      </center>
      <div className="foot mt-5">
        <div className="d-flex justify-content-around">
          <div className="mt-5">
            <div className="d-flex">
              <div className="app-logo-2"></div>

              <div className="app-name text-white" style={{ fontSize: "20px" }}>
                Pepsa
              </div>
            </div>
            <p style={{ fontSize: "12px" }}>Shop,sell,deliver with Pepsa</p>
          </div>
          <div className="mt-2">
            <p style={{ fontWeight: "bold" }}>Sales</p>
            <p style={{ fontWeight: "bold" }}>Delivery</p>
            <p style={{ fontWeight: "bold" }}>Coporate</p>
            <p style={{ fontWeight: "bold" }}>Contact</p>
          </div>
          <div className="mt-2">
            <p style={{ fontWeight: "bold" }}>Referal</p>
            <p style={{ fontWeight: "bold" }}>Privacy Policy</p>
            <p style={{ fontWeight: "bold" }}>T&c Apply</p>
            <p style={{ fontWeight: "bold" }}>FAQs</p>{" "}
          </div>{" "}
        </div>{" "}
        <p className="text-center" style={{ fontWeight: "bold" }}>
          (C) 2023 Pepsa Tech. All rights reserved{" "}
        </p>
      </div>
    </div>
  );
}

export default Dispatch;
