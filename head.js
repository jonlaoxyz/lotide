const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`❤️  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(array) {
  return array[0];
};


assertEqual(head([5,6,7]), 5);
assertEqual(head([2,4,6]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Drama", "Lighthouse", "Labs"]), "Hello");