const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');

//
// TEST CODE
assertArraysEqual(["Lighthouse", "Labs"], ["Bootcamp"]);
assertArraysEqual(["Bootcamp"], ["Bootcamp"]);
assertArraysEqual([1], [1]);
assertArraysEqual(["John"], ["Bat"]);
assertArraysEqual([1], [8]);
assertArraysEqual([], []);
assertArraysEqual([1, 2, 3], [1, 2]); // should fail
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]); // should fail