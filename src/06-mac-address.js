/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Number}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const arr = n.split('-');
  const arrOfLetters = 'ABCDEF0123456789';

  for (let j = 0; j < arr.length; j++) {
    for (let x = 0; x < arr[j].length; x++) {
      if (arrOfLetters.includes(arr[j][x], 0) === false || arr[j].length !== 2) {
        return false;
      }
    }
  }
  return true;
}

module.exports = isMAC48Address;
