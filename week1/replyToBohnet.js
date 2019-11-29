/*
============================================
; Title: Exercise 1.1
; Author: Christine Bohnet
; Date: 26 Nov 2019
; Modified By: Angel Padilla
; Description: This program demonstrates the
; use of errors in an application
;===========================================
*/

/*
Original Code from Christine Bohnet

var x = 5;
var y = "6";
var z = null;

alert("x + y = " + (x + y));
alert("x / z = " + x / z);

My Response to Bohnet

The first issue I see is that this cant run in vs code, so to solve that issue I ran the code in a browser. (to see the alert)
Or to simply run it in VS Code, I replaced the alerts with console.log(), which then allowed me to see the result. Now, the first real issue arises 
when x and y are added, there is no accurate sum because it is concatenating the values due to y being a string. The second issue, x and z can be divided 
but the result isn't valid because it's 'infinity'. Null and zero can't be divided into a number to get a valid result.
There are many ways to solve/fix these issues, and even my solution can be redone to do a lot more validation.
The goal is to apply a working solution to the issues, so I decided to go with two functions. One function for adding and the other function for dividing. 
In the function for addition I parseInt() the two parameters to make sure string value numbers can convert to number types. (This portions in my solution 
can be further be improved by checking for a NaN - Not a real number). So in the division function I use a conditional ternary to essentially do a check on 
the parameter to assign it a value or else default a value. I check to see if the parameters are not null or not equal to zero, and if the check is true I parseInt() 
the parameters and if the check fails I assign a default value.

------------
*/

function logAddition(param1, param2) {
  var x = parseInt(param1);
  var y = parseInt(param2);

  console.log(x + y);
}

function logDivision(param1, param2){
    var x = param1 != null && param1 != 0 ? parseInt(param1) : 0;
    var z = param2 != null && param2 != 0 ? parseInt(param2) : 1;
  
    console.log(x / z);
}

logAddition(5, "6");
logDivision(5, null);
