const sumAll = function(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number" && num1 > 0 && num2 > 0) {
        let finalSum = 0;
        if (num1 < num2) {
            for (let i = num1; i < num2 + 1; i++) {
                finalSum += i;
            } 
            return finalSum;
        } else if (num2 < num1) {
            for (let i = num2; i < num1 + 1; i++) {
                finalSum += i;
            }
            return finalSum;
        }
    } else {
        return "ERROR"
    }
};

// Do not edit below this line
module.exports = sumAll;
