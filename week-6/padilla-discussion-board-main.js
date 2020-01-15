// Importing padilla-header file
var header = require("../padilla-header");

/*
============================================
; Title:  padilla-object-collections.js
; Author: Angel Padilla
; Date:   14 Jan 2020
; Modified By:
; Description: Program using object properties with at least 2 errors.
;===========================================
*/

// logging header
console.log(header.display("Angel", "Padilla", "Exercise 6.1"));

// declaring a variable Object with a function property
var Student = {
  name: '',
  grade: '',
  gpa: '',
  greet: function(){
    console.log(`\nHello, my name is ${this.name} I have a ${this.grade} and my GPA is a ${this.gpa}`);
  }
}

// creating a new Student object using Object.create inheriting properties
var student1 = Object.Create(Student);

student1.name = 'Richard Boe';
student1.grade = "A";
student1.gpa = 4.0;

// creating a new Student object using Object.create inheriting properties
var student2 = Object.create(Student);

student2.name = 'Sally Joe';
student2.grade: "B";
student2.gpa = 3.9;

// calling the greet function property from the relative variable object.
student1.greet();
student2.greet();

/*
Expected Output:

Angel Padilla
Exercise 6.1
Date: 1/14/2020

Hello, my name is Richard Boe I have a A and my GPA is a 4

Hello, my name is Sally Joe I have a B and my GPA is a 3.9
*/
