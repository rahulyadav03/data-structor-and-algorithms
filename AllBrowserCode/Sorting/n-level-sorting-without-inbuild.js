function sortArray(arr, n) {
  console.log("n ", n);
  if (n <= 1) {
    return arr;
  }
  sortArray(arr, n - 1);

  let last = arr[n - 1];
  let j = n - 2;

  while (j >= 0 && arr[j] > last) {
    arr[j + 1] = arr[j];
    j--;
  }
  arr[j + 1] = last;
}

console.log(sortArray([1, 2, 11, 12, 5, 6], 6));
