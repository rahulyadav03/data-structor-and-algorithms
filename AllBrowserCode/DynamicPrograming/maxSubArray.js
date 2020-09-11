//maxSubArray([1,2,5,2,8,1,5], 2);
maxSubArray([1, 2, 5, 2, 8, 1, 5], 4);
//maxSubArray([4,2,1,6,2], 4);

function maxSubArray(arr, no) {
  let largest = -Infinity;
  let temp = 0;

  for (let i = 0; i < no; i++) {
    temp += arr[i];
  }
  if (temp > largest) {
    largest = temp;
  }
  for (let j = no; j < arr.length; j++) {
    temp = temp - arr[j - no] + arr[j];
    if (temp > largest) {
      largest = temp;
    }
  }
  return largest;
}
