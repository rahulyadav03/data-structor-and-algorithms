console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 7));

function binarySearch(arr, num) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let middle = Math.floor((start + end) / 2);
    if (arr[start] == num) return start;
    if (arr[end] == num) return end;
    if (arr[middle] == num) return middle;

    if (arr[middle] < num) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return -1;
}
