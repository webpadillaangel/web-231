/*
============================================
; Title:  bohnet-array-error-week-4.js
; Author: Jeff Lintel
; Date:   18 December 2019
; Modified By: Angel Padilla
; Description: Array program with 2 errors
;===========================================
*/


const header = require('../padilla-header.js');
console.log(header.display('Angel', 'Padilla', 'Exercise 4.1'))

var brokenArray = [ null, "first", "second", "third" ];

for(x in brokenArray){
    console.log("x is ", brokenArray[x]);
}

/*
Output:

Angel Padilla
Exercise 4.1
Date: 12/18/2019
x is  null
x is  first
x is  second
x is  third
*/
