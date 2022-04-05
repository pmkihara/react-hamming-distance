const hammingDistance = (pair) => {
  const firstNumber = pair[0];
  const secondNumber = pair[1];
  let distance = 0;

  for (let index = 0; index < firstNumber.length; index += 1) {
    if(firstNumber[index] !== secondNumber[index]) {
      distance += 1;
    }
  }
  return distance;
}

export default hammingDistance;
