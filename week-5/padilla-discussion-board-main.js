// Importing padilla-header file
var header = require("../padilla-header");

/*
============================================
; Title:  padilla-discussion-board-main.js
; Author: Angel Padilla
; Date:   25 Dec 2019
; Modified By:
; Description: Program that contains two errors
;===========================================
*/

// logging header
console.log(header.display("Angel", "Padilla", "Exercise 5.1"));

// declaring cars array of objects;
var cars = [
  { make: "Audi", model: "S3" },
  { make: "BMW", model: "M3" },
  [ make: "Ford", model: "Escort" }
];

// returning a string array of the map() that is concatenating text with the make and model of the cars array
var carInfo = cars.Map(x => {
  return `The make is: ${x.make} and the model is: ${x.model}`;
});

// Logging the result carInfo
console.log(carInfo);
