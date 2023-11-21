// test/tailTest.js

const assertEqual = require('../assertEqual');
const tail = require('../tail');


// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

const empty = [];
tail(empty); // no need to capture the return value since we are not checking it
assertEqual(empty.length, 3); // original array should still have 3 elements!

const single = [""];
tail(single); // no need to capture the return value since we are not checking it
assertEqual(single.length, 3); // original array should still have 3 elements!