// Importing padilla-header file
var header = require("../padilla-header");

/*
============================================
; Title:  padilla-arrays.js
; Author: Angel Padilla
; Date:   17 Dec 2019
; Modified By:
; Description:
;===========================================
*/

// logging header
console.log(header.display("Angel", "Padilla", "Exercise 4.2"));

// declaring variable with 5 fruits
var fruits = ["Apple", "Orange", "Banana", "Mango", "Pear"];

// getFruits() takes an array param and console logs the items in the array
function getFruit(arrayItem) {
  array.forEach(element => {
    console.log(element);
  });
}

getFruit(fruits);

/*
Output:

Angel Padilla
Exercise 4.2
Date: 12/17/2019
Apple
Orange
Banana
Mango
Pear
*/
