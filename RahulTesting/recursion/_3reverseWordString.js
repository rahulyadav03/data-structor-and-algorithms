function reverseWord(arr, newStr) {
  if (arr.length <= 0) {
    return arr;
  }
  return (
    arr.slice(arr.length - 1) +
    reverseWord(arr.slice(0, arr.length - 1), newStr)
  );
}

function reverseName(str) {
  str = str.split(" ");
  var newStr = "";
  for (let i = 0; i < str.length; i++) {
    newStr = newStr + " " + reverseWord(str[i]);
  }
  return newStr;
}

console.log(reverseName("my name is rahul"));
//my name is rahul ---> ym eman si luhar
