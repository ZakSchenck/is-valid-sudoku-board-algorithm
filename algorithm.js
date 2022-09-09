const sudokuBoard = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9],
];

const isValidSudoku = (board) => {
  const requiredNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let chunk = 0;
  let checkerArray = [];
  let horizDiagArray = [];

    // Loop checks if horizontal board is true
    while (chunk < 9) {
      if (requiredNums.every((item) => board[chunk].includes(item))) {
        checkerArray.push(true);
      } else {
        checkerArray.push(false);
      }
      chunk++;
    }

    chunk = 0;
    // Loop checks if diagonal board is true
    while (chunk < 9) {
      horizDiagArray.push(board[chunk][chunk]);
      if (requiredNums.every((item) => board[chunk].includes(item))) {
        checkerArray.push(true);
      } else {
        checkerArray.push(false);
      }
      chunk++;
    }

  chunk = 0;
  horizDiagArray = [];

  // Loop checks if vertical boards are true
  while (chunk < 9) {
      for (let i = 0; i < board.length; i++) {
        horizDiagArray.push(board[i][chunk]);
      }
      if (requiredNums.every((item) => board[chunk].includes(item))) {
        checkerArray.push(true);
      } else {
        checkerArray.push(false);
      }
    chunk++;
  }


  return checkerArray.every((item) => item === true);
};

console.log(isValidSudoku(sudokuBoard));
// returns true, because this sudoku board array is solved and valid
