const convertToCelsius = function (tempInFahrenheit) {
    const celsius = Number((((tempInFahrenheit - 32) * 5) / 9).toFixed(1));
    return celsius;
};

const convertToFahrenheit = function (tempInCelsius) {
    const fahrenheit = Number(((tempInCelsius * 9) / 5 + 32).toFixed(1));
    return fahrenheit;
};

// Do not edit below this line
module.exports = {
    convertToCelsius,
    convertToFahrenheit,
};
