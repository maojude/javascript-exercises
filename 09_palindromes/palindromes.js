const palindromes = function (string) {

    // turn string into array of characters
    const stringArray = string.split('');

    // create a new array to hold filtered characters
    const filteredArray = stringArray.filter((char) => {
        
        if(!(char === ' ' || char === '.' || char === ',' || char === '!' 
            || char === '?' || char === ':' || char === ';' || char === '-' || char === '_'
            || char === '(' || char === ')' || char === '[' || char === ']' || char === '{' || char === '}'))
            return true;
    
    });


    // create a new array to hold lower case characters
    const lowerCaseArray = filteredArray.map((char) => {
        if(typeof char === 'number') return char;
        else return char.toLowerCase();
    });

   const finalArray = lowerCaseArray.join('');
    
    // check if the filtered array is a palindrome
    // compare the filtered array with its reverse
    const reversedArray = lowerCaseArray.slice().reverse().join('');
    
    return finalArray === reversedArray ? true : false;
    
};

// Do not edit below this line
module.exports = palindromes;
