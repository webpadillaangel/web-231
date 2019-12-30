/*
============================================
; Title: Discussion Board 5.1 – Advanced Arrays
; Author: Jess Cruse
; Date: 25 Dec 2019
; Modified By: Angel Padilla
; Description: simple JavaScript program using a keyed collection array with at least two (2) errors
;===========================================
*/

//Header
const header = require('../padilla-header.js');
console.log(header.display("Angel", "Padilla", "Discussion Board 5.1 Reply – Advanced Arrays")); // Updates with own info

//START PROGRAM

var spaceHistory = new Set();
spaceHistory.add('4 October 1957', 'The worlds first artificial satellite.');
spaceHistory.add('28 May 1959', 'First creatures to return alive from space.');
spaceHistory.add('12 April 1961 ', 'The first man in space.');
spaceHistory.add('16 June 1963', 'The first woman in space.');
spaceHistory.add('18 March 1965', 'First-ever spacewalk.');
spaceHistory.add('20 July 1969', 'First man on the Moon.');
spaceHistory.add('9 April 1971', 'The first space station is launched.');

spaceHistory.forEach(element => {
  console.log(element);
});

  console.log('\nLearn more at “10 Key Moments in Space Exploration.” BBC News, BBC, 15 Jan. 2016, https://www.bbc.com/news/science-environment-35326827.');

//EXPECTED OUTPUT
//4 October 1957 - The worlds first artificial satellite. ...
//28 May 1959 - First creatures to return alive from space. ...
//12 April 1961 - The first man in space. ...
//16 June 1963 - The first woman in space. ...
//18 March 1965 - First-ever spacewalk. ...
//20 July 1969 - First man on the Moon. ...
//19 April 1971 - The first space station is launched.
//Learn more at “10 Key Moments in Space Exploration.” BBC News, BBC, 15 Jan. 2016, https://www.bbc.com/news/science-environment-35326827.'

spaceHistory.clear();
spaceHistory.size; // 0

//END PROGRAM
