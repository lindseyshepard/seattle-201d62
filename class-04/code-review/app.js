'use strict';

var ryansFavoriteCars = ['audi rs5', 'subaru wrx', 'ford focus rs'];
var sadCarOptions = ['geo metro', 'honda oddysey', 'pinto', 'ford fiesta', 'saab'];

// ask them the question
// check the response
// if it is in the favorites they win
// if it is in the sadOnes they go again
// if it is neither, correct them sternly

// if it is correct
// if it is in the favorite cars
// a bunch of ors - in the conditional
// assume they were wrong
// check each value with a loop and if right, change the assumption
// stop looping
// AFTER the loop, respond with our if statement


// Flag - a boolean variable that starts (usually) false, and something in an iterative part of the code changes its boolean value- we use the flag after the iteration to check some truth

for (var guesses = 0; guesses < 3; guesses++) {

  var usersFavoriteCar = prompt('What is Ryan\'s favorite car');

  var theyWereRight = false;

  for (var carIndex = 0; carIndex < ryansFavoriteCars.length; carIndex++) {
    if (usersFavoriteCar === ryansFavoriteCars[carIndex]) {
      theyWereRight = true;
      break;
    }
  }
  // this will either be true or false no need to say true === true


  if (theyWereRight) {
    alert('nice job');
    break;
  } else if (guesses === 2) {
    alert('you bad');
  } else {
    alert('try again');
  }
}
// then make it repeat


