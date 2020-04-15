'use strict';

var message;

console.log(message);

// localStorage.setItem takes in a string of key, and a string of value
// puts things in local storage
// localStorage.setItem(<keyname>, <value>)
// localStorage.setItem('storedMessage', message);

// A moment ago I saved this into local storage. Now that I refresh, it should be saved, but we can see message is undefined
// I am going to retrieve it from local storage.

var messageThatCameFromLocalStorage = localStorage.getItem('storedMessage');
console.log('messageThatCameFromLocalStorage', messageThatCameFromLocalStorage);
