const convertToCelsius = function(num) {
  const celsius = (num - 32) * (5/9);
  return roundToOneDecimal(celsius);
};

const convertToFahrenheit = function(num) {
  const fahrenheit = (num * (9/5)) + 32;
  return roundToOneDecimal(fahrenheit);
};

function roundToOneDecimal(num){
  return Math.round(num * 10) / 10;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
