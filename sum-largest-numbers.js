let sumLargestNumbers = function(arr) {
  let large1 = Math.max(...arr);
  arr.splice(arr.indexOf(large1), 1);
  let large2 = Math.max(...arr);
  const sum = large1 + large2;
  return sum;
};
console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
