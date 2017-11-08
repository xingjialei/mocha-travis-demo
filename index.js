#!/usr/bin/node

var add = require('./calc.js').add;
var x = 0;
var y = 0;
var z = add(x,y);

console.log('x+y='+z);
console.log('0+0='+add('abc',4));
