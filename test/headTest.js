// // test/headTest.js

// const assertEqual = require('../assertEqual');
// const head = require('../head');
// // HeadTest

// assertEqual(head([5,6,7]), 5);
// assertEqual(head([2,4,6]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head(["Drama", "Lighthouse", "Labs"]), "Hello");


const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns '1' for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
  it("returns '4' for [4, 2, 8]", () => {
    assert.strictEqual(head([4, 2, 8]), 4); 
  });
});