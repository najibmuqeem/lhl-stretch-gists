const urlDecode = function(text) {
  let obj = {};
  let key = "";
  let value = "";
  //declare object to return and key-value pair
  let tempString = "";
  for (let i = 0; i < text.length; i++) {
    //loops through the text string and replaces all '%20's with spaces
    if (text[i] === "%" && text[i + 1] === "2" && text[i + 2] === "0") {
      tempString += " ";
      i += 2;
    } else {
      tempString += text[i];
    }
  }
  let newString = tempString;
  for (let i = 0; i < newString.length; i++) {
    //loops through the modified text and separates into key-value pairs depending on whether the current character is "=", "&", or the last character in the string
    if (newString[i] === "=") {
      key = newString.substring(0, i);
      newString = newString.substring(i + 1);
      i = 0;
    } else if (newString[i] === "&") {
      value = newString.substring(0, i);
      newString = newString.substring(i + 1);
      i = 0;
    } else if (newString[i + 1] === undefined) {
      value = newString;
    }
    if (key != "") {
      //adds the key-value pair to the object
      obj[key] = value;
    }
  }
  return obj;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
