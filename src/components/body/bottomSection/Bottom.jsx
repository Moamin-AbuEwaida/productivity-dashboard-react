import React, { useState } from "react";
import "./Bottom.scss";
import Chart from "react-apexcharts";
import Laptop from "../../../assets/Laptop.png";
import Illustrator from "../../../assets/Illustrator.png";
import Penta from "../../../assets/Penta.png";

const Bottom = () => {
  const [state, setState] = useState({
    options: {
      colors: ["#01565b", "#5aba8a"],
      chart: {
        id: "basic-bar",
        toolbar: {
          show: true,
          tools: {
            selection: false,
            zoom: false,
            zoomin: false,
            zoomout: false,
            pan: false,
            reset: true,
            customIcons: [],
          },
        },
      },
      xaxis: {
        categories: ["Sun", "Mon", "Tue", "Web", "Thu", "Fri", "Sat"],
      },
    },
    series: [
      {
        name: "Updates",
        data: [25, 33, 13, 89, 34, 20, 30],
      },
      {
        name: "New Tasks",
        data: [70, 47, 72, 45, 12, 59, 38],
      },
    ],
  });
  return (
    <div className="bottom">
      <div className="graphDiv">
        <span className="title">All Activities (Graphical View)</span>
        <Chart
          options={state.options}
          series={state.series}
          type="area"
          width="500"
        />
      </div>
      <div className="scheduleDiv">
        <span className="title">Upcoiming Schedule</span>
        <div className="singleTask flex">
          <div className="imgDiv flex">
            <img src={Laptop} alt="Task Image" />
          </div>
          <div className="taskInfo">
            <span className="task">Desk Time Redesign</span>
            <span className="status">Working On</span>
          </div>
          <span className="time">09:30 AM</span>
        </div>
        <div className="singleTask flex">
          <div className="imgDiv flex">
            <img src={Laptop} alt="Task Image" />
          </div>
          <div className="taskInfo">
            <span className="task">New Landing page </span>
            <span className="status">Working On</span>
          </div>
          <span className="time">10:30 AM</span>
        </div>
        <div className="singleTask flex">
          <div className="imgDiv flex">
            <img src={Penta} alt="Task Image" />
          </div>
          <div className="taskInfo">
            <span className="task">Create Animation</span>
            <span className="status">Working On</span>
          </div>
          <span className="time">11:50 AM</span>
        </div>
        <div className="btn">See All Activites</div>
      </div>
    </div>
  );
};

export default Bottom;
