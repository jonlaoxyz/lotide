const eqArrays = (array1, array2) =>
  array1.length === array2.length &&
    array1.every((element, index) => element === array2[index]);


const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`❤️  Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`👎 Assertion Failed: ${array1} !== ${array2}`);
  }
};

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for(let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};

module.exports = letterPositions;

console.log(letterPositions("hello world").l);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("dog").o, [2]);
