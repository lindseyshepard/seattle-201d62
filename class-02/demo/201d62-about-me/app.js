'use strict'; // forces the browser to throw errors when you write valid but bad javascript

// Ice cream questions
// yes no question
// do you like it
var likesIceCream = confirm('Do you like ice cream???'); // true or false
console.log('Likes ice cream : ' + likesIceCream);
// if they like it continue through the rest of the app


// likesIceCream = true
// if(likesIceCream === true)
// if(true)
// if(likesIceCream) // only options are true or false, no neec to manually check it
if (likesIceCream === true) {
  console.log('yay they like it');
} else {
  console.log('lets give them a smootie');
}

var favoriteFlavor = prompt('what is your fav flav'); // `mint chip`

if(favoriteFlavor === 'mint chip'){
  console.log('Bryant likes that too');
} else if(favoriteFlavor === 'oreo' || favoriteFlavor === 'Oreo'){
  console.log('Lindsey likes that a ton');
} else if(favoriteFlavor === 'theTonightDough'){
  console.log('Mason likes this but its too many moneys maybe');
} else {
  console.log('I want to try ' + favoriteFlavor + ', I havent had it before');
}

// and requires all to be true
if(likesIceCream === false && favoriteFlavor === 'butterscotch'){
  console.log('you are so weird');
}


// console.log(1 === 1);
// console.log(1 === 2);
// console.log(true);
true;// `true` is a boolean
false; // `false` is a boolean



// if they don't offer them an alternative smootie

// multiple possible answers x2
//favorite flavor



// Primitives
//boolean
true;
false;
//string
''; // falsy
'abc'; //truthy
'null'; // truthy
'undefined'; // truthy
//numbers
123; // truthy
1.23; // truthy
-50; // truthy
0; // falsy

// themselves
null; // falsy
undefined; //falsy



