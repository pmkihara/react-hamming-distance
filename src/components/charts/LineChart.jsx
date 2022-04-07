import React from 'react';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
);

class LineChart extends React.Component {
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
    },
    plugins: {
      title: {
        display: true,
        text: 'Line Chart',
      },
    }
  };

  render() {
    return (
      <Line datasetIdKey={this.props.datasetIdKey} options={this.options} data={this.props.data} />
    );
  }
}

export default LineChart;
