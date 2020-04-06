'use strict';

// Arrays : containers for values, a collection of things
//          values are stored in the array at : index
var arr = ['a', 'b', 'c'];
arr[0] === 'a'; // a lives at 0
arr[1] === 'b'; // b lives at 1

// Objects : containers for values, representation of something real
//           values are stored in named keys (properties)
var genericObjectForExamples = {
  name: 'cold stone',
  key: 'value',
  property: 'other value',
  method: function () {
    console.log('I am a method');
  }
};
// console.log(arr);
// console.log(genericObjectForExamples);

// Accessing properties

// ==== object access notation =======
// access the value stored in the object genericObjectForExamples at the key 'name'
// console.log('property name : ' , genericObjectForExamples['name']);
// console.log('property key : ', genericObjectForExamples['key']);

// ==== dot notation ======
// console.log('property name : ', genericObjectForExamples.name);
// console.log('property "property" : ', genericObjectForExamples.property);

var iceCreamStore = {
  name : 'cold stone',
  averageCustomers : 9000,
  isOpen :true,
  flavors : ['sweet cream', 'oreo', 'mint chip', 'watermelon'],
  owner : {
    firstName : 'Ryan',
    'coolness' : 999,
    student : true,
    favoriteSports : ['soccer', 'baseball']
  }, //a method is a function that lives in an object
  method : function(){
    console.log('I am a method');
  },
  serveIceCream : function (whichIceCream){ // an index
    console.log('here is your ice cream, ' + iceCreamStore.flavors[whichIceCream]);
  },
  serveIceCreamUsingThis: function (whichIceCream) { // an index
    console.log('here is your ice cream, ' + this.flavors[whichIceCream]);
    console.log('from : ', this.name);
    console.log('from : ', iceCreamStore.name);
  }
};

// console.log('flavor 1 : ', iceCreamStore['flavors'][1]);
var flavorArray = iceCreamStore.flavors;
var secondFlavor = flavorArray[1];

// console.log('sport index 1 : ', iceCreamStore.owner.favoriteSports[1]);
// iceCreamStore.serveIceCream(2);
// iceCreamStore.serveIceCreamUsingThis(3);

// ================ adding properties outside the objects ===============
// My standard guideline is all or almost all properties should be in the curly braces
// the values should be in the object literal, the functions should be outside
// almost or almost all of the methods should be outside the curly braces



// ===================== Student Bade ==================
var student = {
  name : 'Bade'
};

student['birthday'] = 'April 9';
student.hometown = 'Denver';
student.sayHi = function(){
  console.log('hey I am ' + this.name + 'I am from ' + this.hometown);
};

// student.sayHi();

// =======================Student Bryant ====================

var student2 = {
  name: 'Bryant'
};

student2['birthday'] = 'April 9';
student2.hometown = 'Denver';
student2.sayHi = function () {
  console.log('hey I am ' + this.name + 'I am from ' + this.hometown);
};

// student2.sayHi();

// ==============================================================



/*
When logged in the console, the key value pairs do not maintain their order, i think they become alphabetical - this is also a hint that objects have no order (unlike arrays that have order and indexes)

everything in javascript is an object
object properties are stored as key value pairs
we will see key value pairs in other places
{key : 'value', 'age' : 10000}
obj['key'] || obj.key
index 0 = 'a';
arr[0];
var teacher = 'nicholas'
teacher;

*/

