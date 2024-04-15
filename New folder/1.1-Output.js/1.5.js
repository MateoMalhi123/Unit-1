
const prompt = require('prompt-sync')();

// user age
let age = parseInt(prompt("How old are you? "));

// 50 years or older
if (age >= 50) {
    console.log("You qualify for the senior discount! ");
} 
else if (age < 16) {
    // younger than 16
    console.log("You're not old enough to drive yet.");
}
// user name
let userName = prompt("What is your name? ");

if (userName === "Mr. J") {
    console.log("🐠"); 
} 
else if (userName.length > 7) {
    console.log("You have a long name.");
}

// how long is name
let nameLength = parseInt(prompt("How many characters are in your name? "));

// checks length
if (nameLength === userName.length) {
    console.log("That's correct! ✔️");
} 
else if (nameLength > userName.length) {
    console.log("Too high ✖️");
} 
else {
    console.log("Too low ✖️");
}

