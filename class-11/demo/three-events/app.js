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



Color.allColors = [];

function Color(color) {
    this.color = color;
    this.clickCount = 0;
    Color.allColors.push(this);
}






Color.prototype.render = function() {
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

function countClicks(event) {
    if (event.target.tagName === 'BUTTON') {
        console.log(event.target);
        // check each id
        if (event.target.id === 'red') {
            red.clickCount++;
            event.target.textContent = red.clickCount;
        }
        if (event.target.id === 'yellow') {
            yellow.clickCount++;
            event.target.textContent = yellow.clickCount;

        }

    }
}

// event delegation - instead of tracking 3 button clicks and adding an event to each, we will add a generic event to the parent ( the ul )
var buttonList = document.getElementById('buttons'); // the ul containing the buttons

buttonList.addEventListener('click', countClicks);




//====== what if we stored all 3 in an array together =====
new Color('red');
new Color('yellow');
new Color('green');
console.log(Color.allColors);
localStorage.setItem('allTheColors', Color.allColors);

var colorsFromLocalStorage = localStorage.getItem('allTheColors');
console.log(colorsFromLocalStorage);

var allColorsThatHaveBeenmade = JSON.stringify(Color.allColors);
console.log('allColorsThatHaveBeenmade', allColorsThatHaveBeenmade);
localStorage.setItem('colorsFromLocalStorage', allColorsThatHaveBeenmade);



// render
for (var i = 0; i < Color.allColors.length; i++) {
    Color.allColors[i].render();
}




// When I turn an object into stringified json it does not keep its prototype methods or knowledge about what type of thing it was
//what constructor it was an instance of




//================================
// // TESTS
// var red = new Color('red');
// var yellow = new Color('yellow');
// var green = new Color('green');




// ///objects are created they have 0 clicks
// // // lets check local storage and update click buttons
// // if (localStorage.getItem('red') > 0) {
//     red.clickCount = localStorage.getItem('red');
// } else {
//     //do nothing it's already at 0
// }

// if (localStorage.getItem('yellow') > 0) {

//     yellow.clickCount = localStorage.getItem('yellow');
// }
// if (localStorage.getItem('green') > 0) {


//     green.clickCount = localStorage.getItem('green');
// }
// //do this before you render them


// console.log(red);

// red.render();
// yellow.render();
// green.render();

//local storages steps

//1. save to local storage
//2. retreiev when you load
//3. prevent first time load errors (if conditionals here)