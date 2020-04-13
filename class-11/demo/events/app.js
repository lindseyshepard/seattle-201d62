'use strict';

// Clicker :
// button on html
// event that listens for a button to be clicked
//      document.getElementById
// an id to target said button
// some sort of output - handler/function

var scooby = document.getElementById('scooby-doo');
var clicky = document.getElementById('clicker');// finds the element with the id of clicker
// document.getElementById()

clicky.addEventListener('click', function(){
  console.log('I work');
});

scooby.addEventListener('click', function () {
  console.log('I am Scooby');
});

scooby.addEventListener('click', function(){
  console.log('I want a scooby snack');
});

// change the click count with a counter

var counter = 0;
clicky.addEventListener('click', function(){
  counter++;
  clicky.textContent = 'Clicked ' + counter + ' Time';
});

console.log(scooby.textContent);

// var wordsArray = scooby.textContent.split(' '); // splits a string into an array, based on a target character
// // ["I", "was", "also", "clicked", "0", "times"]
// var scoobyCount = parseInt(wordsArray[4]);
// console.log(wordsArray);
// console.log(parseInt(wordsArray[4]));
// scooby.textContent = scoobyCount + 1;


scooby.addEventListener('click', function(){
  var wordsArray = scooby.textContent.split(' '); // splits a string into an array, based on a target character
  // ["I", "was", "also", "clicked", "0", "times"]
  var scoobyCount = parseInt(wordsArray[4]);
  console.log(wordsArray);
  console.log(parseInt(wordsArray[4]));
  scooby.textContent = 'I was also clicked ' + (scoobyCount + 1) + ' times.';
});




// document.getElementById = function getElementById(elementId)
