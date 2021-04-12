/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const arrResult = arr;
  for (let i = 0; i < (arrResult.length - 1); i++) {
    if (arrResult[i] !== -1) {
      for (let j = i + 1; j < arrResult.length; j++) {
        if (arrResult[j] !== -1) {
          if (arrResult[i] > arrResult[j]) {
            [arrResult[i], arrResult[j]] = [arrResult[j], arrResult[i]];
          }
        }
      }
    }
  }
  return arrResult;
}

module.exports = sortByHeight;
