var myOwnReduce = [10, 20, 30, 40, 50];

Array.prototype.myOwnReduce = function(callback, initialValue) {
  var accumulator = initialValue === undefined ? 0 : initialValue;

  for (var i = 0; i < this.length; i++) {
    if (accumulator !== undefined) {
      accumulator = callback.call(undefined, accumulator, this[i], i, this);
    } else {
      accumulator = this[i];
    }
  }
  return accumulator;
};

var totalNum = myOwnReduce.myOwnReduce(function(a, b) {
  return a + b;
}, 0);

console.log("total ", totalNum);
