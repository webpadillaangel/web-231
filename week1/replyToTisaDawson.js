/*============================================;  
Title: Assignment 1.1;  
Author: Tisa Dawson ;   
Date: 25 November 2019;  
Modified By: Angel Padilla;  
Description: The assignment is to create a simple JavaScript program using values and variables with at least two errors; 
===========================================*/ 

var name = "Adam" ; // STRING 
var age = 25 ; // NUMBER 
var height = 72 ; // NUMBER (in inches) 

var gender = 'Male' ; // STRING 

var zip = 10012 ; // NUMBER 
var children = false; 

// This is true if individual has children BOOLEAN 
console.log( name + ", "  + age + " ,  " + zip); 

/*
Respons:
So, taking a huge swing at this and trying to figure out where the two error are/were, 
since the code isn’t formatted and couldn’t see the code for what it is. I know how pasting from code messes up the code in discussion board.  
First, I just formatted it, I am not sure if one of the errors was contained in the formatting or if the string variables is supposed to throw 
an error but it doesn’t because single quotes and double quotes are both seen as strings in JavaScript.  The error I did see is in the console log, 
the given error was “Invalid or unexpected token” and it was pointing at “+ zip” so I noticed there was a missing double quotes after the first comma. 

*/