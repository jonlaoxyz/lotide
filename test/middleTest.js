
// const assertArraysEqual = require('../assertArraysEqual');
// const middle = require('../middle');
const assert = require('chai').assert;
const middle   = require('../middle');


//  Test Cases

describe("#middle", () => {
  it("should return [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it("should return [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  it("should return [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("make sure the original array was not altered by the middle function", () => {
    const words = ["hello", "world", "lighthouse"];
    const result = middle(words);
    assert.strictEqual(words.length, 3);
  });
});
