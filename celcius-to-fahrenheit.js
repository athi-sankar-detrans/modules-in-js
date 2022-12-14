function celciusToFahrenheit(celsius) {
    return celsius * (9 / 5) + 32;
}


const celsiusInput = process.argv[2];
const fahrenheitValue = celciusToFahrenheit(celsiusInput);

console.log(`${celsiusInput} degrees celsius = ${fahrenheitValue} degrees Fahrenheit`);