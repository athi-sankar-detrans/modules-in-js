import { celciusToFahrenheit, fahrenheitToCelsius } from "./converters.js";
import { milliToCenti , CentiToMeter } from "./converters.js";
import nano from './converters.js';

const buttonelement = document.getElementById('button');
buttonelement.addEventListener('click', clickMe);


function clickMe(){
    let element = document.getElementById('container');
    element.innerHTML = `<h1> Boiling point is ${celciusToFahrenheit(100)} & freezing point is : ${celciusToFahrenheit(0)}</h1> 
    <h1> human body temperature of 96.5 f is celcius is ${fahrenheitToCelsius(95)} </h1>
    <h1> 100millimeters is ${milliToCenti(100)} centimeters , </h1>
    <h1> 10000 centimeters is ${CentiToMeter(10000)} meters, </h1>
    <h1> One nanometer is ${nano} meters`
}

console.log(`Boiling point is ${fahrenheitToCelsius(100)} degree`);

console.log(` human body temperature of 96.5 f i celcius is ${fahrenheitToCelsius(95)}`);







