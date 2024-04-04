const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((total, index) => (total + index), 0);
};

const multiply = function(arr) {
  return arr.reduce((total, index) => (total * index), 1);
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(a) {
  let result = 1;
  for (let i = a; i > 1; i--) {
    if (a == 0 || a == 1) {
      return 1;
    } else {
      result *= i
    }
  }
  return result;
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
