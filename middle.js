
const eqArrays = (array1, array2) =>
  array1.length === array2.length &&
    array1.every((element, index) => element === array2[index]);


const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`❤️  Assertion Passed: ${array1} === ${array2}`);
  }
  console.log(`👎 Assertion Failed: ${array1} !== ${array2}`);
};

const middle = function(array) {
  if (!array.length)
    return [];
  if (array.length === 2 || array.length === 1)
    return [];
  const mid = array.length / 2;
  if (array.length % 2 === 1) {
    return [array[Math.floor(mid)]];
  } else {
    return [
      array[mid - 1],
      array[mid],
    ];
  }
};
  


//  Test Cases
console.log(middle([]));
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

console.log(assertArraysEqual(middle([1]), [])); // => []
console.log(assertArraysEqual(middle([1, 2]), [])); // => []
console.log(assertArraysEqual(middle([1, 2, 3]), [2])); // => [2]
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])); // => [3]
console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])); // => [2, 3]
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])); // => [3, 4]
