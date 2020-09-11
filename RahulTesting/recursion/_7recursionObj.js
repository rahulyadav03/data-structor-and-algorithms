const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz"
          }
        }
      }
    }
  }
};
var newArray = [];
function collectArray(obj) {
  for (let objKey in obj) {
    if (typeof obj[objKey] == "object") {
      collectArray(obj[objKey]);
    } else {
      if (typeof obj[objKey] == "string") {
        newArray.push(obj[objKey]);
      }
    }
  }
  return JSON.stringify(newArray);
}

console.log(collectArray(obj));
