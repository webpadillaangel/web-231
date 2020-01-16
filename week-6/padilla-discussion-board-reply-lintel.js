/*
============================================
; Title:  lintel-exercise-6.1.js
; Author: Jeff Lintel
; Date:   13 January 2020
; Modified By: Angel Padilla
; Description: Demonstrate objects with 2 errors
;===========================================
*/

//header
const header = require('../padilla-header.js'); // updated to make it work

console.log(header.display("Angel", "Padilla", "Exercise 6.1")); // updated with my info

/*Expected Output
The Tesla Model S Long Range is a Sedan. It has a range of 373 miles
and can accelerate from 0-60 mph in 3.7 seconds. All this starting at only $79990!
The Tesla Model X Performance is a SUV. It has a range of 305 miles
and can accelerate from 0-60 mph in 2.7 seconds. All this starting at only $104990!
The Tesla Model 3 Standard Range Plus is a Sedan. It has a range of 250 miles
and can accelerate from 0-60 mph in 5.3 seconds. All this starting at only $39990!
The Tesla Model 3 Long Range is a Sedan. It has a range of 322 miles
and can accelerate from 0-60 mph in 4.4 seconds. All this starting at only $48990!
*/

//function displaying vehicle information. Params vehicle. Output string template
function showVehicleInfo(vehicle) {
  console.log(`The Tesla ${vehicle.name} ${vehicle.type} is a ${vehicle.bodyStyle}. It has a range of ${vehicle.range} miles
and can accelerate from 0-60 mph in ${vehicle.zeroToSixty} seconds. All this starting at only $${vehicle.startingPrice}!
`);
}

//declare vehicle variables and display vehicle information
var modelS = {
  name: "Model S",
  type: "Long Range",
  bodyStyle: "Sedan",
  range: 373,
  zeroToSixty: 3.7,
  startingPrice: 79990
};

showVehicleInfo(modelS);

var modelX = {
  name: "Model X",
  type: "Performance",
  bodyStyle: "SUV",
  range: 305,
  zeroToSixty: 2.7,
  startingPrice: 104990
};

showVehicleInfo(modelX);

var model3 = {
  name: "Model 3",
  type: "Standard Range Plus",
  bodyStyle: "Sedan",
  range: 250,
  zeroToSixty: 5.3,
  startingPrice: 39990
};

showVehicleInfo(model3);

//update model 3 information to reflect a different trim level
model3.type = "Long Range";
model3.range = 322;
model3.zeroToSixty = 4.4;
model3.startingPrice = 48990;

//display updated model 3 info after updating information

showVehicleInfo(model3);
