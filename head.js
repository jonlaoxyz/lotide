const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return console.log(`👎 Assertion Failed: ${actual} !== ${expected}`);
  }
  return console.log(`❤️  Assertion Passed: ${actual} === ${expected}`);
};

function head(element) {
  return element.find((element) => element = 1);
};


assertEqual(head([5,6,7]), 5);
assertEqual(head([2,4,6]), 5);
assertEqual(head(), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Drama", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(), "Hello");