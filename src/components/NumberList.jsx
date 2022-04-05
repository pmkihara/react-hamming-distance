import React from 'react';
import NumberRow from './NumberRow'

class NumberList extends React.Component {
  render() {
    return (
      <div className="col-12 col-md-5 grid-table">
        <div className="grid-row-3 grid-header">
          <span>First Number</span>
          <span>Second Number</span>
          <span>Hamming Distance</span>
        </div>
          {this.props.sets.map((set, index) =><NumberRow key={index} set={set}></NumberRow>)}
      </div>
    );
  }
}

export default NumberList;
