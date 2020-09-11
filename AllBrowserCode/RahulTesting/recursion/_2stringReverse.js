let newStr = "";
function reverseName(str) {
  if (str.length <= 0) {
    return str;
  }
  return str.slice(str.length - 1) + reverseName(str.slice(0, str.length - 1));
}

console.log(reverseName("my name is rahul"));
//my name is rahul ---> ym eman si luhar
