import React, { useRef, useEffect, useContext } from "react";
import Chart from "chart.js/auto";

import ChartContext from "../store/chart-context";

import {numbers, srand, transparentize, CHART_COLORS} from '../Utils/utils';

const inputs = {
  min: 20,
  max: 80,
  count: 7,
  decimals: 2,
  continuity: 1
};

let graph;

const LineChart = () => {
  const amountCtx = useContext(ChartContext);
  const chartRef = useRef();

  useEffect(() => {
    chartRef.current.style.height = "300px";
    const ctx = chartRef.current.getContext("2d");

    srand(42);
    const generateData = () => (numbers(inputs));    
    const labels = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",  "Friday", "Saturday"];
    const data = {
      labels,
      datasets: [
        {
          data: generateData(),
          label: "Total",
          borderColor: "#3e95cd",
          backgroundColor: transparentize(CHART_COLORS.red),
          fill: false,
          tension: 0.4,
        },
        {
          data: generateData(),
          label: "Accepted",
          borderColor: "#3cba9f",
          backgroundColor: "#71d1bd",
          fill: false,
          tension: 0.4
        },
        {
          data: generateData(),
          label: "Pending",
          borderColor: "#ffa500",
          backgroundColor: "#ffc04d",
          fill: false,
          tension: 0.4
        },
        {
          data: generateData(),
          label: "Rejected",
          borderColor: "#c45850",
          backgroundColor: "#d78f89",
          fill: false,
          tension: 0.4
        },
      ],
    };
    const config = {
      type: "line",
      data,
      options: {
        maintainAspectRatio: false,
      },
    }    

    if (graph === undefined || graph === null) {
      graph = new Chart(ctx, config);
    } else {
      graph.destroy();
      graph = new Chart(ctx, config);
    }
    
  }, [amountCtx.amount]);

  return (
    <div> <canvas id="myLinearChart" ref={chartRef} /></div>
  );
};

export default LineChart;
