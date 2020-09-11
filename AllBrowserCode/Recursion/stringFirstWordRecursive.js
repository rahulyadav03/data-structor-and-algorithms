let flag = true;
function reverse(str) {
  if (!flag) {
    if (typeof str == "string") {
      if (str.length == 0) {
        return "";
      }
      return str.slice(str.length - 1) + reverse(str.slice(0, str.length - 1));
    }
  }
  // console.log('str ' + str)
  str = str.split(" ");

  //['my', 'name', is]
  flag = true;
  return reverse(str[0]);
}

console.log(reverse("my")); //'ym eman si'
