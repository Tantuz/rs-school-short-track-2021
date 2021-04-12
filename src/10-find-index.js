/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function mid (start, end, array, value) {
  let medium = Math.round((start + end) / 2);
  if (array[medium] > value) {
    medium = mid(start, medium - 1, array, value);
  } else if (array[medium] < value) {
    medium = mid(medium + 1, end, array, value);
  }
  return medium;
}

function findIndex(array, value) {
  const start = 0;
  const end = array.length - 1;
  if (value < array[start] || value > array[end]) {
    return 'Error';
  }
  const medium = mid(start, end, array, value);
  return medium;
}

module.exports = findIndex;
