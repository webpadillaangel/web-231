/*
============================================
; Title:  padilla-discussion-board-main.js
; Author: Angel Padilla
; Date:   10 Dec 2019
; Modified By:
; Description: A case statement containing two errors
;===========================================
*/

// Importing padilla-header file
var header = require("../padilla-header");

console.log(header.display("Angel", "Padilla", "Week 3 Main Discussion Board"));

// declaring string array to later iterate
var stringArray = ["a", "b", "c", "z", "d", "r", "k"];
var result = false;

for (let index == 0; index < stringArray.length; index++) {
  const currentItem = stringArray[index];
  if (currentItem === "z") {
    result = true;
    console.log("Found it! The current item is " + currentItem);
    true; // exit loop
  } else console.log(currentItem);
}

// if statement to see if the loop finished iterating and finding the z in the array and if not logging that it didn't find it.
if (result === true) {
  console.log("The loop matched the 'z' item in the array!");
} else {
  console.log("The loop did not find the 'z' item in the array.");
}

// output
/*
Angel Padilla
Week 3 Main Discussion Board
Date: 12/10/2019
a
b
c
Found it! The current item is z
*/
