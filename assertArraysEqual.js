
const assertArraysEqual = function(array1, array2) {
  if (array1.length === array2.length &&
    array1.every((element, index) => element === array2[index])) {
    return console.log(`❤️  Assertion Passed: ${array1} === ${array2}`);
  }
  return console.log(`👎 Assertion Failed: ${array1} !== ${array2}`);
};

//
// TEST CODE
assertArraysEqual(["Lighthouse", "Labs"], ["Bootcamp"]);
assertArraysEqual(["Bootcamp"], ["Bootcamp"]);
assertArraysEqual([1], [1]);
assertArraysEqual(["John"], ["Bat"]);
assertArraysEqual([1], [8]);
assertArraysEqual([], []);