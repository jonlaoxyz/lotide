
const assertArrayEqual = function(array1, array2) {
  if (array1.length === array2.length &&
    array1.every((element, index) => element === array2[index])) {
    return console.log(`❤️  Assertion Passed: ${array1} === ${array2}`);
  }
  return console.log(`👎 Assertion Failed: ${array1} !== ${array2}`);
};

//
// TEST CODE
assertArrayEqual(["Lighthouse", "Labs"], ["Bootcamp"]);
assertArrayEqual(["Bootcamp"], ["Bootcamp"]);
assertArrayEqual([1], [1]);
assertArrayEqual(["John"], ["Bat"]);
assertArrayEqual([1], [8]);
assertArrayEqual([], []);