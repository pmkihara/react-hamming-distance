import React from 'react';
import './stylesheets/App.scss';

// Component imports
import Input from './components/Input'
import NumberList from './components/NumberList'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numbers: [12345, 43423, 22132]
    }
  }

  prepareNumbers = (string) => {
    // Prepare numbers for the Hamming distance algorithm:
    // - Split the string from the input by the spaces added by the mask;
    // - Select only the strings with exactly 5 digits;
    // - Convert the strings to Integers;
    // -Sort the numbers in crescent order.
    const orderedNumbers = string.split(' ').filter(number => number.length === 5).map((number) => Number.parseInt(number)).sort()

    this.setState({
      numbers: orderedNumbers
    })
  }

  render() {
    return (
      <div className="App">
        <h1 className="text-center">Hamming Distance Calculator</h1>
        <div className="container p-5">
          <div className="text-start mb-5">
            <h3>Write your input here</h3>
            <Input></Input>
          </div>
          <div className="row">
              <NumberList numbers={this.state.numbers}></NumberList>
            <div className="col-12 col-md-8 col-lg-9">
              ksdfjhskdjhf
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
