const findTheOldest = function(array) {
    let age = (yob, yod) => {
        if (!yod || yod == undefined) {
            yod = new Date().getFullYear(); 
        }
        return yod - yob; 
    }; 

    let oldestAge = array.map(person => {
        return age(person.yearOfBirth, person.yearOfDeath);  
    }).reduce((acc, age) => {
        if (age > acc) {
            acc = age; 
        }
        return acc; 
    }, 0); 

    let answer = array.filter(person => age(person.yearOfBirth, person.yearOfDeath) === oldestAge)[0]; 
    console.log(answer, typeof answer); 

    return answer;  


}; 


// Do not edit below this line
module.exports = findTheOldest;
