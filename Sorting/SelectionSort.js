function SelectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i];
    let min = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[min] && arr[j] < arr[j + 1]) {
        min = j;
      }
    }
    //console.log("arr[min ", arr[min]);
    arr[i] = arr[min];
    arr[min] = temp;
  }

  return arr;
}

console.log(SelectionSort([14, 33, 27, 10, 35, 19, 42, 44]));
