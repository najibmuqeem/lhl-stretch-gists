const instructorWithLongestName = function(instructors) {
  let largeIndex = 0;
  const numLetters = [];
  for (let i = 0; i < instructors.length; i++) {
    numLetters.push(instructors[i].name.length);
  }
  for (let i = 0; i < instructors.length; i++) {
    if (instructors[i].name.length === Math.max(...numLetters)) {
      largeIndex = i;
    }
  }
  return instructors[largeIndex];
};

console.log(
  instructorWithLongestName([
    { name: "Samuel", course: "iOS" },
    { name: "Jeremiah", course: "Web" },
    { name: "Ophilia", course: "Web" },
    { name: "Donald", course: "Web" }
  ])
);
console.log(
  instructorWithLongestName([
    { name: "Matthew", course: "Web" },
    { name: "David", course: "iOS" },
    { name: "Domascus", course: "Web" }
  ])
);
