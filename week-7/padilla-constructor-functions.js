// Importing padilla-header file
var header = require("../padilla-header");

/*
============================================
; Title:  padilla-constructor-functions.js
; Author: Angel Padilla
; Date:   22 Jan 2020
; Modified By:
; Description: Program that practices the use of constructor functions by creating a constructor function and creating 5 employees in an array
;===========================================
*/

// logging header
console.log(header.display("Angel", "Padilla", "Exercise 7.2"));

// Constructor Employee function that upon invocation, values will be automatically assigned via this.[propertyName]
function Employee(id, firstName, lastName, title) {
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.title = title;
}

// employee array containing 5 Employee objects
var employees = [
  new Employee("1", "Thomas", "Edison", "Software Engineer"),
  new Employee("2", "Benjamin", "Franklin", "Programmer"),
  new Employee("3", "Nikola", "Tesla", "Project Manager"),
  new Employee("4", "Charles", "Babbage", "Product Manager"),
  new Employee("5", "Alexander", "Bell", "Business Analyst")
];

console.log("\n");

// iterating over the employees array of objects and logging the values via dot notation
employees.forEach(emp => {
  console.log(emp.id, emp.firstName, emp.lastName, emp.title);
});


/*
Output:

Angel Padilla
Exercise 7.2
Date: 1/22/2020


1 Thomas Edison Software Engineer
2 Benjamin Franklin Programmer
3 Nikola Tesla Project Manager
4 Charles Babbage Product Manager
5 Alexander Bell Business Analyst
*/
