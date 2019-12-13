/*
============================================
; Title:  bohnet-discussion-board-3.1.js
; Author: Christine Bohnet
; Date:   12 Dec 2019
; Modified By: Angel Padilla
; Description: Discussion board, program with two errors
;===========================================
*/

const header = require('../padilla-header.js'); // updated it to load my header
console.log(header.display('Angel', 'Padilla', 'padilla-db-reply-bohnet.js')); // update to display my info


const testArr = ['a', 'b', 'c', 'd'];
//display all
for (var x=0; x < testArr.length; x++){
    console.log(`Item ${x} in testArr is ${testArr[x]}`)
}
