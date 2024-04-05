const prompt = require('prompt-sync')();

// Print 1.4 - User Input to the console
console.log("1.4 - User Input");

// input year born
let yearBorn = prompt("What year were you born? ");
console.log(`You entered ${yearBorn}`);

// calculate the age here
let currentYear = 2024;
let age = currentYear - yearBorn;
console.log(`You are likely ${age} years old`);

// input your name
let name = prompt("What is your name? ");
console.log(`Hi, ${name}. You were born in ${yearBorn} and you are likely ${age} years old.`);

// output the amount of letter in name
console.log(`Your name is ${name.length} letters long.`);

// enter a temp in farenheit, then convert it ti celsius
let tempFahrenheit = prompt("Enter a temperature in Fahrenheit: ");
let tempCelsius = (tempFahrenheit - 32) * 5/9;
console.log(`${tempFahrenheit}F is equal to ${tempCelsius.toFixed(2)}C.`);

console.log("With prompt, you can collect any kind of input from the user, such as preferences, choices for a game, feedback on a service, and more.");