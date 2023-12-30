import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = ({ dataPoints }) => {
  return (
    <div className="chart">
      {dataPoints.map((ele) => {
        return <ChartBar key={ele.label} {...ele} maxValue={null} />;
      })}
    </div>
  );
};

export default Chart;
