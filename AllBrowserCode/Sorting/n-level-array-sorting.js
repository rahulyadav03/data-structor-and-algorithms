let myArry = [];

function sortArray(array, n) {
  if (n <= 0) return;
  console.log("myArry ", myArry);
  myArry.push(array[n - 1]);
  myArry.sort(function(a, b) {
    return a - b;
  });
  console.log("myArry >> ", myArry);
  sortArray(array, n - 1);
  return myArry;
}

console.log(sortArray([1, 2, 11, 12, 5, 6], 6));
