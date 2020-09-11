function timeConversion(s) {
  let str = s.split("");

  /*
   * Write your code here.
   */
  let HrsName = str[str.length - 2];
  if (HrsName == "P") {
    str[0].concat(str[1]);
  }
}

console.log(timeConversion("07:05:45PM"));
