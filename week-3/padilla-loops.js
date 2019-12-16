/*
============================================
; Title:  padilla-loops.js
; Author: Angel Padilla
; Date:   15 Dec 2019
; Modified By:
; Description: Program designed to iterate ten times and compare number two numbers, one of which is declared and the other is random.
;              - Practicing looping.
;===========================================
*/

// Importing padilla-header file
var header = require("../padilla-header");

// logging header info
console.log(header.display("Angel", "Padilla", "Exercise 3.4"));

// variable declaration between 1-10
var numberChosen = 5;

// functions from exercise 3.2
// match() has two parameters. Return true if item1 is strictly equal (both type and value) to item2, if not then return false.
function match(arg1, arg2) {
  if (arg1 === arg2) return true;
  else return false;
}

// logMismatch() has two parameters, the function returns a string containing both parameters saying the items don't match.
function logMismatch(arg1, arg2) {
  return console.log(arg1 + " and " + arg2 + " do not match!");
}

// logMatch() has two parameters, the function returns a string containing both parameters saying the items do match.
function logMatch(arg1, arg2) {
  return console.log(arg1 + " and " + arg2 + " do match!");
}

/**
 * Params: n/a
 * Response: integer value
 * Description: Returns a random integer value
 * Disclaimer: Do not remove this function as this is what you will be using to generate a random number
 */
function randomNumber() {
  return Math.floor(Math.random() * 10 + 1);
}

console.log("\n-- DO THE NUMBERS MATCH GAME --\n")

// iterating 10 times seeing if myChosenNumber variable matches the randomNumber variable inside the for loop
for (let index = 0; index < 10; index++) {
  const generatedNumber = randomNumber();

  if (match(numberChosen, generatedNumber)) {
    logMatch(numberChosen, generatedNumber);
  } else {
    logMismatch(numberChosen, generatedNumber);
  }
}

// output - results may vary due to the random number
/*
Angel Padilla
Exercise 3.4
Date: 12/15/2019

-- DO THE NUMBERS MATCH GAME --

5 and 10 do not match!
5 and 2 do not match!
5 and 3 do not match!
5 and 10 do not match!
5 and 5 do match!
5 and 8 do not match!
5 and 3 do not match!
5 and 10 do not match!
5 and 8 do not match!
5 and 7 do not match!

*/
