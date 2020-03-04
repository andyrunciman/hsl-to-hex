const assert = require('assert');
const hsl = require('./index.js');
describe('hsl-to-hex', () => {
  it('should convert values correctly', () => {
    assert.deepStrictEqual(hsl(12, 1, 1), '#030303');
  });
  it('should convert values correctly', () => {
    assert.deepStrictEqual(hsl(1014, 100, 100), '#ffffff');
  });
});
