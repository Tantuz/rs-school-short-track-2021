/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  const numbString = String(n);
  const arr = numbString.split('');
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(Number(arr[i]));
  }
  let result = newArr.reduce((sum, current) => sum + current, 0);
  if (result > 9) {
    result = getSumOfDigits(result);
  }
  return result;
}

module.exports = getSumOfDigits;
