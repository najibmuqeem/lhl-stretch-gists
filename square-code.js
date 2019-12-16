const squareCode = function(message) {
  let newMessage = "";
  for (let i = 0; i < message.length; i++) {
    //loops through the input and removes the spaces
    if (message[i] != " ") {
      newMessage += message[i];
    }
  }
  let numCharsPerWord = Math.ceil(Math.sqrt(newMessage.length));
  let numWords = Math.ceil(newMessage.length / numCharsPerWord);
  let tempMessage = "";
  let index = 0;
  for (let i = 0; i < numWords; i++) {
    //adds each character from the modified message to a temp message variable separated by spaces based on the maximum number of characters per word and the number of words
    for (j = 0; j < numCharsPerWord; j++) {
      if (newMessage[j] != undefined) {
        tempMessage += newMessage[j];
      }
      index++;
    }
    newMessage = newMessage.substring(index);
    index = 0;
    tempMessage += " ";
  }
  let encodedArr = [];
  let finalMessage = "";
  for (let i = 0; i < tempMessage.length; i++) {
    //turns each word into an element of an array for easier indexing
    for (let j = 0; j < tempMessage.length; j++) {
      if (tempMessage[j] != " ") {
        finalMessage += tempMessage[j];
      } else {
        if (tempMessage[j + 1] != undefined) {
          tempMessage = tempMessage.substring(j + 1);
          i = 0;
        } else {
          i = tempMessage.length;
        }
        j = tempMessage.length;
      }
    }
    encodedArr.push(finalMessage);
    finalMessage = "";
  }
  for (let i = 0; i < encodedArr[0].length; i++) {
    //adds the characters to the final message string in the desired order
    for (let j = 0; j < encodedArr.length; j++) {
      if (encodedArr[j][i] != undefined) {
        finalMessage += encodedArr[j][i];
      }
    }
    finalMessage += " ";
  }

  return finalMessage;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(
  squareCode(
    "if man was meant to stay on the ground god would have given us roots"
  )
);
