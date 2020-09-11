countUniqueValue([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]);
//countUniqueValue([1,1,1,1,1,2]);

function countUniqueValue(arr) {
  let obj = {};
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    let char = arr[i];
    if (!obj[char]) {
      obj[char] = 1;
      count++;
    }
  }
  return count;
}
