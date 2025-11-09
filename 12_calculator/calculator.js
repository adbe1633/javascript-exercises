const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	let sum = 0;
  arr.forEach(element => {
    sum += element;
  });
  return sum;
};

const multiply = function(arr) {
  let product = 1;
  arr.forEach(element => {
    product = product * element;
  });
  return product;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
  if (a == 0) return 1;

	product = a;
  for(let i = a - 1; i > 0; i--){
    product = product * i;
  };
  return product;
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
