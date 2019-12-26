// Importing padilla-header file
var header = require("../padilla-header");

/*
============================================
; Title:  padilla-discussion-board-main.js
; Author: Angel Padilla
; Date:   25 Dec 2019
; Modified By:
; Description: Program to practice the built in forEach method.
;===========================================
*/

// logging header
console.log(header.display("Angel", "Padilla", "Exercise 5.2"));

// declaring 5 favorite foods array
var favoriteFoodsArray = ["Oysters", "Shrimp", "Steak", "Tacos", "Sushi"];

// logging empty new line
console.log("\n");

// Iterating over the favoriteFoodsArray using the forEach() and logging each element in the array
favoriteFoodsArray.forEach((foodItem) => {
  console.log(foodItem);
});

/*
  Output:

Angel Padilla
Exercise 5.2
Date: 12/25/2019


Oysters
Shrimp
Steak
Tacos
Sushi
*/
