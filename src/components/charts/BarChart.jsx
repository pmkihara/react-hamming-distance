import React from 'react';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip
);

class BarChart extends React.Component {
  // Chart.js options
  options = {
    responsive: true,
    backgroundColor: 'rgba(186, 60, 37, 0.5)',
    borderColor: 'rgb(186, 60, 37)',
    borderWidth: 1,
    scales: {
      y: {
        ticks: {
            precision: 0
        }
      },
      x: {
        display: false
      }
    }
  };

  render() {
    return (
      <Bar datasetIdKey={this.props.datasetIdKey} options={this.options} data={this.props.data} />
    );
  }
}

export default BarChart;
