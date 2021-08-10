const assert = require('chai').assert;
const tail = require('../tail')

const result = ["Hello", "Lighthouse", "Labs"];

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(result), ['Lighthouse', 'Labs']);
  });
  it("Original array should not be modified", () => {
    assert.deepEqual(result, ['Hello', 'Lighthouse', 'Labs']);
  });
});

