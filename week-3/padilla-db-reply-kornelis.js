/*
============================================
; Title: Assignment 3.1
; Author: Izabella Kornelis
; Date: 11 December 2019
; Modified By: Angel Padilla
; Description: A broken JavaScript program that is supposed to run either a for, while, if, or switch statement.
;===========================================
*/

// Require statement that imports the header.js file from my root directory.
const header = require('../padilla-header'); // updated header to point to mine in my root

// Call the console.log() function and output a well-formatted header
console.log(header.display("Angel", "Padilla", "Discussion Board - Assignment 3.1"));

// new line
console.log('\n');

// start program

// If 12 under display "You are a child!"
// If 12-18 display "You are a teen!"
// Otherwise: "You are an adult!"

// Variable Declaration
var age = 20;

// if else statements
if (age <= 12) {
  console.log('You are a child!');
}
else if (age <= 18 && age > 12) {
  console.log('You are a teen!');
}
else{
  console.log('You are an adult!');
}

// end program

/*
output
Angel Padilla
Discussion Board - Assignment 3.1
Date: 12/11/2019


You are an adult!

*/
