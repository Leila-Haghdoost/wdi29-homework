// MTA Lab
// Objectives:
// Apply your knowledge of Javascript to solve a real world problem.
// Get really good at array manipulation and JS data structures.
// Activity
// Create a program that models a simple subway system.
//
// The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:
//
// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.
//
// // console.log() shows output similar to this:
// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."
// There are 3 subway lines:
// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
// All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you might need to differentiate this when you name your stops in the arrays.)
// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
// Your trip planner must work in either direction, i.e. planTrip('N', 'Times Square', '6', '33rd') (starting at Times Square) should work as well as the reverse trip planTrip('6', '33rd', 'N', 'Times Square') (starting at 33rd).
// Hints:
// Work out how you would do it on paper first! Then start to explain that process in Javascript.
// Get the program to work for a single line before trying to tackle multiple lines.
// Don't worry about prompting the user for input. Hard code some values to get it working. You can use prompt() later to make it more interactive.
// Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// The key to the lab is finding the index positions of each stop. (hint: indexOf())
// Depending on what kind of data structures you use to represent the lines and stations, you might have to make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)*/




const lines = {
  lineN: [ 'times Square', '34th', '28th', '23rd', 'Union Square','8th'],

  line6: [ 'Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'],

  lineL: [ '8th', '6th', 'Union Square', '3rd', '1st'],
};

const singleLineTrip = function(startLine, startStation, endStation) {
  let lineStations = lines[ startLine ];
  console.log(`Start Line:${startLine}, Start station:${startStation}, End station:${endStation}`);
  // let text = "";
  // for ( let x in lines) {
  //   text = lines[x];
  //   console.log(`${x}:${text}`);
  // }
////////////////////////////////
  let start = lineStations.indexOf(startStation);
  let end = lineStations.indexOf(endStation);
////////////
////////////////////////////////
  if( start < end ) {
    let nameOfstops = lineStations.slice(start, end+1);
    let numStops = (end - start);
    console.log(`Total number of stops are ${numStops} and name of stops are ${nameOfstops}.`);
  } else {
    let reverseLineStations = lineStations.reverse();
    let reverseStart = reverseLineStations.indexOf(startStation);
    let reverseEnd = reverseLineStations.indexOf(endStation);
    let nameOfReverseStops = lineStations.slice(reverseStart, reverseEnd+1);
    let reverseNumStops = (reverseEnd - reverseStart);
    console.log(`Total number of stops are ${reverseNumStops} and name of stops are ${nameOfReverseStops}.`);
  }


};


// singleLineTrip('lineN', '8th', '34th');
// singleLineTrip('lineN', '34th', '8th' );
// singleLineTrip('lineL', '6th', 'lineL','1st');
// singleLineTrip('line6', 'Astor Place', 'line6','33rd');
// multiLineTrip('lineN', '34th', 'line6','Astor Place');
// multiLineTrip('line6', 'Grand Central', 'lineL','1st');
// multiLineTrip('line6', 'Astor Place', 'lineN','34th');

const planTrip = function(startLine, startStation, endLine, endStation){
  if (startLine === endLine) {
    // single-line trip
    singleLineTrip(startLine, startStation, endStation);
  } else {
    // multi-line trip
    singleLineTrip(startLine, startStation, 'Union Square');
    console.log(`You should change the line in Union Square`);
    singleLineTrip(endLine, 'Union Square', endStation);
  }
};


planTrip('line6', 'Astor Place', 'lineN','34th');
