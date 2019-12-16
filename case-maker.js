let camelCase = function(input) {
  let convertedString = "";
  for (let i = 0; i < input.length; i++) {
    //loops through each character in the input
    if (input[i] === " ") {
      //converts the next character to upper case and adds it to the converted string if the current character is a space, then skips the next character because it has already been added
      convertedString += input[i + 1].toUpperCase();
      i++;
    } else {
      //adds the current character to the converted string
      convertedString += input[i];
    }
  }
  return convertedString;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
