function curry(func) {
  return function carried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function(...args2) {
        carried.apply(this, args.concat(args2));
      };
    }
  };
}

function sum(a, b, c, d, e) {
  return a + b + c + d + e;
}

let carriedSum = curry(sum);
console.log(carriedSum(1, 2, 3, 4, 5));
