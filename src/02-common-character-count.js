/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let counter = 0;
  const minString = (s1 < s2) ? s1 : s2;
  let maxString = (s1 < s2) ? s2 : s1;

  for (let i = 0; i < minString.length; i++) {
    for (let j = 0; j < maxString.length; j++) {
      if (minString[i] === maxString[j]) {
        counter++;
        maxString = maxString.slice(0, j) + maxString.slice(j + 1, maxString.length);
        break;
      }
    }
  }
  return counter;
}

module.exports = getCommonCharacterCount;
