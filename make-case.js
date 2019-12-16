const makeCase = function(input, cases) {
  //there must be a cleaner way to do this
  //I coded this so it does not matter where the user specifies the case in the case array (e.g. can use "['vowel', 'pascal']" or "['pascal', 'vowel']")
  let convertedString = "";
  let convertedString2 = "";
  let convertedString3 = "";
  //three variables for the three levels of precedence
  if (!Array.isArray(cases)) {
    //convert cases to an array if it is not already an array
    cases = [cases];
  }
  if (cases[0] === "camel" || cases[1] === "camel") {
    //camel case logic
    for (let i = 0; i < input.length; i++) {
      if (input[i] === " ") {
        convertedString += input[i + 1].toUpperCase();
        i++;
      } else {
        convertedString += input[i];
      }
    }
  } else if (cases[0] === "pascal" || cases[1] === "pascal") {
    //pascal case logic
    convertedString += input[0].toUpperCase();
    for (let i = 1; i < input.length; i++) {
      if (input[i] === " ") {
        convertedString += input[i + 1].toUpperCase();
        i++;
      } else {
        convertedString += input[i];
      }
    }
  } else if (cases[0] === "snake" || cases[1] === "snake") {
    //snake case logic
    for (let i = 0; i < input.length; i++) {
      if (input[i] === " ") {
        convertedString += "_";
      } else {
        convertedString += input[i];
      }
    }
  } else if (cases[0] === "kebab" || cases[1] === "kebab") {
    //kebab case logic
    for (let i = 0; i < input.length; i++) {
      if (input[i] === " ") {
        convertedString += "-";
      } else {
        convertedString += input[i];
      }
    }
  } else if (cases[0] === "title" || cases[1] === "title") {
    //title case logic
    convertedString += input[0].toUpperCase();
    for (let i = 1; i < input.length; i++) {
      if (input[i] === " ") {
        convertedString += " " + input[i + 1].toUpperCase();
        i++;
      } else {
        convertedString += input[i];
      }
    }
  }
  if (convertedString.length === 0) {
    //if none of the above cases were specified, use the input for the following cases
    convertedString = input;
  }
  if (cases[0] === "vowel" || cases[1] === "vowel") {
    //vowel case logic
    for (let i = 0; i < convertedString.length; i++) {
      if (
        convertedString[i] === "a" ||
        convertedString[i] === "e" ||
        convertedString[i] === "o" ||
        convertedString[i] === "i" ||
        convertedString[i] === "u"
      ) {
        convertedString2 += convertedString[i].toUpperCase();
      } else {
        convertedString2 += convertedString[i];
      }
    }
  } else if (cases[0] === "consonant" || cases[1] === "consonant") {
    //consonant case logic
    for (let i = 0; i < convertedString.length; i++) {
      if (
        !(
          convertedString[i] === "a" ||
          convertedString[i] === "e" ||
          convertedString[i] === "i" ||
          convertedString[i] === "o" ||
          convertedString[i] === "u"
        )
      ) {
        convertedString2 += convertedString[i].toUpperCase();
      } else {
        convertedString2 += convertedString[i];
      }
    }
  }
  if (convertedString2.length === 0) {
    //if neither vowel nor consonant cases were specified, use the string that results from the logic of the cases before vowel/consonant for the following cases
    //if none of those cases were specified, use the input for the following cases
    convertedString2 = convertedString;
    if (convertedString2 === 0) {
      convertedString2 = input;
    }
  }
  if (cases[0] === "upper" || cases[1] === "upper") {
    //upper case logic
    convertedString3 = convertedString2.toUpperCase();
  } else if (cases[0] === "lower" || cases[1] === "lower") {
    //lower case logic
    convertedString3 = convertedString2.toLowerCase();
  }
  if (convertedString3.length === 0) {
    //if neither upper nor lower cases were specified, use the string that results from the vowel/consonant case logic as the final string
    //if neither vowel nor consonant cases were specified, use the string that results from the logic of the cases before vowel/consonant as the final string
    //if none of those cases were specified, use the input as the final string
    convertedString3 = convertedString2;
    if (convertedString3.length === 0) {
      convertedString3 = convertedString;
      if (convertedString3.length === 0) {
        convertedString3 = input;
      }
    }
  }
  return convertedString3;
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
