'use strict';


// PD : knights have a name and a color
var allMyKnights = [];

function Knight (name, color){
  this.name = name;
  this.color = color;
}

Knight.prototype.render = function render(){
  var target = document.getElementById('knights');
  var newLiEl = document.createElement('li');
  newLiEl.textContent = 'Sir ' + this.name + ' the Knight';
  newLiEl.style = 'background-color : ' + this.color;
  target.appendChild(newLiEl);
};

Knight.prototype.renderToTable = function(){

};

allMyKnights.push(new Knight ('Cynthia', 'orange'));
allMyKnights.push(new Knight('Ginger', 'pink'));
allMyKnights.push(new Knight('Macbeth', 'red'));

function renderAllKnights(){
  for (var i = 0; i < allMyKnights.length; i++) {
    allMyKnights[i].render();
  }
}
renderAllKnights();




function makeFinalRow(){
  // put on final row
  var target = document.getElementById('knights');
  var newLiEl = document.createElement('li');
  newLiEl.textContent = 'that is my knights';
  newLiEl.id = 'deleteMe';
  target.appendChild(newLiEl);
}
makeFinalRow();


function removeFinalRow(){
  var toDelete = document.getElementById('deleteMe');
  toDelete.remove();
}

// ============ knight event listener
var knightForm = document.getElementById('nightnight');

knightForm.addEventListener('submit', function(e){
  e.preventDefault();
  var name = e.target.name.value;
  // e.target.<name of input>.value
  var color = e.target.color.value;

  // var localNewKnight = new Knight(name, color);
  allMyKnights.push(new Knight(name, color));

  // length (3, -1 === 2), gets the last index
  // part 1, just delete the footer row, and put it back on

  // allMyKnights[allMyKnights.length -1].render();
  // // // allMyKnights[allMyKnights.length -1].renderAsTable(); // if you work with lists, just swap the rendering later

  // removeFinalRow();
  // makeFinalRow();


  // way 2 : delete it all, rerender it all
  var theUl = document.getElementById('knights');
  theUl.innerHTML = '';

  renderAllKnights();
  makeFinalRow();


});














// 1 find a target
var chatForm = document.getElementById('chatform');

// 3. attach a callback function - the function being called by the listener
// the name of my parameter is irrelevent it just needs to exist



// collect the name and message and put it in the chat list

// any time we use js to capture a submit event from a form, we need to use Event.prototype.preventDefault

//when form is submitted it creates an event with ALLL the information
// this is finding the relevent information

function handleChatting(eventPotatoTomato){

  eventPotatoTomato.preventDefault();
  // // ==== Learn how to find a value ====
  // //entire event
  // console.log('event : ' , eventPotatoTomato);
  // // event's target (form) event.target
  // console.log('target : ', eventPotatoTomato.target);
  // // we look at the property of the target that is the name of the input we want
  // // event.target.<inputname>
  // console.log('input : ', eventPotatoTomato.target.username);
  // // we look at the event's target's input's value
  // console.log('value : ' , eventPotatoTomato.target.username.value);

  var theirName = eventPotatoTomato.target.username.value;
  var theirMessage = eventPotatoTomato.target.message.value;
  console.log(theirMessage);


  // alert('hey ' + theirName);

  // find an element and change its color

}

// 2. add an event listener
chatForm.addEventListener('submit', handleChatting);

//==================== more forms


var form = document.getElementById('pets');
form.addEventListener('submit', function(event){
  event.preventDefault();

  var nameOfPet = event.target.petName.value;
  var petType = event.target.petType.value;
  // event.target.<nameOfEvent>.value;

  console.log(nameOfPet + ' is a ' + petType);
});

var iceCreamForm = document.getElementById('ice-cream');

// event handler, callback function
function handleOrdering(e){
  e.preventDefault();
  console.log(event);

  var target = event.target; // macro
  var theForm = event.target; // shorthand, saves typing `event.` every time

  var flavor = target.flavor.value;
  var scoops = theForm.scoops.value;

  // plan : alert - flavor, how about scoops + 3?
  // PEMDAS - parentheses exponents, multiplication, division, addition, subtraction
  console.log(typeof scoops);
  alert(flavor + ', how about ' + (parseInt(scoops) + 3));
}

iceCreamForm.addEventListener('submit', handleOrdering);
