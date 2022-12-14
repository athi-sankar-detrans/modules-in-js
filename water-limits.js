// const converters = require('./converters.js');



// const freezingPointF = converters.celciusToFahrenheit(0);
// const boilingPointF = converters.celciusToFahrenheit(100);
// const freezingPointC = converters.fahrenheitToCelsius(96.8);
// const boilingPointC = converters.fahrenheitToCelsius(36);
// console.log(`freezing point of water in fahrenheit ${freezingPointF}`);
// console.log(`boiling point of water in fahrenheit ${boilingPointF}`);

// console.log(`freezing point of water in celcius ${freezingPointC}`);
// console.log(`biling point of water in celcius ${boilingPointC}`);

//destructuring
const { celciusToFahrenheit , fahrenheitToCelsius } = require('./converters.js');

const freezingPointF = celciusToFahrenheit(0);
const boilingPointF = celciusToFahrenheit(100);

const freezingPointC = fahrenheitToCelsius(96.8);
const boilingPointC = fahrenheitToCelsius(36);

console.log(`${freezingPointC}`);



console.log(`${freezingPointF}`);



