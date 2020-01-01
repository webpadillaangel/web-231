// Importing padilla-header file
var header = require("../padilla-header");

/*
============================================
; Title:  padilla-object-collections.js
; Author: Angel Padilla
; Date:   01 Jan 2019
; Modified By:
; Description: Program that exercises the practice of an array of objects and iterating through it with a forEach()
;===========================================
*/

// logging header
console.log(header.display("Angel", "Padilla", "Exercise 5.3"));

// Composers array of objects
var composers = [
  { firstName: "Ludwig", lastName: "Beethoven", genre: "Classical", rating: "8" },
  { firstName: "Wolfgang", lastName: "Mozart", genre: "Classical", rating: "10" },
  { firstName: "Johann", lastName: "Bach", genre: "Classical", rating: "9" },
  { firstName: "Franz", lastName: "Haydn", genre: "Classical", rating: "6" },
  { firstName: "Franz", lastName: "Schubert", genre: "Classical", rating: "5" }
];

console.log("\n-- COMPOSERS --");

// Iterating over composers by using the forEach(). Logging the text using dot notation.
composers.forEach((x) => {
  console.log(`Last Name: ${x.lastName}, Genre: ${x.genre}, Rating: ${x.rating}`);
});

/*
  Output:
  Angel Padilla
  Exercise 5.3
  Date: 1/1/2020

  -- COMPOSERS --
  Last Name: Beethoven, Genre: Classical, Rating: 8
  Last Name: Mozart, Genre: Classical, Rating: 10
  Last Name: Bach, Genre: Classical, Rating: 9
  Last Name: Haydn, Genre: Classical, Rating: 6
  Last Name: Schubert, Genre: Classical, Rating: 5

*/
