// const eqArrays = (array1, array2) =>
//   array1.length === array2.length &&
    // array1.every((element, index) => element === array2[index]);
const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅  Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${array1} !== ${array2}`);
  }
};

module.exports = assertArraysEqual;

