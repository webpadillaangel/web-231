/*
============================================
; Title:  padilla-pattern-matching-functions.js
; Author: Angel Padilla
; Date:   12 Dec 2019
; Modified By:
; Description: Create function to test 2 values by using if statements. Create multiple functions that return a string response.
;===========================================
*/

/*
  Expected output:

  Angel Padilla
  Exercise 3.3
  12-13-2019

  // Expected output
  The enter key was pressed
*/

var header = require("../padilla-header");

console.log(header.display("Angel", "Padilla", "Exercise 3.3"));

let eventKeyCode = 13;

// switch control statement checking against the value of eventKeyCode
switch (eventKeyCode) {
  case 13:
    console.log("The enter key was pressed.");
    break;
  case 16:
    console.log("The shift key was pressed.");
    break;
  case 32:
    console.log("The spacebar key was pressed.");
    break;
  case 8:
    console.log("The backspace / delete key was pressed.");
    break;
  default:
    console.log("Unrecognized key.");
    break;
}
