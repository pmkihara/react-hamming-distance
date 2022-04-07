import React from 'react';
import BarChart from './charts/BarChart';
import RadarChart from './charts/RadarChart';

class Charts extends React.Component {
  // Prepare data for Chart.js
  prepareData = (sets) => {
    return {
      labels: sets.map(set => `${set[0]}-${set[1]}`),
      datasets: [
        {
          data: sets.map(set => set[2]),

        }
      ]
    }
  };

  render() {
    const chartData = this.prepareData(this.props.sets);
    return (
      <div className="col-12 col-md-7">
        <BarChart datasetIdKey={this.props.sets} data={chartData}></BarChart>
        <RadarChart datasetIdKey={this.props.sets} data={chartData}></RadarChart>
      </div>
    );
  }
}

export default Charts;
