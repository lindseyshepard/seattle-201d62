'use strict';

// PD : put 3 rectangles on the page, give them a color, and a click count
// if I click one, its click goes up


// constructor
//    color, clickcount
// button needs to live on the html
//    render method
//          target
//          make content
//          append it
// counting
//    function ( event handler )
//        which counter do we increment? - if I have 3 rectangles, I need to increment the right one (red one, red gets a count)
//    tie that to the dom with an event listener

function Color(color){
  this.color = color;
  this.clickCount = 0;
}

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
  if(event.target.tagName === 'BUTTON'){
    console.log(event.target);
    // check each id
    if(event.target.id ==='red'){
      red.clickCount++;
      event.target.textContent = red.clickCount;
    }
    if(event.target.id === 'yellow'){
      yellow.clickCount++;
      event.target.textContent = yellow.clickCount;

    }

  }
}

// event delegation - instead of tracking 3 button clicks and adding an event to each, we will add a generic event to the parent ( the ul )
var buttonList = document.getElementById('buttons'); // the ul containing the buttons

buttonList.addEventListener('click', countClicks);





// TESTS
var red = new Color('red');
var yellow = new Color('yellow');
var green = new Color('green');

console.log(red);

red.render();
yellow.render();
green.render();


