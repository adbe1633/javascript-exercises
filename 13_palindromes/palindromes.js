

const palindromes = function (str) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let cleanedString = str.toLowerCase().split('').filter((character) => alphanumerical.includes(character)).join('');
    let reverse = cleanedString.split('').reverse().join('');
    return reverse == cleanedString;

};

// Do not edit below this line
module.exports = palindromes;
