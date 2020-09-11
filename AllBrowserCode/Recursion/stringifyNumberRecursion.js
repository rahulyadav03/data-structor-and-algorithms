/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/

function stringifyNumbers(obj) {
  for (var key in obj) {
    console.log("typeof ", typeof obj[key]);
    if (typeof obj[key] == "object") {
      stringifyNumbers(obj[key]);
    } else if (typeof obj[key] == "number") {
      console.log("hahahah");
      obj[key] = obj[key].toString();
      console.log("typeof ", typeof obj[key]);
    }
  }
  return JSON.stringify(obj);
}

console.log(
  stringifyNumbers({
    num: 1,
    test: [],
    data: {
      val: 4,
      info: {
        isRight: true,
        random: 66
      }
    }
  })
);
