const repeatString = function(string, num) {
    if (num < 0) {
        return 'ERROR';
    } else {
        let newString = ''; 
        for (let i = 0; i < num; i++) {
            for (const letter of string) {
                newString = newString.concat(letter); 
            }
        }
        return newString; 
    }
};

// Do not edit below this line
module.exports = repeatString;
