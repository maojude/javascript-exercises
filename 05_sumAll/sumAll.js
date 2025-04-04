const sumAll = function(num1, num2) {

    //check if both numbers are positive integers
    //if not return 'ERROR'
    if(typeof num1 !== 'number' || typeof num2 !== 'number' || num1 < 0 || num2 < 0
        || !Number.isInteger(num1) || !Number.isInteger(num2)){
        return 'ERROR';
        }
    
    let sum = 0;
    //Find min and max of the two numbers
    //This will be used as the range for the loop
    const min = Math.min(num1, num2);
    const max = Math.max(num1, num2);

    //Loop from min to max and add each number to sum
    for(let i = min; i <= max; i++){
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
