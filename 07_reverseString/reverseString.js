const reverseString = function(text) {
    let final = ""
    for(let i = text.length - 1; i >= 0; i--){
        final += text[i]
    }
    return final
};

// Do not edit below this line
module.exports = reverseString;
