// Importing padilla-header file
var header = require("../padilla-header");

/*
============================================
; Title:  padilla-object-collections.js
; Author: Angel Padilla
; Date:   15 Jan 2019
; Modified By:
; Description: Program that practices the try/catch/finally statement.
;===========================================
*/

// logging header
console.log(header.display("Angel", "Padilla", "Exercise 6.2"));

/*
  Catch clause: <your custom message goes here>
  Finally clause reached...
*/

try {
  var amount = 11.0;
  var tax = "7%";

  var total = amount + amount * tax;

  // checking to see if the total value is valid number, but since its not it will throw the error.
  if (isNaN(total)) {
    throw "The total is not a number - NaN";
  }
} catch (error) {
  //logging the error that is passed by throw in the if statement
  console.log(`\nCatch clause: ${error}`);
} finally {
  console.log("Finally clause reached...");
}

/*
Output:

Angel Padilla
Exercise 6.2
Date: 1/15/2020

Catch clause: The total is not a number - NaN
Finally clause reached...
*/
