const fibonacci = function(num) {
    if(num < 0) return "OOPS";

    if (num == 0) return 0; 
    if (num == 1) return 1;

    sum = fibonacci(num - 1) + fibonacci(num - 2);
    return sum;
};

// Do not edit below this line
module.exports = fibonacci;
