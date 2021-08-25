var gimme = function (inputArray) {

  let sortedCopy = inputArray.slice().sort((a, b) => a - b); 
  return inputArray.indexOf(sortedCopy[1]); 

};