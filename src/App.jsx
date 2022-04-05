import React from 'react';
import './stylesheets/App.scss';

// Component imports
import Banner from './components/Banner';
import Charts from './components/Charts';
import NumberList from './components/NumberList';

// Function imports
import hammingDistance from './hamming_distance';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numbers: [],
      pairsWithDistance: []
    };
  }

  pairNumbers = (orderedNumbers) => {
    // Prepare the pairs of numbers to calculate the Hamming distance
    const numberPairs = [];
    orderedNumbers.forEach((number, index) => {
      if(number !== orderedNumbers[0]) {
        numberPairs.push([orderedNumbers[index - 1], number, hammingDistance([orderedNumbers[index - 1], number])])
      }
    })
    return numberPairs
  }

  prepareNumbers = (string) => {
    // - Split the string from the input by the spaces added by the mask;
    // - Select only the strings with exactly 5 digits;
    // - Sort the numbers
    const orderedNumbers = string.split(' ').filter(number => number.length === 5).sort()

    // Sets the newly formed pairs as the numbers state if a new pair has been created
    if(orderedNumbers[1] && orderedNumbers.toString() !== this.state.numbers.toString()) {
      const numberPairs = this.pairNumbers(orderedNumbers);
      this.setState({
        numbers: orderedNumbers,
        pairsWithDistance: numberPairs
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Banner title="Hamming Distance Calculator" numbersFunction={this.prepareNumbers}></Banner>
        <div className="container p-5">
          <div className="row">
            <NumberList sets={this.state.pairsWithDistance}></NumberList>
            <Charts sets={this.state.pairsWithDistance}></Charts>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
