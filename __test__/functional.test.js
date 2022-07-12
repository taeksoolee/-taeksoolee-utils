const pipe = require('../src/functions/pipe');

it("1 is 1", () => {
  expect(1).toBe(1);
});

describe('test pipe', () => {
  it("shuffle", () => {
    const pipe = require('../src/functions/pipe');
    const shuffle = require('../src/functions/shuffle');
  
    const shuffled = pipe([1,2,3], shuffle);
    expect(shuffled).toBe(expect);
  });

  it("check undefined", () => {
    const checkUndefined = (v) => typeof v === 'undefined';
    const b = pipe(1, checkUndefined);
    expect(b).toBe(false);
  })
})



