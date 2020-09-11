var memoryCache = func => {
  let obj = {};

  return (...args) => {
    const argskey = JSON.stringify(args);
    console.log("argskey ", argskey);

    if (!obj[argskey]) {
      obj[argskey] = func(...args);
    }
    return obj[argskey];
  };
};

var inSufficientSquare = memoryCache(no => {
  let total = 0;

  for (let i = 0; i < no; i++) {
    for (let j = 0; j < no; j++) {
      total++;
    }
  }
  return total;
});

var start = new Date();
inSufficientSquare(40000);
console.log(new Date() - start);

var start2 = new Date();
inSufficientSquare(40000);
console.log(new Date() - start2);
