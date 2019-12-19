// Importing padilla-header file
var header = require("../padilla-header");

/*
============================================
; Title:  padilla-filtering.js
; Author: Angel Padilla
; Date:   18 Dec 2019
; Modified By:
; Description: Practice the use of arrays. Iteration and filtering
;===========================================
*/

// logging header
console.log(header.display("Angel", "Padilla", "Exercise 4.3"));

// declaring cars array variable
var vehicles = ["Car", "Truck", "Motorcycle", "Airplane", "Bus"];

// getValue() iterates over array passed in and compares each element value with the second str variable
function getValue(arr, str) {
  arr.forEach(el => {
    if (el === str) {
      console.log(el);
    }
  });
}

// logging each item in vehicles array
console.log("\n-- DISPLAYING ARRAY ITEMS --");
vehicles.forEach(el => {
  console.log(el);
});

// logging a matched value in the vehicles array
console.log("\n-- SELECTED VALUE --");
getValue(vehicles, "Motorcycle");

console.log("\n-- SELECTED VALUE --");
getValue(vehicles, "Bus");

/*
output:

Angel Padilla
Exercise 4.3
Date: 12/18/2019

-- DISPLAYING ARRAY ITEMS --
Car
Truck
Motorcycle
Airplane
Bus

-- SELECTED VALUE --
Motorcycle

-- SELECTED VALUE --
Bus
*/
