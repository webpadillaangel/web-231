/*
============================================
; Title:  lintel-exercise-4.1.js
; Author: Jeff Lintel
; Date:   16 December 2019
; Modified By: Angel Padilla
; Description: Array program with 2 errors
;===========================================
*/

//header
const header = require("../padilla-header.js");

console.log(header.display("Angel", "Padilla", "Exercise 4.1"));

//declare array
var dogs = [
  "Irish Setter",
  "Blue Heeler",
  "German Shepherd",
  "Golden Retriever",
  "Rhodesian Ridgeback",
  "Mutt"
];

//iterate over array, displaying each element. Params array. Output string.
function showDogs(array) {
  for (i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

//test
showDogs(dogs);

// output
/*
Angel Padilla
Exercise 4.1
Date: 12/17/2019
Irish Setter
Blue Heeler
German Shepherd
Golden Retriever
Rhodesian Ridgeback
Mutt
*/
