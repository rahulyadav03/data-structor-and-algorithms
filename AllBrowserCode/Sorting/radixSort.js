//helper functions

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num == 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

function radixSort(arr) {
  let maxDigitCount = mostDigits(arr);
  for (let i = 0; i < maxDigitCount; i++) {
    let digitBucket = Array.from({ length: 10 }, () => []);
    for (let k = 0; k < arr.length; k++) {
      digitBucket[getDigit(arr[k], i)].push(arr[k]);
    }
    console.log("digitBucket ", digitBucket);
    arr = [].concat(...digitBucket);
    console.log("arr ", arr);
  }
  return arr;
}

radixSort([23, 345, 5467, 12, 2345, 9852]);
