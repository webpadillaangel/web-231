/*
============================================
; Title: Assignment 1.5 Types, Values, and Variables
; Author: Angel Padilla
; Date: 11-30-2019
; Modified By: <Your name>
; Description: This program is created to log 3 employee record variables: First & Last name, address, pay rate, and hire date
;===========================================
*/ 

// Three employee records variables
var firstName1 = "Angel";
var firstName2 = "Frank";
var firstName3 = "Carl";

var lastName1 = "Padilla";
var lastName2 = "Johnson";
var lastName3 = "Shaw";

var address1 = "1111 N. Blue Street";
var address2 = "2222 W. Yellow Street";
var address3 = "3333 S. Pink Street";

// pay rate is hourly
var payRate1 = 10.1;
var payRate2 = 20.2;
var payRate3 = 30.3;

// Date Format is Year, Month, Day then applying method to format month/day/year
var hireDate1 = new Date("2011-1-11").toLocaleDateString();
var hireDate2 = new Date("2012-2-12").toLocaleDateString();
var hireDate3 = new Date("2013-3-13").toLocaleDateString();

// logging each employee in one console log using the backslash n "\n" as line break
console.log(firstName1, lastName1, address1, payRate1, hireDate1 + "\n" +
            firstName2, lastName2, address2, payRate2, hireDate2 + "\n" +
            firstName3, lastName3, address3, payRate3, hireDate3 + "\n");

// output            
/*
Angel Padilla 1111 N. Blue Street 10.1 1/11/2011
Frank Johnson 2222 W. Yellow Street 20.2 2/12/2012
Carl Shaw 3333 S. Pink Street 30.3 3/13/2013
*/


