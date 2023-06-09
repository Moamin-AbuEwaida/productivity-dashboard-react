import React from "react";
import "./Body.scss";
import Top from "./topSection/Top";
import Bottom from "./bottomSection/Bottom";

const Body = () => {
  return (
    <div className="body">
      <Top />
      <Bottom />
    </div>
  );
};

export default Body;
