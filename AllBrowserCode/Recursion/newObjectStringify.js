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
  //     var newObj = {};
  //     for(var key in obj){
  //         if(typeof obj[key] == 'object'){
  //             newObj[key] = stringifyNumbers(obj[key]);
  //         }else if(typeof obj[key] == 'number'){
  //             newObj[key] = obj[key].toString();
  //         }
  //     }
  //     return JSON.stringify(newObj);
  var newObj = {};
  for (var key in obj) {
    if (typeof obj[key] === "number") {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
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
