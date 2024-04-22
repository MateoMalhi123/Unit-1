// Part 2 of 1.5
const prompt = require('prompt-sync')();

// user name
let userName = prompt("What is your name? ");
let age = parseInt(prompt(`Hello ${userName}, how old are you?`));

// Check age for driving eligibility
if (age >= 16) {
    console.log("You are old enough to drive. ");
}
else {
    console.log("You are not old enough to drive yet. ");
}

// display menu
console.log("1 - Play\n2 - Options\n3 - DLC\n4 - Check for Updates\n5 - Exit");

// menu selection 
let selection = parseInt(prompt("Hi " + user_name + ". Please make a selection "));

if (selection == 1) {
    console.log("Let's play!");
} 
else if (selection == 2) {
    console.log("You selected Options.");
} 
else if (selection == 3) {
    console.log("No new DLC at this time.");
} 
else if (selection == 4) {
    console.log("Everything is up to date.");
} 
else if (selection == 5) {
    console.log("Bye!");
} 
else {
    console.log("Invalid selection.");
}

// time of day greeting
let hour = parseInt(prompt("Enter an hour between 0-23: "));

if (hour >= 0 && hour <= 11) {
    console.log("Good morning!");
}
else if (hour >= 12 && hour <= 17) {
    console.log("Good afternoon!");
}
else if (hour >= 18 && hour <= 23) {
    console.log("Good evening!");
}
else {
    console.log("Invalid hour!");
}

