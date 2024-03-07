let text = '';
const repeatString = function(str, n) {
    if (n < 0) {
        return 'ERROR';
    }
    for (let i = 0; i < n; i++) {
        text += str;
    }
    return text;
};

// Do not edit below this line
module.exports = repeatString;
