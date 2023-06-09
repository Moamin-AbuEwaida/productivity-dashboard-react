import React from "react";
import "./Sidebar.scss";
import Logo from "../../assets/Logo.png";
import { AiOutlinePieChart } from "react-icons/ai";
import { BsCalendarDate, BsFolderSymlink, BsChatDots } from "react-icons/bs";
import { FiBatteryCharging } from "react-icons/fi";
import { GiComputerFan } from "react-icons/gi";
import { GoSettings } from "react-icons/go";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logoDiv flex">
        <img src={Logo} alt="Logo Image" />
      </div>
      <div className="menu">
        <ul className="navItem">
          <li className="navList">
            <AiOutlinePieChart className="icon" />
          </li>
          <li className="navList">
            <BsCalendarDate className="icon" />
          </li>
          <li className="navList">
            <BsFolderSymlink className="icon" />
          </li>
          <li className="navList">
            <FiBatteryCharging className="icon" />
          </li>
          <li className="navList">
            <BsChatDots className="icon" />
          </li>

          <li className="navList">
            <GiComputerFan className="icon" />
          </li>
          <li className="navList">
            <GoSettings className="icon" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
