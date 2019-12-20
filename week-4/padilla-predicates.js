// Importing padilla-header file
var header = require("../padilla-header");

/*
============================================
; Title:  padilla-predicates.js
; Author: Angel Padilla
; Date:   19 Dec 2019
; Modified By:
; Description: Predicates assignment, program to filter out a selected value using the filter method provided by JS
;===========================================
*/

// logging header
console.log(header.display("Angel", "Padilla", "Exercise 4.4"));

// states containing 5 "string" states
var states = ["Alabama", "Nebraska", "Iowa", "California", "Nevada"];

function getState(str1Arg, str2Arg) {
  if (str1Arg === str2Arg) {
    return true;
  }
}

// logging each item in states array
console.log("\n-- ORIGINAL ARRAY --");
states.forEach(el => {
  console.log(el);
});

// logging each item sorted in states array
console.log("\n-- SORTED ARRAY --");
states.sort().forEach(el => {
  console.log(el);
});

// logging the filtered state value of iowa if found in that state array using the filter(). An array is returned if found so using the [0] to show that string value
console.log("\n-- SELECTED VALUE --");
console.log(
  states.filter(s => {
    return getState(s, "Iowa");
  })[0]
);

/*
output:

Angel Padilla
Exercise 4.4
Date: 12/19/2019

-- ORIGINAL ARRAY --
Alabama
Nebraska
Iowa
California
Nevada

-- SORTED ARRAY --
Alabama
California
Iowa
Nebraska
Nevada

-- SELECTED VALUE --
Iowa

*/
