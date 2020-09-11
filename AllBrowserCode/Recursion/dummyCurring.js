var avg = function(...no) {
  let total = 0;
  for (let i = 0; i < no.length; i++) {
    total += no[i];
  }
  return total;
};

var spiceUp = function(fn, ...no) {
  return function(...newNo) {
    return fn.apply(this, no.concat(newNo));
  };
};

var doAvg = spiceUp(avg, 1, 2, 3);

console.log(doAvg(2));
