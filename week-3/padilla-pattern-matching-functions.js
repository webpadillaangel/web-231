/*
============================================
; Title:  padilla-pattern-matching-functions.js
; Author: Angel Padilla
; Date:   12 Dec 2019
; Modified By:
; Description: Create function to test 2 values by using if statements. Create multiple functions that return a string response.
;===========================================
*/

// Importing padilla-header file
var header = require("../padilla-header");

// six local test variables
var boolTrue = true;
var boolFalse = false;
var auto1 = "Truck";
var auto2 = "Car";
var nonAuto1 = "Bike";
var nonAuto2 = "Bike";
var firstNumber = "Four";
var secondNumber = "Three";

console.log(header.display("Angel", "Padilla", "Exercise 3.2"));

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

console.log("\n");

console.log(match("A", "B"));
console.log(match(2, 2));

console.log("\n");

// checking if the match() returns strictly true and if so, return the result of the logMatch() if not return the result of logMismatch()
if (match(boolTrue, boolFalse) === true) {
  logMatch(boolTrue, boolFalse);
} else {
  logMismatch(boolTrue, boolFalse);
}

// checking if the match() returns strictly true and if so, return the result of the logMatch() if not return the result of logMismatch()
if (match(auto1, auto2) === true) {
  logMatch(auto1, auto2);
} else {
  logMismatch(auto1, auto2);
}

// checking if the match() returns strictly true and if so, return the result of the logMatch() if not return the result of logMismatch()
if (match(nonAuto1, nonAuto2) === true) {
  logMatch(nonAuto1, nonAuto2);
} else {
  logMismatch(nonAuto1, nonAuto2);
}

// checking if the match() returns strictly true and if so, return the result of the logMatch() if not return the result of logMismatch()
if (match(firstNumber, secondNumber) === true) {
  logMatch(firstNumber, secondNumber);
} else {
  logMismatch(firstNumber, secondNumber);
}

// output - From testing all six variables
/*
Angel Padilla
Exercise 3.2
Date: 12/13/2019


false
true


true and false do not match!
Truck and Car do not match!
Bike and Bike do match!
Four and Three do not match!
*/
