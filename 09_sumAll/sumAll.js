const sumAll = function(a, b) {
    if(!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0) return "ERROR";
    
    let max;
     let min;
    if(a > b){
        max = a;
        min = b;
    }
    else{
        max = b;
        min = a;
    }

    sum = 0;
    for(let i = min; i <= max; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
