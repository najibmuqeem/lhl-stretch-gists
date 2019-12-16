const multiplicationTable = function(maxValue) {
  let output = "";
  for (let i = 1; i <= maxValue; i++) {
    //loop the number of times given
    for (let j = 1; j <= maxValue; j++) {
      //adds each multiplication value on the same line
      output += j * i + " ";
    }
    output += "\n"; //create a new line after each iteration
  }
  return output;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
