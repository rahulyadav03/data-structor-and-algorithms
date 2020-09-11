function isPalindrom(str) {
  console.log("str ", str);
  console.log("str[0] ", str[0]);
  console.log("str.slice ", str.slice(-1));
  if (str.length == 1) return true;
  if (str.length == 2) return str[0] === str[1];
  if (str[0] == str.slice(-1)) {
    return isPalindrom(str.slice(1, -1));
  }
  return false;
}
