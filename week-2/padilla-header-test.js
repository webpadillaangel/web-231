/*
============================================
; Title:  padilla-header-test.js
; Author: Angel Padilla
; Date:   04 Dec 2019
; Modified By:
; Description: Importing file to call and display a formatted header
;===========================================
*/

// Importing padilla-header file
const header = require("../padilla-header.js");

// logging the call to the display function from the header variable.
console.log(header.display("Angel", "Padilla", "Header"));

/*
  Output:
  Angel Padilla
  Header
  Date: 12/4/2019
*/
