/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const allDomains = domains;
  const map = {};
  let smallArr = [];
  for (let i = 0; i < allDomains.length; i++) {
    const arr = allDomains[i];
    smallArr = arr.split('.');
    const arr3 = [];
    let element = '';
    for (let j = smallArr.length - 1; j >= 0; j--) {
      if (arr3.length > 0) {
        const partOfDomain = ''.concat(element, '.', smallArr[j]);
        arr3.push(partOfDomain);
        element = partOfDomain;
      } else {
        const partOfDomain = ''.concat('.', smallArr[j]);
        arr3.push(partOfDomain);
        element += partOfDomain;
      }
    }
    for (let n = 0; n < arr3.length; n++) {
      if (arr3[n] in map === false) {
        map[arr3[n]] = 1;
      } else {
        let count = map[arr3[n]];
        count++;
        map[arr3[n]] = count;
      }
    }
  }
  return map;
}

module.exports = getDNSStats;
