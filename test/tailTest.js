// test/tailTest.js

const assert = require('chai').assert;
const tail   = require('../tail');


describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
});

describe("#tail", () => {
  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });
});

