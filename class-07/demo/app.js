'use strict';

// Constructors

function Flavor(flavor, color){
  this.flavor = flavor;
  this.color = color;
  this.cold = true;
}

Flavor.prototype.renderTableRow = function(){
  // 1. something to target( id, on an element )
  var tableElToTarget = document.getElementById('ice-cream');
  // 2. creating content
  // make a row,
  // then make three td, then put content in the tds, then attack them to the tr
  //  <tr>
  //   <td>Moose Tracks</td>
  //   <td>True</td>
  //   <td>Swirly</td>
  // </tr>
  var newTrEl = document.createElement('tr');
  var newTdEl = document.createElement('td'); // td A
  newTdEl.textContent = this.flavor; // td A
  newTrEl.appendChild(newTdEl); // td A on the screen

  // TODO: add cold and color

  newTdEl = document.createElement('td'); // makes a new td, stores it in the variable
  newTdEl.textContent = this.cold; // td A and change its text
  newTrEl.appendChild(newTdEl); // put td A in the tr, its there so this does nothing
  // this isredundant


  newTdEl = document.createElement('td'); // makes a new td, stores it in the variable
  // replace text, do nothing to add any more
  newTdEl.textContent = this.color;
  newTrEl.appendChild(newTdEl);

  for(var i = 0; i < 20; i++){
    newTdEl = document.createElement('td'); // makes a new td, stores it in the variable
    // replace text, do nothing to add any more
    newTdEl.textContent = this.color + i;
    newTrEl.appendChild(newTdEl);
  }

  // 3. add the content to the target
  // appendChild to the tableEl , attach the tr
  tableElToTarget.appendChild(newTrEl);
};

var mintChip = new Flavor('mint chip', 'green');
var chocolate = new Flavor('chocolate', 'brown');
mintChip.renderTableRow();
chocolate.renderTableRow();

function Car (color, make, model, citiesVisited){
  this.color = color;
  this.make = make;
  this.model = model;
  this.seats = ['front left', 'front right', 'back left', 'back right'];
  this.citiesVisited = citiesVisited;
}

var toyotaPrius = new Car('pink', 'toyota', 'prius', ['paris', 'france']);

function Mouse (buttons, dpi, pointer, wired){
  // debugger;
  // this refers to the new object in `this` function
  // this === {}
  this.buttons = buttons;
  this.dpi = dpi;
  this.pointerImage = pointer;
  this.wired = wired;

  // this.click = function () {
  //   console.log('clicked ' + this.buttons + ' buttons');
  // };
}

// equivilant to line 33 to 35, prototype is used outside the function
Mouse.prototype.click = function () {
  console.log('clicked ' + this.buttons + ' buttons');
};

var mousey = new Mouse(6, 9999, 'normal', false);
var mousey2 = new Mouse(1, 1, 'rainbow', true);
mousey.click();
mousey2.click();
























// Pets
/*
species
name
color
medical appointments
domestic
age
function : play (with another pet) (dynamic)
*/

var oreo = {
  species : 'cat',
  name : 'Oreo',
  color: 'grey',
  medicalAppointments : ['today', 'someday', 'flea stuff'],
  domestic : true,
  age : 2,
  lovable: true // this is true for all pets
};

oreo.play = function(pet){
  var resultString = this.name + ' is wrestling with ' + pet.name;
  if(this.age > pet.age){
    resultString = resultString + ', they are winning';
  } else {
    resultString += ', they are losing';
  }
  return resultString;
};

var ferran = {
  species : 'kittie',
  'name' : 'ferran',
  'color' : 'grey',
  medicalAppointments : ['sharpen claws', 'another day', 'brushing'],
  domestic: true,
  age: 12,
  lovable: true // this is not dynamic
};

// pet is a parameter
ferran.play = function (potato) {
  // this === ferran
  // potato === anything

  // sometimes potato === oreo, if we call ferran.play(oreo)
  var resultString = this.name + ' is wrestling with ' + potato.name;
  if (this.age > potato.age) {
    resultString = resultString + ', they are winning';
  } else {
    resultString += ', they are losing';
  }
  return resultString;
};


// Constructor functions
// functions whose job is to make objects
// they take in the dynamic pieces as parameters, and assign them as properties
// any work can happen in the function


// var ferran = {
//   species: 'kittie',
//   'name': 'ferran',
//   'color': 'grey',
//   medicalAppointments: ['sharpen claws', 'another day', 'brushing'],
//   domestic: true,
//   age: 12,
//   lovable: true
// };

// the parameters of any function are yours to name
// Pet('dog', 'tweak', 'black', ['be awesome'], false, 5)
// Pet('dog', 'tweak', 'black', ['be awesome'], false, 0.5)

// Factory function (DONt use these)
function PetFactory(species, namePotato, color, appointments, domestic, age){
  var newPet = {};
  newPet.species = species;
  newPet.name = namePotato; // when i use a parameter it needs to match, the property can be different than the parameter
  newPet.color = color;
  newPet.appointments = appointments;
  newPet.age = age * 7;

  // 5
  if(age < 1){ // all baby pets are wildlings // overrides user input
    newPet.domestic = false; // our assumption
  } else { // conforms to user input
    newPet.domestic = domestic; // input
  }

  newPet.lovable = true;

  newPet.play = function (pet) {
    var resultString = this.name + ' is wrestling with ' + pet.name;
    if (this.age > pet.age) {
      resultString = resultString + ', they are winning';
    } else {
      resultString += ', they are losing';
    }
    return resultString;
  };

  return newPet;
}

// Actual Constructor Function
function PetPotato(species, namePotato, color, appointments, domestic, age) {
  // secret code : this = {};
  this.name = namePotato; // when i use a parameter it needs to match, the property can be different than the parameter
  this.species = species;
  this.name = namePotato; // when i use a parameter it needs to match, the property can be different than the parameter
  this.color = color;
  this.appointments = appointments;
  this.age = age * 7;

  if (age < 1) { // all baby pets are wildlings // overrides user input
    this.domestic = false; // our assumption
  } else { // conforms to user input
    this.domestic = domestic; // input
  }

  this.lovable = true;

  this.play = function (pet) {
    var resultString = this.name + ' is wrestling with ' + pet.name;
    if (this.age > pet.age) {
      resultString = resultString + ', they are winning';
    } else {
      resultString += ', they are losing';
    }
    return resultString;
  };
  // secret code : return this
}

// our new keyword id `new`
var petFromFactory = PetFactory('dog', 'tweak', 'black', ['be awesome'], false, 0.5);

var tweak = new PetPotato('dog', 'tweak', 'black', ['be awesome'], false, 0.5);
var rampage = new PetPotato('dog', 'rampage', 'brindle', ['rampage'], true, 6);

// you don't define an object, there is an implied new object stored at `this`
//

