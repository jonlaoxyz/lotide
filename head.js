const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`❤️  Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`👎 Assertion Failed: ${array1} !== ${array2}`);
  }
};

const head = function(array) {
  return array[0];
};


assertEqual(head([5,6,7]), 5);
assertEqual(head([2,4,6]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Drama", "Lighthouse", "Labs"]), "Hello");