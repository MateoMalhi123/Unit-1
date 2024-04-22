// 1.6 Logical Operators
const prompt = require('prompt-sync')();

let choice = prompt("Would you like to play a game? [y]/n: ") || 'y';

if (choice !== "n" && choice !== "y") {
    console.log("THERE WAS AN ERROR!\nyou must input y or n to play.");
} 
else if (choice === "n") {
    console.log("okay i guess you don't want to play, you're missing out.");
} 
else {
    let firstNumber = parseInt(prompt("Enter a whole number: "));
    if (firstNumber > 10 && firstNumber < 50) {
        console.log("Input your next number, it must be above 50");
    }

    let secondNumber = parseInt(prompt("Enter a second whole number: "), 10);
    if (secondNumber % 2 == 0) {
        console.log("This number that you input should be a odd number");
    } 
    else {
        console.log("This number you input now must be an even number");
    }

    let thirdNumber = parseInt(prompt("Input a third whole number: "), 10);

    console.log("\nA set of three numbers is Squirrelly if their sum of all them with an added 1 is divisible by 10");
    if ((firstNumber + secondNumber + thirdNumber + 1) % 10 == 0) {
        console.log("The sum of your numbers is infact Squirrelly.");
    } 
    else {
        console.log("The sum of your numbers is infact not Squirrelly.");
    }

    console.log("\nA set of three numbers is considered Jazzy if MINIMUM two of the numbers are divisible by 3.");
    let jazzyCount = 0;
    if (firstNumber % 3 == 0) jazzyCount++;
    if (secondNumber % 3 == 0) jazzyCount++;
    if (thirdNumber % 3 == 0) jazzyCount++;

    if (jazzyCount >= 2) {
        console.log("Your numbers are infact Jazzy.");
    } 
    else {
        console.log("Your numbers are infact not Jazzy.");
    }