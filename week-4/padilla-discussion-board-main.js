/*
============================================
; Title:  padilla-discussion-board-main.js
; Author: Angel Padilla
; Date:   16 Dec 2019
; Modified By:
; Description: Javascript program containing two errors
;===========================================
*/

// Importing padilla-header file
var header = require("../padilla-header");

// logging header
console.log(header.display("Angel", "Padilla", "Exercise 4.1"));

// var initialize array using the array constructor with a default of 6 elements
var defaultArray = new array('w','e','b', 2, 3, 1);

// push an element into the defaultArray
defaultArray.Push('!');

outPutArrayItems(defaultArray);

// function takes an array to iterate over the elements and log each of them.
function outPutArrayItems(arrayItem){
  item1.forEach(element => {
    console.log(element);
  });
}

// expected output
/*
Angel Padilla
Exercise 4.1
Date: 12/16/2019
w
e
b
2
3
1
!
*/


