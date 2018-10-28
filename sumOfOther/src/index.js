module.exports = function sumOfOthers(arr) {
  function sum() {
    return arr.reduce((a, b) => a + b, 0);
  }

  const sumOther = [];
  for (let i = 0; i < arr.length; i += 1) {
    sumOther[i] = sum(sumOfOthers) - arr[i];
  }
  return sumOfOthers;
};
