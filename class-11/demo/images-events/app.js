'use strict';

// display goats
// click on a goat and it gets clicks
// show new goats
// repeat 7 times
// let users know which was clicked the most

// DATA
// allGoats === [Goat, Goat, Goat] (how it would look in chrome)
// Goat constructor
//    name, image src, clickCount
//    make sure the instantiated goat objects end up in an array
// render method
//  make it look like
/*
    <li>
      <img src="images/cruisin-goat.jpg" alt="">
      <p>clicks : 0</p>
    </li>
*/

// click handler
//   check if its less than 7 times still ( global counter, maybe total votes)
//   click for selected goat goes up
//   change the picture ( both pics ); // make this a function

// TODO: turn off handler????

// change the pictures function
//  pics both change -
//      remove the old ones
//      render them again
//  randomizer that chooses pics
//    relies on an array for random choosing

var allGoats = []; // array for GoatImages

function GoatImage(potatoName, imageSrc){
  this.name = potatoName;
  this.imageSrc = imageSrc;
  this.clickCount = 0;

  allGoats.push(this); // take the object I am building and put it where I want it
}


GoatImage.prototype.render = function(){
/*
  <li>
    <img src="images/cruisin-goat.jpg" alt="">
    <p>clicks : 0</p>
  </li>
*/
  var target = document.getElementById('goats'); // the ul holding goats
  var newLi = document.createElement('li');

  var newP = document.createElement('p');
  newP.textContent = 'clicks : ' + this.clickCount;

  var newImg = document.createElement('img');
  newImg.src = this.imageSrc;
  newImg.id = this.imageSrc;

  newLi.appendChild(newImg);
  newLi.appendChild(newP);

  target.appendChild(newLi);

};

var clicks = 1;

function handleClickOnGoatImage(eventPotato) { // there is almost always a paramater called event (injected by chrome) - scary javascript
  if (clicks < 8) {
    console.log('you clicked me' + clicks);
    clicks++;

    // click on a goat
    // find which goat was clicked on
    console.log(eventPotato.target);
    console.log(eventPotato.target.src);

    if (eventPotato.target.id === 'images/kissing-goat.jpg'){
      kissing.clickCount++;
      console.log('you clicked on kissing');
    }
    if (eventPotato.target.id === 'images/sassy-goat.jpg') {
      sassy.clickCount++;
      console.log('you clicked on sassy');

    }
    if (eventPotato.target.id === 'images/smiling-goat.jpg') {
      smiling.clickCount++;
      console.log('you clicked on smiling');

    }

    putNewGoatsOnPage();


  }
}

function putNewGoatsOnPage(){
  var target = document.getElementById('goats');

  target.innerHTML = ''; // property on any tag, stands for all the inner html


  for(var i = 0; i < 2; i++){
    var randoIndex = Math.floor(Math.random() * allGoats.length); // 0, 1, 2,3, 4
    allGoats[randoIndex].render();
    // TODO: prevent repeat
  }




}

var ulEl = document.getElementById('goats');
ulEl.addEventListener('click', handleClickOnGoatImage);





// TESTS
var kissing = new GoatImage('cruisin', 'images/kissing-goat.jpg');
var sassy = new GoatImage('cruisin', 'images/sassy-goat.jpg');
var smiling = new GoatImage('cruisin', 'images/smiling-goat.jpg');

new GoatImage('sweater', 'images/sweater-goat.jpg');
// new GoatImage('out of hand', 'images/goat-out-of-hand.jpg');

// allGoats.push(kissing);
// allGoats.push(sassy);
// allGoats.push(smiling);

// kissing.render();
// sassy.render();

putNewGoatsOnPage();
