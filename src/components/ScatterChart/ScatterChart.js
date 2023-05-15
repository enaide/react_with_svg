import React, { useRef, useEffect, useContext } from "react";
import Chart from "chart.js/auto";

import ChartContext from "../store/chart-context";
import {
  bubbles,
  months,
  srand,
  transparentize,
  CHART_COLORS,
} from "../Utils/utils";

let graph;

const DATA_COUNT = 7;
const NUMBER_CFG = { count: DATA_COUNT, rmin: 1, rmax: 1, min: 0, max: 100 };

const ScatterChart = () => {
  const amountCtx = useContext(ChartContext);
  const chartRef = useRef();
  const generateData = () => bubbles(NUMBER_CFG);

  srand(42);
  useEffect(() => {
    chartRef.current.style.height = "300px";
    const ctx = chartRef.current.getContext("2d");
    const labels = months({ count: 7 });
    const data = {
      labels,
      datasets: [
        {
          label: "Total",
          data: generateData(),
          borderColor: "#3e95cd",
          backgroundColor: transparentize(CHART_COLORS.red),
        },
        {
          label: "Accepted",
          data: generateData(),
          borderColor: "#3cba9f",
          backgroundColor: "#71d1bd",
        },
        {
          label: "Pending",
          data: generateData(),
          borderColor: "#ffa500",
          backgroundColor: "#ffc04d",
        },
        {
          label: "Rejected",
          data: generateData(),
          borderColor: "#c45850",
          backgroundColor: "#d78f89",
        },
      ],
    };
    const config = {
      type: "scatter",
      data,
      options: {
        maintainAspectRatio: false,
      },
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Chart.js Scatter Chart",
        },
      },
    };

    if (graph === undefined || graph === null) {
      graph = new Chart(ctx, config);
    } else {
      graph.destroy();
      graph = new Chart(ctx, config);
    }
  }, [amountCtx.amount]);

  return (
    <div style={{marginTop:'30px'}}>
      <canvas id="myScatterChart" ref={chartRef} />
    </div>
  );
};

export default ScatterChart;
