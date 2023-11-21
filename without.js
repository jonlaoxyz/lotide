const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`❤️  Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`👎 Assertion Failed: ${array1} !== ${array2}`);
  }
};

const eqArrays = (array1, array2) =>
  array1.length === array2.length &&
    array1.every((element, index) => element === array2[index]);

const without = function(source, itemsToRemove) {
  for (let i = source.length - 1; i >= 0; --i) {
    if (source[i] === itemsToRemove) {
      source.splice(i, 1); // Remove even numbers
    }
  }
  console.log(source);
  return source;
};

module.exports = without;

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
let result = without([1, 2, 3], [1]); // => [2, 3]
assertArraysEqual(result, [2, 3]); // => should PASS