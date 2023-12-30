import React from "react";
import "./ChartBar.css";

const ChartBar = ({value,label,maxValue}) => {
  let barFillHeight = "0%"
  if(value>0){
    barFillHeight = Math.round((value/maxValue)*100)+'%';
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{height:barFillHeight}}></div>
      </div>
      <div className="chart-bar__label"></div>
    </div>
  );
};

export default ChartBar;
