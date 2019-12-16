const urlEncode = function(text) {
  let encodedText = "";
  for (let i = 0; i < text.length; i++) {
    //text.length dynamically gets smaller the more spaces are removed
    //will remove all spaces from each end regardless of how many
    if (text[0] === " ") {
      text = text.substring(1);
    }
    if (text[text.length - 1] === " ") {
      text = text.substring(0, text.length - 1);
    }
  }
  for (let i = 0; i < text.length; i++) {
    //loop to add each character to the encoded string or a %20 if the character is a space
    if (text[i] === " ") {
      encodedText += "%20";
    } else {
      encodedText += text[i];
    }
  }

  return encodedText;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
console.log(urlEncode("    test    "));
