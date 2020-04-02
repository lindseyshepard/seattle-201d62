'use strict';

// 1. Wrap logic in function
//  - wrap variables and for-loop
// 2. Make it run, execute

function askIceCreamQuestion() {
  var userIceCream = prompt('ice cream?');

  // if(userIceCream === first || userIceCream === second || userIceCream === third){
  //   alert('we love the same ice cream');
  // }

  // arrays start at index 0, vanilla lives at 0, mint chip at 1
  var iceCreamsILike = ['vanilla', 'mint-chip', 'moose tracks', 'chocolate chip cookie', 'oreo'];

  // if(iceCreamsILike[0] === userIceCream || iceCreamsILike[1] === userIceCream || iceCreamsILike[2] === userIceCream){
  //   alert('yay!!!!!!');
  // }

  // for(var i = 0; i < array.length; i++){}

  for(var i = 0; i < iceCreamsILike.length; i++){
    if(iceCreamsILike[i] === userIceCream){
      alert('we did it with a loop');
    }
  }
}

function goodbye(name) {
  alert('Goodbye, ' + name);
}

// Function Invocations
askIceCreamQuestion();
goodbye('Nicholas');