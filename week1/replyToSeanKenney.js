
/*
=================================================
; Title: Assignment 1.1
; Author: Sean Kenney - I did not reference any
; other code other than what was in the text
; Date: 27 November 2019
; Modified by: Angel Padilla
; Description: This program does not work. It contains two errors that
; must be fixed.
; Angel: Find the two errors and work up a solution to make code run.
=================================================
*/
    
// variable that is assigned today's date
var todaysDate = new Date();
    
// variable that is assigned a past year
var pastYear = 1776;
    
// variable
    
//Display the current date
console.log("Today's date and time is " + todaysDate);
    
//Display a past year value
console.log(pastYear + " occured in the past");

/*
    First thing that the compiler through was that “variable” wasn’t defined. So I just updated variable to var for todaysDate. 
    The second error came where “is” was trying to assign a value to pastYear, “is” is not an assignment operator 
    so I just made it an equal sign “=”. Making those changes allowed the code to execute.
*/