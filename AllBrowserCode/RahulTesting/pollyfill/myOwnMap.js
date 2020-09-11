var logicAlbums = [
  "Bobby Tarantino",
  "The Incredible True Story",
  "Supermarket",
  "Under Pressure"
];

Array.prototype.mapAlbum = function(callback) {
  // callback here is the callback function
  // which actual .forEach() function accepts
  var newArr = [];
  for (var i = 0; i < this.length; i++) {
    newArr.push(callback(this[i], i, this)); // currentValue, index, array
  }
  return newArr;
};
const myNewMap = logicAlbums.mapAlbum(function(word, i, array) {
  return word;
  // Bobby Tarantino,
  // The Incredible True Story,
  // Supermarket,
  // Under Pressure;
});

console.log("myNewMap ", myNewMap);
