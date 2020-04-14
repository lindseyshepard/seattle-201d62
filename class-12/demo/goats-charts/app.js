'use strict';

GoatImage.allGoats = []; // array for GoatImages

function GoatImage(potatoName, imageSrc){
  this.name = potatoName;
  this.imageSrc = imageSrc;
  this.clickCount = 0;

  GoatImage.allGoats.push(this);
}

GoatImage.clicks = 1;
GoatImage.maxClicks = 15;



GoatImage.prototype.render = function(){

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


function handleClickOnGoatImage(eventPotato) {
  if (GoatImage.clicks < GoatImage.maxClicks) {
    console.log('you clicked me' + GoatImage.clicks);
    GoatImage.clicks++;

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
    if (eventPotato.target.id === 'images/sweater-goat.jpg') {
      GoatImage.allGoats[3].clickCount++;
      console.log('you clicked on smiling');

    }

    putNewGoatsOnPage();


  } else if(GoatImage.clicks === GoatImage.maxClicks){
    makeChart();
  }
}

function putNewGoatsOnPage(){
  var target = document.getElementById('goats');

  target.innerHTML = ''; // property on any tag, stands for all the inner html


  for(var i = 0; i < 2; i++){
    var randoIndex = Math.floor(Math.random() * GoatImage.allGoats.length); // 0, 1, 2,3, 4
    GoatImage.allGoats[randoIndex].render();
    // TODO: prevent repeat
  }




}

var ulEl = document.getElementById('goats');
ulEl.addEventListener('click', handleClickOnGoatImage);





// TESTS
var kissing = new GoatImage('cruisin', 'images/kissing-goat.jpg');
var sassy = new GoatImage('sassy', 'images/sassy-goat.jpg');
var smiling = new GoatImage('smiling', 'images/smiling-goat.jpg');

new GoatImage('sweater', 'images/sweater-goat.jpg');

putNewGoatsOnPage();

// ================== Chart stuff ================

// Plan :
/*
When they have clicked 4 times - put the chart there

Make a stacked bar chart with an translucent one and opaque one
visual ratio of shown to clicked
label the bars, label the graph separate


*/

function makeChart(){

  var ctx = document.getElementById('goatChart').getContext('2d');


  // Labels
  // I wanted to change somehting on my chart - I found out what it was, and made something that matched, then replaced it
  // ['January', 'February', 'March', 'April', 'May', 'June', 'July']
  // I need an array of Strings
  // I need the names of the goats
  var namesOfGoats = [];

  for(var i = 0; i < GoatImage.allGoats.length; i++){
    namesOfGoats.push(GoatImage.allGoats[i].name);
  }
  console.log(namesOfGoats);


  // label
  // just a string
  // I can replace that inline

  // data (comes from goat clicks)
  // data type array (of numbers )[0, 10, 5, 2, 20, 30, 45]
  // clicks from the allGoatsArray objects
  var clicks = [];

  for(i = 0; i < GoatImage.allGoats.length; i++){
    clicks.push(GoatImage.allGoats[i].clickCount);
  }

  // =========== (mostly) boilerplate code from chartjs =============
  var chart = new Chart(ctx, {
  // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
      labels: namesOfGoats,
      datasets: [{
        label: 'Goats on Goats on Goats Clicked',
        backgroundColor: 'rgb(255, 99, 132, 0.4)',
        borderColor: 'rgb(255, 99, 132)',
        // this data === the datapoints
        data: clicks
      },
      {
        // TODO: make this the times seen data
        label: 'Goats on Goats on Goats Seen',
        backgroundColor: 'rgb(30, 99, 132, 0.4)',
        borderColor: 'rgb(30, 99, 132)',
        // this data === the datapoints
        data: [20, 15, 2, 4]
      }]
    },

    // Configuration options go here
    options: {
      scales: {
        xAxes: [{
          stacked: true
        }],
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}
