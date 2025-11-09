const repeatString = function (text, num) {
    if (num < 0)
        return "ERROR";

    let str = '';
    for (i = 0; i < num; i++) {
        str += text;
    };
    return str;


};

// Do not edit below this line
module.exports = repeatString;
