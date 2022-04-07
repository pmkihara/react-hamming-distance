import React from 'react';

class NumberRow extends React.Component {
  render() {
    return (
      <div className="grid-row-3 grid-body">
        <span>{this.props.set[0]}</span>
        <span>{this.props.set[1]}</span>
        <span><strong>{this.props.set[2]}</strong></span>
      </div>
    );
  }
}

export default NumberRow;
