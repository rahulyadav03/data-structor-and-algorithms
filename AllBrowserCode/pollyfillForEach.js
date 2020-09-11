var myArray = ["rahul", "ritu", "tisha"];

Array.prototype.myOwnEach = function(callback) {
  for (var i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

myArray.myOwnEach((each, i, array) => console.log(each, i, array));
