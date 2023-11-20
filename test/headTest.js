// test/headTest.js

const assertEqual = require('../assertEqual');
const head = require('../head');
// HeadTest

assertEqual(head([5,6,7]), 5);
assertEqual(head([2,4,6]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Drama", "Lighthouse", "Labs"]), "Hello");