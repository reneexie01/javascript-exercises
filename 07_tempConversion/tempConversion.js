const convertToCelsius = function(F) {
    const formula = (F - 32) * (5/9);
    const twoDecimal = formula.toFixed(1);
    const cel = Number(twoDecimal);
    return cel;
};

const convertToFahrenheit = function(C) {
    const formula = (C * (9/5) + 32);
    const twoDecimal = formula.toFixed(1);
    const fah = Number(twoDecimal);
    return fah;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
