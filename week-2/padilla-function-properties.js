// Importing padilla-header file
var header = require("./padilla-header.js");

/*
============================================
; Title:  padilla-function-properties.js
; Author: Angel Padilla
; Date:   06 Dec 2019
; Modified By:
; Description: Creating function properties and calling them to then output the result
;===========================================
*/

// initializing the angel property, mynName function property definitions
myName.angel = "Angel";
myName.padilla = "Padilla";
myName.exercise = "Exercise 2.3";

/**
 * Params: none
 * Response: concatenation of text and property definitions
 * Description: returns the value assigned to a function property
 */
function myName() {
  return "Hello " + myName.angel + " " + myName.padilla + "!";
}

// console logging the header passing the initialized myName values
console.log(header.display(myName.angel, myName.padilla, myName.exercise));

// new line to add separation
console.log("\n");

// logging the the return value by the myName function.
console.log(myName());

// output
/*

Angel Padilla
Exercise 2.3
Date: 12/7/2019


Hello Angel Padilla!

*/
