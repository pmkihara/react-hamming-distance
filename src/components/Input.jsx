import React from 'react';

class Input extends React.Component {
  maskInput = (value) => {
    const digits = value.match(/\d{1,5}/g)

    return digits === null ? '' : digits.join(' ');
  }

  handleInput = (event) => {
    const inputField = event.target;
    const value = event.target.value;
    const maskedValue = this.maskInput(value)

    inputField.value = maskedValue;

    this.props.numbersFunction(maskedValue)
  }

  render() {
    return (
      <div className="input">
        <textarea className="banner-input" placeholder="Input your numbers" onChange={this.handleInput} />
      </div>
    );
  }
}

export default Input;
