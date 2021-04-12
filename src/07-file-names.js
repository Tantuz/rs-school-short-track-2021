/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const resultArr = [];
  for (let i = 0; i < names.length; i++) {
    let counter = 1;
    if (resultArr.includes(names[i])) {
      let newName = ''.concat(names[i], '(', String(counter), ')');
      while (resultArr.includes(newName)) {
        counter++;
        newName = ''.concat(names[i], '(', String(counter), ')');
      }
      resultArr.push(newName);
    } else {
      resultArr.push(names[i]);
    }
  }
  return resultArr;
}

module.exports = renameFiles;
