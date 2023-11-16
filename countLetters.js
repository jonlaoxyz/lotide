const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`👎 Assertion Failed: ${actual} !== ${expected}`);
  } else {
  console.log(`❤️  Assertion Passed: ${actual} === ${expected}`);
  }
};

const countLetters = function(words) {
  let result = {};
  let noSpace = words.split(" ").join("");
  for (let i = 0; i < noSpace.length; i++) {
    let c = noSpace[i];
    result[c] = (result[c] ? result[c] : 0) + 1;
  }
  return result;
};

console.log(countLetters("lighthouse in the house"));
console.log(countLetters("LHL"));
console.log(assertEqual(countLetters("LHL"), { l: 2, h: 1 }));
