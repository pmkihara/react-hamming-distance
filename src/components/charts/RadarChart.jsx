import React from 'react';

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip
);

class RadarChart extends React.Component {
  // Chart.js options
  options = {
    responsive: true,
    backgroundColor: 'rgba(186, 60, 37, 0.5)',
    borderColor: 'rgb(186, 60, 37)',
    borderWidth: 1,
    scales: {
      r: {
        ticks: {
            precision: 0
        },
        pointLabels: {
          display: false
        }
      },
    },
    plugins: {
      title: {
        display: true,
        text: 'Radar Chart',
      },
    }
  };

  render() {
    return (
      <Radar datasetIdKey={this.props.datasetIdKey} options={this.options} data={this.props.data} />
    );
  }
}

export default RadarChart;
