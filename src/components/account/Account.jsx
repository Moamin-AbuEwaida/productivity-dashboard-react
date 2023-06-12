import React from "react";
import "./Account.scss";
import { BiChevronRight, BiEdit } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import User from "../../assets/User.png";
const Account = () => {
  return (
    <div className="account">
      <div className="icons flex">
        <BiChevronRight className="icon" />
        <BsThreeDots className="icon" />
      </div>
      <div className="accountDetails">
        <div className="imageDiv">
          <img src={User} alt="account img" />
          <span className="name">Jack Nelson</span>
          <span className="position">Private Sector Employee</span>
          <button className="btn flex">
            <BiEdit className="icon" />
            Edit Profile
          </button>
        </div>
        <div className="hoursDiv">
          <span className="title">Working Hours</span>
          <div className="hoursCard flex">
            <div className="right bg">
              <span>Work Starts</span>
              <h6>09:00 am</h6>
            </div>
            <div className="left noBg">
              <span>Work Ends</span>
              <h6>05:00 pm</h6>
            </div>
          </div>
        </div>
        <h1 className="city">Ntugamo City</h1>
        <span className="region">Westren Uganda, GMT+8</span>
      </div>
    </div>
  );
};

export default Account;
