function insertionSort(arr) {
  const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  };

  for (let i = 0; i < arr.length - 1; i++) {
    let currentVal = arr[i];
    for (let j = i + 1; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        swap(arr, j, j - 1);
      }
    }
  }
  return arr;
}

console.log(insertionSort([5, 3, 4, 1, 2]));
