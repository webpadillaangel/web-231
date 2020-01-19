// Importing padilla-header file
var header = require("../padilla-header");

/*
============================================
; Title:  padilla-object-literals.js
; Author: Angel Padilla
; Date:   18 Jan 2020
; Modified By:
; Description: Program that exercises the practice of Object literals - creat a ticket object and console log the object
;===========================================
*/

// logging header
console.log(header.display("Angel", "Padilla", "Exercise 6.3"));

// Creating an object literal variable name ticket for a ticketing system - (Used values that the starter code gave)
var ticket = {
  id: 10001,
  name: "Help Desk Support",
  requestor: "Angel Padilla"
};

// logging new line
console.log("\n");

// logging the ticket object
console.log(ticket);

/*
Output:

Angel Padilla
Exercise 6.3
Date: 1/18/2020


{ id: 10001, name: 'Help Desk Support', requestor: 'Angel Padilla' }

*/
