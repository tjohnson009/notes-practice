const sumAll = function(a, b) {
    if (a < 0 || b < 0) { //removes possibility of negative numbers in function
        return `ERROR`; 
    } else if (isNaN(a) || isNaN(b) || typeof a !== "number" || typeof b !== "number") { // forces function to only accept numbers
        return `ERROR`; 
    } else {
        let totalSum = 0; 
        let array = [a, b]; 
        array = array.sort((a, b) => a - b); // orders the numbers 
        for (let i = array[0]; i <= array[1]; i++) {
            totalSum+=i; 
        }
        return totalSum; 
    }
};

// Do not edit below this line
module.exports = sumAll;
