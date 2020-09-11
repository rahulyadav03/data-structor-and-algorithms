let newArr = [];

function sortArray(arr, n) {
  if (n <= 0) {
    return;
  }

  newArr.push(arr[n - 1]);
  newArr.sort((a, b) => a - b);

  sortArray(arr, n - 1);
  return newArr;
}

console.log(sortArray([34, 23, 45, 65, 34, 23, 2, 4, 56], 9));
