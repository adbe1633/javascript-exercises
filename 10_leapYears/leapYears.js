const leapYears = function(year) {
    // leapYear if 
    // year divisible by 4
    // AND
    // year not divisible by 100 OR divisible by 400

    return (year % 4 == 0) && (year % 100 != 0 || (year % 400 == 0 ));
};

// Do not edit below this line
module.exports = leapYears;
