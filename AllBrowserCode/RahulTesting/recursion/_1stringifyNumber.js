function stringifyNumbers(obj) {
  for (let objKey in obj) {
    if (typeof obj[objKey] == "object") {
      stringifyNumbers(obj[objKey]);
    } else {
      if (typeof obj[objKey] == "number") {
        obj[objKey] = obj[objKey].toString();
      }
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
