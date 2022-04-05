import React from 'react';

class NumberList extends React.Component {
  render() {
    return (
      <div className="col-12 col-md-4 col-lg-3 grid-3">
        <div className="grid-row">
          <span>First Number</span>
          <span>Second Number</span>
          <span>Hamming Distance</span>
        </div>
          {this.props.numbers}
      </div>
    );
  }
}

export default NumberList;
