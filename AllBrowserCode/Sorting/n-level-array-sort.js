function merge(arr1, arr2) {
  let i = 0;
  let j = 0;
  let mergeArray = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr[i] < arr2[j]) {
      mergeArray.push(arr1[i]);
      i++;
    } else {
      mergeArray.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    mergeArray.push(arr[i]);
    i++;
  }

  while (j < arr2.length) {
    mergeArray.push(arr2[j]);
    j++;
  }

  return mergeArray;
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let middle = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, middle - 1));
  let right = mergeSort(arr.slice(middle));

  merge(left, right);
}

console.log(mergeSort([4, 7, 5, 2, 8, 9, 3]));
