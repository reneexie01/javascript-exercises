const fibonacci = function(num) {
    if (num == 0 || num == null) {
        return 0;
    } else if (num < 0) {
        return 'OOPS';
    } else {
        let n1 = 0;
        let n2 = 1;
        let n3;
        let array = [];
    for (let i = 0; i <= num; i++) {
        n3 = n1 + n2;
        n1 = n2;
        n2 = n3;
        array.push(n1);
    }
    return array[num - 1];
    }
};

// Do not edit below this line
module.exports = fibonacci;
