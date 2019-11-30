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
console.log("Employee 1:", firstName1, lastName1, "lives at", address1, "with an pay rate of", payRate1, "and was hired on", hireDate1 + "\n" +
            "Employee 2:", firstName2, lastName2, "lives at", address2, "with an pay rate of", payRate2, "and was hired on", hireDate2 + "\n" +
            "Employee 3:", firstName3, lastName3, "lives at", address3, "with an pay rate of", payRate3, "and was hired on", hireDate3);

// output            
/*
Employee 1: Angel Padilla lives at 1111 N. Blue Street with an pay rate of 10.1 and was hired on 1/11/2011
Employee 2: Frank Johnson lives at 2222 W. Yellow Street with an pay rate of 20.2 and was hired on 2/12/2012
Employee 3: Carl Shaw lives at 3333 S. Pink Street with an pay rate of 30.3 and was hired on 3/13/2013
*/


