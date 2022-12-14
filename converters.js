// function celciusToFahrenheit(celsius) {
//     return celsius * (9 / 5) + 32;
// }

// module.exports.celciusToFahrenheit = celciusToFahrenheit;

// module.exports.fahrenheitToCelsius = function (fahrenheit) {
//     return (fahrenheit - 32) * (5 / 9);
// }


export function celciusToFahrenheit(celsius) {
    return celsius * (9 / 5) + 32;
}

export const fahrenheitToCelsius = function (fahrenheit) {
    return (fahrenheit - 32) * (5 / 9);
}


// export { celciusToFahrenheit, fahrenheitToCelsius };

export const milliToCenti = (millimeter) =>{
    return millimeter / 10;
}

export const CentiToMeter = (centimeter) =>{
    return centimeter * 100;
}

 const nanoMeter = 0.0000000001;

 export default nanoMeter;
 // exporting nanometer variable as default







