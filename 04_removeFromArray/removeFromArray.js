const removeFromArray = function(array, ...argsToRemove) {
    const outputArray = [];

    for(value of array){
        if(!argsToRemove.includes(value)){
            outputArray.push(value);
        }
    }

    return outputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
