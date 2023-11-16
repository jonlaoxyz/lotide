// FUNCTION IMPLEMENTATION 
// Improved code with suggestions from AI re. using template literals

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`❤️  Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`👎 Assertion Failed: ${array1} !== ${array2}`);
  }
};


// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Bootcamp", "Bootcamp");
assertEqual(1, 1);
assertEqual("John", "Bat");
assertEqual(1, 8);