const organizeInstructors = function(instructors) {
  let courses = [];
  let organizedInstructors = {};
  let names = [];
  // make some empty variables
  for (let i = 0; i < instructors.length; i++) {
    for (let j = 0; j < instructors.length; j++) {
      //loops through the instructor object and adds the course name to the courses variable iff it does not already exist in the courses variable
      if (instructors[i].course != instructors[j].course) {
        courses.push(instructors[i].course);
      }
    }
  }

  for (let i = 0; i < courses.length; i++) {
    for (let j = 0; j < instructors.length; j++) {
      //loops through the courses variable and adds a name to the names variable iff the name matches the course key in the current cycle
      if (instructors[j].course === courses[i]) {
        names.push(instructors[j].name);
      }
      organizedInstructors[courses[i]] = names;
      //adds the name array to the course key
    }
    names = []; //resets the names array to restart the cycle
  }
  return organizedInstructors;
};

console.log(
  organizeInstructors([
    { name: "Samuel", course: "iOS" },
    { name: "Victoria", course: "Web" },
    { name: "Karim", course: "Web" },
    { name: "Donald", course: "Web" }
  ])
);
console.log(
  organizeInstructors([
    { name: "Brendan", course: "Blockchain" },
    { name: "David", course: "Web" },
    { name: "Martha", course: "iOS" },
    { name: "Carlos", course: "Web" }
  ])
);
