const assert = require('assert');
const sumOfOthers = require('./src/index');

describe('Sum of other members in array', () => {
  it('1', () => {
    const sum = sumOfOthers([2, 3, 4, 1]);
    assert.deepEqual(sum, [8, 7, 6, 9]);
  });

  it('2', () => {
    const sum = sumOfOthers([1, 2, 3, 4]);
    assert.deepEqual(sum, [9, 8, 7, 6]);
  });

  it('3', () => {
    const sum = sumOfOthers([100500]);
    assert.deepEqual(sum, [0]);
  });

  it('4', () => {
    const sum = sumOfOthers([100500, -100500]);
    assert.deepEqual(sum, [-100500, 100500]);
  });

  it('5', () => {
    const sum = sumOfOthers([52574, -64, 541, 65462, 648956, 55, 851, 931, -41, 9741, -9842, -4232]);
    assert.deepEqual(sum, [712358, 764996, 764391, 699470, 115976, 764877, 764081, 764001, 764973, 755191, 774774, 769164]);
  });


});
