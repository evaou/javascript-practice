// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

// algo
/*
init result matrix
startRow, startCol = 0
endRow, endCol = n-1
count = 1

while startRow <= endRow and startCol <= endCol
  loop col from startCol to endCol
    result[startRow][col] = count++
  startRow++

  loop row from startRow to endRwo
    result[row][endCol] = count++
  endCol--

  loop col from endCol to startCol
    result[endRow][col] = count++
  endRow--

  loop row from endRow to startRow
    result[row][startCol] = count++
  startCol++
*/

function matrix(n) {
  const result = [];

  for (let i = 0; i < n; i++) {
    result.push([]);
  }

  let startRow = 0;
  let endRow = n - 1;
  let startCol = 0;
  let endCol = n - 1;
  let count = 1;

  while (startRow <= endRow && startCol <= endCol) {
    // top row
    for (let col = startCol; col <= endCol; col++) {
      result[startRow][col] = count++;
    }
    startRow++;

    // right column
    for (let row = startRow; row <= endRow; row++) {
      result[row][endCol] = count++;
    }
    endCol--;

    // bottom row
    for (let col = endCol; col >= startCol; col--) {
      result[endRow][col] = count++;
    }
    endRow--;

    // left column
    for (let row = endRow; row >= startRow; row--) {
      result[row][startCol] = count++;
    }
    startCol++;
  }

  return result;
}

module.exports = matrix;
