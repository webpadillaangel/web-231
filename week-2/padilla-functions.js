// Importing padilla-header file
var header = require("./padilla-header.js");

/*
============================================
; Title:  padilla-function-properties.js
; Author: Angel Padilla
; Date:   08 Dec 2019
; Modified By:
; Description: Creating function properties and calling them to then output the result
;===========================================
*/

// Declaring variables to test in the functions below.
// For date values I am separating the date into parts so its dynamic to the actual date.
var firstName = "Angel";
var lastName = "Padilla";
var number = 23.12;
var numberOfFixedPositions = "1";
var date = new Date();
var todayDay = date.getDate();
var todayMonth = date.getMonth();
var todayYear = date.getFullYear();
var stringAgeNumber = "30";
var stringSavingsFloat = "99999.99";
var exercise = "Assignment 2.4";

/**
 * Params: firstName and lastName;
 * Response: concatenation of firstName and lastName;
 * Description: returns the firstName and lastName in one string;
 */
function myName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

/**
 * Params: todayYear, todayMonth, todayDay;
 * Response: taking each of the "date" params and assigning the formatted string to a variable;
 * Description: returns the function dateString variable;
 */
function dateWriter(todayYear, todayMonth, todayDay) {
  let dateString = `${todayYear}/${todayMonth}/${todayDay}`;
  return dateString;
}

/**
 * Params: number, numOfFixedPositions;
 * Response: a number value with the specified position the decimal should be at;
 * Description: returns a fixed decimal value with a specified fixed position;
 */
function formatNumber(number, numOfFixedPositions) {
  return number.toFixed(numOfFixedPositions);
}

/**
 * Params: stringNumber;
 * Response: converts a string number value to a number;
 * Description: returns a number;
 */
function convertToInt(stringNumber) {
  return parseInt(stringNumber);
}

/**
 * Params: stringSavingsFloat;
 * Response: converts a string float value to a true float;
 * Description: returns a float number from a string float;
 */
function convertToFloat(stringSavingsFloat) {
  return parseFloat(stringSavingsFloat);
}

// console logging the header passing the initialized myName values
console.log(header.display(firstName, lastName, exercise));

// Logging each one of the functions using the variables.
console.log(`Hello my name is ${myName(firstName, lastName)}!\n`);

console.log(`Today's date is ${dateWriter(todayYear, todayMonth, todayDay)} and the current temperature is ${formatNumber(number, numberOfFixedPositions)} degrees.\n`)

console.log(`I am ${convertToInt(stringAgeNumber)} years old and my savings account goal is ${convertToFloat(stringSavingsFloat)} dollars.`);

// output
/*

  Angel Padilla
  Assignment 2.4
  Date: 12/8/2019
  Hello my name is Angel Padilla!

  Today's date is 2019/11/8 and the current temperature is 23.1 degrees.

  I am 30 years old and my savings account goal is 99999.99 dollars.

*/
