
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    return console.log(`❤️  Assertion Passed: ${array1} === ${array2}`);
  }
  return console.log(`👎 Assertion Failed: ${array1} !== ${array2}`);
};

const eqArrays = (array1, array2) =>
  array1.length === array2.length &&
    array1.every((element, index) => element === array2[index]);

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