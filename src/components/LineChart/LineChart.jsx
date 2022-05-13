import React from 'react';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';

Chart.defaults.borderColor = '#000';
Chart.defaults.color = '#000';
Chart.defaults.elements.line.stepped = false;
Chart.defaults.elements.line.fill = false;
Chart.defaults.elements.line.cubicInterpolationMode = 'monotone';
Chart.defaults.layout.autoPadding = true;
Chart.defaults.plugins.tooltip.titleFont.weight = 'bold';
Chart.defaults.plugins.tooltip.padding = 10;
Chart.defaults.plugins.tooltip.boxPadding = 5;
Chart.defaults.plugins.tooltip.bodyColor = 'white';
Chart.defaults.plugins.tooltip.bodySpacing = 4;

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
