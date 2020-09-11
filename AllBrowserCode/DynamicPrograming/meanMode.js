function meanMedian(input1, input2) {
  function findDifferennce(sum, arr1, diff) {
    console.log("sum ", sum, "arr1 >> ", arr1, "diff", diff);
    let meanNum = parseInt(sum - diff * arr1.length);
    console.log("meanNum ", meanNum, "diff ", diff);
    let num = parseInt(meanNum / arr1.length);
    console.log("num >> ", num);
    return num;
  }
  let maxMean = -Infinity;
  let maxMinArray = [];
  for (let i = 0; i < input1 - 2; i++) {
    console.log("i ", i);
    let tempSum = 0;
    let tempArray = [];
    let count = 0;
    for (let j = i; j < input1; j++) {
      tempArray.push(input2[j]);
      tempSum += input2[j];
      count++;
      console.log(tempArray, tempSum);
      if (count == 3) {
        console.log("count ", count);
        let diffNum = findDifferennce(tempSum, tempArray, tempArray[1]);
        if (diffNum > maxMean) {
          maxMean = diffNum;
          maxMinArray = tempArray;
          console.log("maxMinArray ", maxMinArray);
        }
        break;
      }
    }
  }
  return maxMinArray;
  throw "UnsupportedException meanMedian( input1, input2)";
}

meanMedian(5, [1, 2, 2, 3, 3]);
