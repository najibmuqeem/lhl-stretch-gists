const blocksAway = function(directions) {
  let obj = { east: 0, north: 0 };
  //initializes object to return
  let horizontal = 0;
  let vertical = 0;
  let facedDirection = "up";
  let rightOrLeft = [];
  let distances = [];
  //variable declarations
  for (let i = 0; i < directions.length / 2; i++) {
    //adds each direction to the rightOrLeft array and each distance to the distances array
    rightOrLeft.push(directions[i * 2]);
    distances.push(directions[i * 2 + 1]);
  }
  if (rightOrLeft[0] === "left") {
    //caveat, since technically if the first direction is left, it actually means we're going up and not left (from the origin)
    facedDirection = "right";
  }
  for (let i = 0; i < distances.length; i++) {
    //travels each direction and distance, changing the horizontal and vertical values relative to the origin as necessary
    if (facedDirection === "up") {
      if (rightOrLeft[i] === "right") {
        horizontal += distances[i];
        facedDirection = "right";
      } else if (rightOrLeft[i] === "left") {
        horizontal -= distances[i];
        facedDirection = "left";
      }
    } else if (facedDirection === "down") {
      if (rightOrLeft[i] === "right") {
        horizontal -= distances[i];
        facedDirection = "left";
      } else if (rightOrLeft[i] === "left") {
        horizontal += distances[i];
        facedDirection = "right";
      }
    } else if (facedDirection === "right") {
      if (rightOrLeft[i] === "right") {
        vertical -= distances[i];
        facedDirection = "down";
      } else if (rightOrLeft[i] === "left") {
        vertical += distances[i];
        facedDirection = "up";
      }
    } else if (facedDirection === "left") {
      if (rightOrLeft[i] === "right") {
        vertical += distances[i];
        facedDirection = "up";
      } else if (rightOrLeft[i] === "left") {
        vertical -= distances[i];
        facedDirection = "down";
      }
    }
  }
  obj.east = horizontal;
  obj.north = vertical;
  //changes the east and north values to the correct ones
  return obj;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(
  blocksAway([
    "left",
    1,
    "right",
    1,
    "left",
    1,
    "right",
    1,
    "left",
    1,
    "right",
    1
  ])
);
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));
