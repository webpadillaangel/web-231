/*
============================================
; Title: Assignment 1.1
; Author: Angel Padilla
; Date: 11-27-2019
; Modified By: <Your name>
; Description: This program is created to contain two errors
;===========================================
*/ 

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

person = "Angel";
person.speak(person.name);
