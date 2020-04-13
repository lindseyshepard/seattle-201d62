'use strict';

// <audio id="levees" src="levees.m4a" muted controls autoplay loop ></audio>

var levees = document.getElementById('levees');
var randomizer = document.getElementById('randomizer');
// <button id="randomizer">Click this button to randomly adjust the volume</button>

randomizer.addEventListener('click', function(){
  levees.volume = Math.random(); // 0.00000 -> 0.9999999999999999
  levees.autoplay = true;
});
