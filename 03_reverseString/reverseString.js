const reverseString = function(string) {
    let output = '';
    for(let i = string.length; i > 0; i++){
        output += string.charAt(i -1);
    }

    return output;
};

// Do not edit below this line
module.exports = reverseString;
