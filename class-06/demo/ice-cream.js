'use strict';


// Domain Modeling,
//  idea of taking a real world problem and planning/ turning it into code
// Interface for my ice cream app that shows all the flavors
// all the flavors, name of the store, cost, color, size, pictures of flavors
// show the ice cream - images, menu, list: where each item in the ul has a block, is colored, maybe has an image, shows the details

// Object literals
var vanilla = {
  'flavor' : 'vanilla',
  cost: 2,
  color: 'white',
  picture: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Ice_Cream_dessert_02.jpg'
};

vanilla.renderToPage = function(){
  // 1. find target
  var targetUlEl = document.getElementById('ice-cream');
  // 2. create content
  //    a. li
  var newLiEl = document.createElement('li');
  //    b. text then image
  var flavorText = 'Flavor : ' + this.flavor + ' cost : $' + this.cost;
  newLiEl.textContent = flavorText;


  //       i. image src
  var newImageEl = document.createElement('img');
  newImageEl.src = this.picture;
  newLiEl.appendChild(newImageEl);
  console.log(newLiEl);

  // 3. append to target
  targetUlEl.appendChild(newLiEl);
};


var oreo = {
  flavor : 'oreo',
  cost : 20,
  color: 'blue',
  picture: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Ice_Cream_dessert_02.jpg'
};

oreo.renderToPage = function () {
  // 1. find target
  var targetUlEl = document.getElementById('ice-cream');
  // 2. create content
  //    a. li
  var newLiEl = document.createElement('li');
  //    b. text then image
  var flavorText = 'Flavor : ' + this.flavor + ' cost : $' + this.cost;
  newLiEl.textContent = flavorText;


  //       i. image src
  var newImageEl = document.createElement('img');
  newImageEl.src = this.picture;
  newLiEl.appendChild(newImageEl);
  console.log(newLiEl);

  // 3. append to target
  targetUlEl.appendChild(newLiEl);
};

var mintChip = {
  'flavor' : 'mint chip',
  cost : .5,
  color: 'green',
  'picture': 'https://upload.wikimedia.org/wikipedia/commons/3/31/Ice_Cream_dessert_02.jpg'
};

mintChip.potato = function () {
  // 1. find target
  var targetUlEl = document.getElementById('ice-cream');
  // 2. create content
  //    a. li
  var newLiEl = document.createElement('li');
  //    b. text then image
  var flavorText = 'Flavor : ' + this.flavor + ' cost : $' + this.cost;
  newLiEl.textContent = flavorText;


  //       i. image src
  var newImageEl = document.createElement('img');
  newImageEl.src = this.picture;
  newLiEl.appendChild(newImageEl);
  console.log(newLiEl);

  // 3. append to target
  targetUlEl.appendChild(newLiEl);
};

function add(){}

add();

vanilla.renderToPage();
oreo.renderToPage();
mintChip.potato();

// DOM manipulation

// taking javascript and using it to change what is appearing on the webpage

// 1. Need a target
// 2. Create content
// 3. add the content to the target

// document.write('Hello World');

// 1 Need target
//    having a targetable element
//    refering to it in the js with document.getElementByID

// document is the object (represents the viewable page )
// getElementById is a method that searches the DOM by id and returns an element
var h1Target = document.getElementById('pageTitle'); // is a dom h1

// step 2 is get content
var newText = 'Welcome to DOM manipulation';

//3. add content to the target
h1Target.textContent = newText;


// create a list of numbers ( 9 - 25)


for(var i = 9; i < 26; i++) {

  //1 targetable element
  var orderedListEl = document.getElementById('randoNums');
  console.log(orderedListEl);

  // 2. create content
  // the content for an ordered list is a list item
  // document.createElement is a method that makes a dom element
  // it does not put it on the page
  var newListItemEl = document.createElement('li');
  newListItemEl.textContent = i; // this is the dynamic piece


  // 3. add content to the target
  // append the new list item to the ordered list
  orderedListEl.appendChild(newListItemEl);

}

