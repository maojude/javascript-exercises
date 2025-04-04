const leapYears = function(num) {
    let isLeapYear = false;

    let divisibleBy4 = num % 4 === 0;
    let divisibleBy400 = num % 400 === 0;
    let divisibleBy100 = num % 100 === 0;

    if(divisibleBy4 && (!divisibleBy100 || divisibleBy400)){
        isLeapYear = true;
    }

    return isLeapYear;
};

// Do not edit below this line
module.exports = leapYears;
