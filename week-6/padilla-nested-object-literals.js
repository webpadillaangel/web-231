// Importing padilla-header file
var header = require("../padilla-header");

/*
============================================
; Title:  padilla-object-object-literals.js
; Author: Angel Padilla
; Date:   18 Jan 2020
; Modified By:
; Description: Program that exercises the practice of Object literals and nested objects- create a ticket object and a nested person object inside of ticket
;===========================================
*/

// logging header
console.log(header.display("Angel", "Padilla", "Exercise 6.4"));

// Creating an object literal variable name ticket with a nested person object
var ticket = {
  id: 105,
  name: "Angel Padilla",
  dateCreated: new Date().toLocaleDateString("en-US"),
  priority: "Low",

  // person is a nested object
  person: {
    id: 1,
    firstName: "Bob",
    lastName: "Jones",
    jobTitle: "Programmer I"
  }
};

// logging new line
console.log("\n");

// logging properties of the ticket object and also property values of the nested object
console.log(
  `Ticket ${ticket.id} was created on ${ticket.dateCreated} and assigned to employee ${ticket.person.firstName} ${ticket.person.lastName} (${ticket.person.jobTitle})`
);

/*
  Output:

  Angel Padilla
  Exercise 6.4
  Date: 1/18/2020


  Ticket 105 was created on 1/18/2020 and assigned to employee Bob Jones (Programmer I)

*/
