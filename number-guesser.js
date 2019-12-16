let prompt = require("prompt-sync")();

let floor = Math.ceil(prompt("Input min number to guess: "));
let ceil = Math.floor(prompt("Input max number to guess: "));
//random number min and max
let randNum = Math.floor(Math.random() * (ceil - floor + 1)) + floor;
//uses Math.floor() and +1 to make min and max values equally as likely to roll as any other number in between the two
let arr = [];
//array to track which numbers have been guessed and how many

for (let i = floor; i <= ceil; i++) {
  //loops "ceil-floor" times, as that is the maximum number of possible within-bounds and number-formatted unique guesses
  let answer = prompt(
    "Guess a number betwwen " + floor + " and " + ceil + " inclusive: "
  );
  if (arr.includes(answer)) {
    //doesn't count the guess if it is already in the array of guesses
    console.log("Already Guessed!");
    i--;
  } else if (answer < floor || answer > ceil) {
    //doesn't count the guess if it is out of bounds
    console.log("Guess not in bounds!");
    i--;
  } else if (isNaN(answer)) {
    //doesn't count the guess if it is not a number
    console.log("Not a number! Try again!");
    i--;
  } else if (answer < randNum) {
    //too low, add guess to array
    console.log("Too Low!");
    arr.push(answer);
  } else if (answer > randNum) {
    //too high, add guess to array
    console.log("Too High!");
    arr.push(answer);
  } else if (answer == randNum) {
    //correct, add final guess to array, display array length as number of guesses, and end the loop
    arr.push(answer);
    console.log("You got it! You took " + arr.length + " attempts!");
    i = ceil;
  }
}
