const reverseString = function(str) {
    let splitStr = str.split("");
    let reversal = splitStr.reverse();
    let reversedStr = reversal.join("");
    return reversedStr;
};

// Do not edit below this line
module.exports = reverseString;
