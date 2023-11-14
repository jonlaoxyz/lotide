const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return console.log(`👎 Assertion Failed: ${actual} !== ${expected}`);
  }
  return console.log(`❤️  Assertion Passed: ${actual} === ${expected}`);
};

const tail = function(array) {
  const newArray = array.slice(1);
  return newArray;
};


// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!