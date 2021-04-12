/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
// const matrix = [
//   [0, 1, 1, 2],
//   [0, 5, 0, 0],
//   [2, 0, 3, 3],
// ];

function getMatrixElementsSum(matrix) {
  let matrixSum = 0;
  for (let x = 0; x < matrix[0].length; x++) {
    for (let i = 0; i < matrix.length; i++) {
      if (matrix[i][x] === 0) {
        break;
      } else {
        matrixSum += matrix[i][x];
      }
    }
  }
  return matrixSum;
}
module.exports = getMatrixElementsSum;
