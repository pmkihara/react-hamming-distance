import React from 'react';

class Input extends React.Component {
  maskInput = (value) => {
    const digits = value.match(/\d{1,5}/g)

    return digits === null ? '' : digits.join(' ');
  }

  handleInput = (event) => {
    const inputField = event.target;
    const value = event.target.value;

    inputField.value = this.maskInput(value);
  }

  render() {
    return (
      <textarea className="w-100" onChange={this.handleInput} />
    );
  }
}

export default Input;
