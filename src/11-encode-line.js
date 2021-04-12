/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let newStr = '';
  let amount = 0;
  let letter = '';
  for (let i = 0; i < str.length; i++) {
    if (letter.length === 0) {
      letter = str[i];
    }
    if (str[i] === letter) {
      amount++;
    } else {
      if (amount === 1) {
        newStr += letter;
      } else {
        newStr += String(amount) + letter;
      }
      amount = 1;
      letter = str[i];
    }
  }
  if (newStr.length === 0) {
    return '';
  }
  if (amount === 1) {
    newStr += letter;
  } else {
    newStr += String(amount) + letter;
  }
  return newStr;
}

module.exports = encodeLine;
