import React from 'react';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';

const LineChart = ({ monthData }) => {
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        max: 100,
        min: 20,
      },
    },

    interaction: {
      mode: 'nearest',
    },
  };
  return <Line data={monthData} options={options} />;
};

export default LineChart;
