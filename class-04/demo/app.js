'use strict';

// variables purpose - store value so we use it later
// function purpose - store code for later use (behavior)

// <function keyword> <function name> <() parameters> <{
// <code>
// }>

// sayHello is a non fruitful function- fruitful means it returns something

function sayHello(){
  console.log('hello');
}

// calling the function
// invoking the function
sayHello();

// Function with parameters
// var person = 'Bade';
// console.log('goodbye, ' + person);

function sayGoodbye(person){ // person is a parameter
  console.log('goodbye, ' + person);
}
sayGoodbye('Nicco'); // 'Nicco' is an argument
sayGoodbye('Devin'); // 'Devin is an argument
sayGoodbye('Ashley'); // when we invoke a function the values of the parameters are called arguments
// variable = value
// parameter = argument
// sayGoodbye(person = 'Nicco')

// Fruitful functions ( functions that return values)

// the parameters (firstName, lastName) is the var firstName; var lastName;
function makeFullName(firstName, lastName){
  // ux if I handle the space, it gets done right, if the user has to remember to put in a space, that is a point of failure
  var fullName = firstName + ' ' + lastName;
  return fullName;
  // return firstName + ' ' + lastName;
  // console.log('I never got run');
}

console.log(makeFullName('Nicholas', 'Carignan'));

// return is a keyword, it literally turns the function invocation into the value
// return exposes a value to outside the function
// return is like the result of the function
// there can only be one return
// a return ends the function

function sum(a, b){
  return a + b;
}

sum(1,2);



