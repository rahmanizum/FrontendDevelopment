import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = ({ dataPoints }) => {
  let dataPointsValues = dataPoints.map((ele)=>{
    ele.value;
  })
  let totalMax = Math.max(...dataPointsValues)
  return (
    <div className="chart">
      {dataPoints.map((ele) => {
        return <ChartBar key={ele.label} {...ele} maxValue={totalMax} />;
      })}
    </div>
  );
};

export default Chart;
