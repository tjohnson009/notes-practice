const palindromes = function (str) {
    let modified = str.split(' ').join('').toLowerCase(); 
    let regex = /[^a-zA-Z0-9]+/g; 
  
    modified = modified.replaceAll(regex, '')
    console.log(modified); 
  
    if (modified === modified.split('').reverse().join('')) {
      return true; 
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
