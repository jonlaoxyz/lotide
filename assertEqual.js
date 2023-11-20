// FUNCTION IMPLEMENTATION 
// Improved code with suggestions from AI re. using template literals

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};


module.exports = assertEqual;