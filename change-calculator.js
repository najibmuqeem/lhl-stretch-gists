let calculateChange = function(total, cash) {
  //this seems like a super tedious way to go about this, but I can't think of any way to make my code more dry.
  let diff = cash - total;
  //declare the object "change" which I will put values into
  let change = {
    twentyDollar: 0,
    tenDollar: 0,
    fiveDollar: 0,
    twoDollar: 0,
    oneDollar: 0,
    quarter: 0,
    dime: 0,
    nickel: 0,
    penny: 0
  };
  //following conditionals get the highest denomination then take away that denomination from the current value of "diff"
  if (diff >= 2000) {
    change.twentyDollar = Math.floor(diff / 2000);
    diff %= 2000;
  }
  if (diff >= 1000) {
    change.tenDollar = Math.floor(diff / 1000);
    diff %= 1000;
  }
  if (diff >= 500) {
    change.fiveDollar = Math.floor(diff / 500);
    diff %= 500;
  }
  if (diff >= 200) {
    change.twoDollar = Math.floor(diff / 200);
    diff %= 200;
  }
  if (diff >= 100) {
    change.oneDollar = Math.floor(diff / 100);
    diff %= 100;
  }
  if (diff >= 25) {
    change.quarter = Math.floor(diff / 25);
    diff %= 25;
  }
  if (diff >= 10) {
    change.dime = Math.floor(diff / 10);
    diff %= 10;
  }
  if (diff >= 5) {
    change.nickel = Math.floor(diff / 5);
  }
  change.penny = diff; //remaining "diff" value is number of pennies
  //following conditionals delete "change" properties if their values are 0
  //again, I don't know of any way to index through an object's keys in the order that I specify, so I didn't use a loop, which would have made the code more dry
  if (change.twentyDollar === 0) {
    delete change.twentyDollar;
  }
  if (change.tenDollar === 0) {
    delete change.tenDollar;
  }
  if (change.fiveDollar === 0) {
    delete change.fiveDollar;
  }
  if (change.twoDollar === 0) {
    delete change.twoDollar;
  }
  if (change.oneDollar === 0) {
    delete change.oneDollar;
  }
  if (change.quarter === 0) {
    delete change.quarter;
  }
  if (change.dime === 0) {
    delete change.dime;
  }
  if (change.nickel === 0) {
    delete change.nickel;
  }
  if (change.penny === 0) {
    delete change.penny;
  }
  return change;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
