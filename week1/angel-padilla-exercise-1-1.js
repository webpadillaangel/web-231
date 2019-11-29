/*
============================================
; Title: Assignment 1.1
; Author: Angel Padilla
; Date: 11-27-2019
; Modified By: <Your name>
; Description: This program is created to contain two errors
;===========================================
*/ 

// Person object with a name property and a speak method. the speak method takes a parameter to console log text.
var person = {
    name: null,
    speak: function(){
        if(name != null){
            console.log("Hello my name is " + name);    
        }else{
            console.log("Please assign a value to name.");
        }
        
    }
}

// Assign a name value to the person object
person = "Angel";

// Calling the speak method and passing in the person name value.
person.speak(person.name);
