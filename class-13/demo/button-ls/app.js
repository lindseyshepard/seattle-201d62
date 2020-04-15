'use strict';

// // new Color('red') implies clickCount === undefined
// function Color(color, clickCount){
//   this.color = color;
//   if(clickCount){ // if(a) implies if(a === truthy)
//     this.clickCount = clickCount;
//   } else {
//     this.clickCount = 0;
//   }
//   Color.allColors.push(this);
// }

// new Color('red'), implies clickCount === undefined, sets clickcount to 0
// in the parameters if you do <paramNam> = <value> it will use that value as a default
function Color(color, clickCount=0){
  this.color = color;
  this.clickCount = clickCount;
  Color.allColors.push(this);
}

Color.allColors = [];

// this is a solution to a problem some of you will have
// how can I call a constructor with two different sets of parameters


Color.prototype.render = function(){
  // handle the minor css
  var buttonsUl = document.getElementById('buttons');
  var liEl = document.createElement('li');
  var buttonEl = document.createElement('button');

  // change button color
  buttonEl.style = 'background-color: ' + this.color;
  buttonEl.textContent = this.clickCount;
  buttonEl.id = this.color;

  liEl.appendChild(buttonEl);
  buttonsUl.appendChild(liEl);
};

function countClicks(event){
  // every time we click, lets save to local storage
  // what should we save to local storage


  if(event.target.tagName === 'BUTTON'){
    console.log(event.target);
    // check each id
    if(event.target.id ==='red'){ // if I click red
      red.clickCount++;
      event.target.textContent = red.clickCount;

      localStorage.setItem('red', red.clickCount);

    }
    if(event.target.id === 'yellow'){
      yellow.clickCount++;
      event.target.textContent = yellow.clickCount;
      localStorage.setItem('yellow', yellow.clickCount);

    }

    if (event.target.id === 'green') {
      green.clickCount++;
      event.target.textContent = green.clickCount;
      localStorage.setItem('green', green.clickCount);

    }

  }
}

// event delegation - instead of tracking 3 button clicks and adding an event to each, we will add a generic event to the parent ( the ul )
var buttonList = document.getElementById('buttons'); // the ul containing the buttons

buttonList.addEventListener('click', countClicks);


// ==================== what if we stored all 3 in an array together =============
new Color('red');
new Color('yellow');
new Color('green');

// new Image('something.jpg', 'something');

// if(the image is in localstorage){
//   new Image('jpg from localstorage', 'name from localstorage', 'clicks from local storage')
// }

console.log('local colors', Color.allColors);
localStorage.setItem('allTheColorsBadString', Color.allColors);

// a variable that has been turned to a string
var allColorsThatHaveBeenMadeStringy = JSON.stringify(Color.allColors);
console.log('allColorsThatHaveBeenMadeStringy', allColorsThatHaveBeenMadeStringy);
localStorage.setItem('colorsFromLocalStorage', allColorsThatHaveBeenMadeStringy);



// when we get it from local storage. It is still a string, not an array
var colorsFromLocalStorageStillAString = localStorage.getItem('colorsFromLocalStorage');
var actualJavascriptColorsArray = JSON.parse(colorsFromLocalStorageStillAString);

console.log('colorsFromLocalStorage, after being parsed', actualJavascriptColorsArray);


// When I turn an object into stringified json, it does not keep its prototype methods, or knowledge about what 'type' of thing it was
// what constructor it was an instance of.



// === One way
// In busmall, you can have 2 sets of data - one is raw data just for tracking total clicks - the one in local storage
// 2 is one you create fresh every time that has prototype methods for rendering
// you can merge them after 25 clicks
// ===


// == another way
// pass them back through the constructor
// ==
var reInstantiatedColorObjects =[];

for(var i = 0; i < actualJavascriptColorsArray.length; i++){
  var colorLS = actualJavascriptColorsArray[i].color;
  var clicksLS = actualJavascriptColorsArray[i].clicks;

  reInstantiatedColorObjects.push(
    new Color(
      colorLS, clicksLS
    )
  );
}
Color.allColors = reInstantiatedColorObjects;



// rendering
for(i = 0; i < Color.allColors.length; i++){
  Color.allColors[i].render();
}


// =========================individual if statements ===============
// // TESTS
// var red = new Color('red');
// var yellow = new Color('yellow');
// var green = new Color('green');


// // Objects are created, they have 0 clicks
// // lets check local storage and update the clicks
// if (localStorage.getItem('red') > 0){ //tODO: why not while
//   red.clickCount = localStorage.getItem('red');
// } else {
//   // do nothing ( it already starts at 0);
// }
// if(localStorage.getItem('yellow') > 0){
//   yellow.clickCount = localStorage.getItem('yellow');
// }

// if(localStorage.getItem('green') > 0){
//   green.clickCount = localStorage.getItem('green');
// }

// //make sure to do this before we render them

// console.log(red);

// red.render();
// yellow.render();
// green.render();


