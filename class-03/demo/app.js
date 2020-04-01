'use strict';

// Arrays : useful for containing like things
var first = 'vanilla';
var second = ' mint-chip';
var third = 'moose tracks';

var userIceCream = prompt('ice cream?');

// if(userIceCream === first || userIceCream === second || userIceCream === third){
//   alert('we love the same ice cream');
// }

// arrays start at index 0, vanilla lives at 0, mint chip at 1
var iceCreamsILike = ['vanilla', 'mint-chip', 'moose tracks', 'chocolate chip cookie', 'oreo'];
iceCreamsILike[0]; // array access notation, it will be === 'vanilla

// if(iceCreamsILike[0] === userIceCream || iceCreamsILike[1] === userIceCream || iceCreamsILike[2] === userIceCream){
//   alert('yay!!!!!!');
// }

// for(var i = 0; i < array.length; i++){}

for(var i = 0; i < iceCreamsILike.length; i++){
  if(iceCreamsILike[i] === userIceCream){
    alert('we did it with a loop');
  }
}




var usersName = prompt('what\'s ur name person?');

// // while(usersName === '' || usersName === null){
while(!usersName){
  usersName = prompt('you have to answer my question. What\'s your name?');
}

var numberTheyPicked = prompt('number?');
while(!numberTheyPicked){
  numberTheyPicked = prompt('number please!');
}

do {
  var numberTheyPicked2 = prompt('number?');
} while(!numberTheyPicked2);

var age = 0; // incrementor assignment
while(age < 6){ // conditional
  alert('a year has passed you are now ' + age);
  // age = age + 1;
  age ++; // incrementation
}

// i stands for INDEX, incrementor
// for (var age = 0; age < 6; age++)
// for loops purpose is to iterate until a certain number of times
for (var i = 0; i < 6; i++){
  alert('a year has passed you are now ' + i);
}







//===================== Logical Operators ================
1 == '1'; // loose equals, compares across types
1 === '1'; // strict equals
1 != 'apple'; // logical not equals
1 !== 'apple'; // logical not strict equals
1 !== '1';
1 != '1';
9 > 5; // greater than operator
5 < 9; // less than
9 >= 9; // greater than or equal to operator
9 <= 9; // less than or equal to

false || true; // logical or
// this line of code changes them to truthy and falsey
// falsey || truthy
0 || 1; // prints the 1
// or cares if there is ANYTHING true - it stope looking once it finds it
// short circuiting operator
1 || 2; // 1
0 || false || null || undefined || '' || 1 || 2 || 3 || 4 || 5 || 6; // 1
false || null || 0; // 0

0 || false || null || undefined || 1;
false || null || undefined || 1;
null || undefined || 1;
undefined || 1;
1;

null || false;
false || null;

// and

0 && 1; // 0 short circuits at the first false
0 && null && 1; // 0

1 && 2 && 3 && 4; // prints last true, stops at first false

// OR follows one rule : stop at the first true
// And follows one rule : stop at the first false
// Both return the last thing they stopped at

// As you learn you will be building on this. For lab today, you can treat && and || as you would expect them to behave
// or is one of the things is truthy, && is all of them all

// Bang
!true;//false
!false; // true
!!0; // false

// list of falsys
null, undefined, '', 0, false.

