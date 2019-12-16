let repeatNumbers = function(data) {
  let output = "";
  let numToRepeat;
  let numRepetitions;
  for (let i = 0; i < data.length; i++) {
    //loop through the entire array and change which number to repeat and how many times it will be repeated
    numToRepeat = data[i][0];
    numRepetitions = data[i][1];
    for (let j = 0; j < numRepetitions; j++) {
      //add the number to repeat the specified number of times to the output
      output += numToRepeat;
    }
    if (i + 1 != data.length) {
      //put a comma and space after each iteration except for the last one
      output += ", ";
    }
  }
  return output;
};

console.log(repeatNumbers([[1, 10]]));
console.log(
  repeatNumbers([
    [1, 2],
    [2, 3]
  ])
);
console.log(
  repeatNumbers([
    [10, 4],
    [34, 6],
    [92, 2]
  ])
);
