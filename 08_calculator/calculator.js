const add = function(num1,num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
  let output = 0;
  for(num of array){
    output += num;
  }
  return output;
};

const multiply = function(array) {
  if(array.length == 0) return 0;
  let output = 1;
  for(num of array){
    output *= num;
  }
  return output;
};

const power = function(num, power) {
  let output = num;
  for(let i = 0; i < power-1; i++){
    output *= num;
  }

  return output;
};

const factorial = function(num) {
	if(num === 0) return 1;
  let output = 1;
  for(let i = 1; i <= num; i++){
    output *= i;
  }
  return output;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
