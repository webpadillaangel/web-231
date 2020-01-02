// Importing padilla-header file
var header = require("../padilla-header");

/*
============================================
; Title:  padilla-object-collections.js
; Author: Angel Padilla
; Date:   01 Jan 2019
; Modified By:
; Description: Program that exercises the practice of an filtering/reducing complex data structures by using the map()
;===========================================
*/

// logging header
console.log(header.display("Angel", "Padilla", "Exercise 5.4"));

// Composers array of objects
var composers = [
  { firstName: "Ludwig", lastName: "Beethoven", genre: "Classical", rating: "8" },
  { firstName: "Wolfgang", lastName: "Mozart", genre: "Classical", rating: "10" },
  { firstName: "Johann", lastName: "Bach", genre: "Classical", rating: "9" },
  { firstName: "Franz", lastName: "Haydn", genre: "Classical", rating: "6" },
  { firstName: "Franz", lastName: "Schubert", genre: "Classical", rating: "5" }
];

// using the map() to filter out data and create an array of object containing the composer and rating
var composersByRating = composers.map((x) => {
  return {lastName: x.lastName, rating: x.rating};
});

// using the map() to filter out data and create an array of object containing the composer and genre
var composersByGenre = composers.map((x) => {
  return {lastName: x.lastName, genre: x.genre};
});

console.log("\n-- COMPOSER BY RATING --");

// Iterating over composersByRating by using the forEach(). Logging the text using dot notation.
composersByRating.forEach((x) => {
  console.log(`Rating: ${x.rating} \nComposer: ${x.lastName}\n`);
});

console.log("\n-- COMPOSER BY GENRE --");

// Iterating over composersByGenre by using the forEach(). Logging the text using dot notation.
composersByGenre.forEach((x) => {
  console.log(`Rating: ${x.genre} \nComposer: ${x.lastName}\n`);
});

/*
Angel Padilla
Exercise 5.4
Date: 1/1/2020

-- COMPOSER BY RATING --
Rating: 8
Composer: Beethoven

Rating: 10
Composer: Mozart

Rating: 9
Composer: Bach

Rating: 6
Composer: Haydn

Rating: 5
Composer: Schubert


-- COMPOSER BY GENRE --
Rating: Classical
Composer: Beethoven

Rating: Classical
Composer: Mozart

Rating: Classical
Composer: Bach

Rating: Classical
Composer: Haydn

Rating: Classical
Composer: Schubert
*/
