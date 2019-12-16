function generateBoard(w, b) {
  let arr = [];
  for (let i = 0; i < 8; i++) {
    arr.push([]);
  }
  //initializes 8 empty arrays in 1 empty array (8 x 8 array)
  //could have done let arr = [[], [], ..., []]; but this way, the "8" in the for loop can be replaced with any number to create an i x i array
  let wx = w[0];
  let wy = w[1];
  let bx = b[0];
  let by = b[1];
  //gets x and y locations of queens
  for (let i = 0; i < 8; i++) {
    //creates the board with 0s as the squares and 1s as the queens' locations
    for (let j = 0; j < 8; j++) {
      if ((i === wx && j === wy) || (i === bx && j === by)) {
        arr[i].push(1);
      } else {
        arr[i].push(0);
      }
    }
  }
  return arr;
}
function queenThreat(board) {
  let threatened = false;
  let q1x = 0;
  let q1y = 0;
  let q2x = 0;
  let q2y = 0;
  //variable declarations
  let count = 0;
  //variable to determine if we are looking for the first queen or the second queen
  for (let i = 0; i < 8; i++) {
    //loops through the board and locates the x and y positions of each queen
    for (let j = 0; j < 8; j++) {
      if (count === 0 && board[i][j] === 1) {
        q1x = i;
        q1y = j;
        count++;
      } else if (count === 1 && board[i][j] === 1) {
        q2x = i;
        q2y = j;
      }
    }
  }
  if (q1x === q2x) {
    //vertically threatened
    threatened = true;
  }
  if (q1y === q2y) {
    //horizontally threatened
    threatened = true;
  }
  if (q1x + q1y === q2x + q2y) {
    //diagonally threatened
    threatened = true;
  }
  return threatened;
}
let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
whiteQueen = [0, 0];
blackQueen = [5, 7];
generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
