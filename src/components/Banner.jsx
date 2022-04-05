import React from 'react';
import Input from './Input'

class Banner extends React.Component {
  render() {
    return (
      <div className="banner text-center w-100">
        <h1>{this.props.title}</h1>
          <Input numbersFunction={this.props.numbersFunction}></Input>
      </div>
    );
  }
}

export default Banner;
