function reverseStr(str) {
  console.log("str ", str);
  if (str.length == 0) {
    return "";
  }
  return str.slice(str.length - 1) + reverseStr(str.slice(0, str.length - 1));
}

function reverseName(str) {
  str = str.split(" ");
  let newStr = "";
  for (var i = 0; i < str.length; i++) {
    newStr = newStr + " " + reverseStr(str[i]);
  }
  return newStr;
}

console.log(reverseName("my name is rahul"));
//my name is rahul ---> ym eman si luhar
