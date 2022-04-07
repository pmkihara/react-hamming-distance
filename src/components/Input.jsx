import React from 'react';

class Input extends React.Component {
  handleInput = (event) => {
    const inputField = event.target;
    const value = event.target.value;
    const caretPosition = inputField.selectionStart;

    const maskedValue = this.maskInput(value, inputField);
    this.setCaretPosition(caretPosition, value, inputField);

    // Prepare the numbers for pairing and Hamming distance calculation
    const orderedNumbers = maskedValue.split(' ').filter(number => number.length === 5).sort()
    // Sends the masked number to the App component
    this.props.numbersFunction(orderedNumbers)
  }

  setCaretPosition = (caretPosition, value, inputField) => {
    // Sets the caret position to where it was before the mask unless the carat
    // is already in the last position
    if(caretPosition !== value.length) {
      inputField.setSelectionRange(caretPosition, caretPosition);
    }
  }

  maskInput = (value, inputField) => {
    // Allow only digits and adds the space each 5 digits
    const digits = value.replace(/\s/g, '').match(/\d{1,5}/g)
    const maskedValue = digits === null ? '' : digits.join(' ');

    // Apply mask to the input
    inputField.value = maskedValue;

    return maskedValue
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
