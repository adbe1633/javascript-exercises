


const removeFromArray = function(list, ...theArgs) {
    let newArray = [];
    for(let i = 0; i < list.length; i++){
        if (!theArgs.includes(list[i])){
            newArray.push(list[i])
        }
    
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
