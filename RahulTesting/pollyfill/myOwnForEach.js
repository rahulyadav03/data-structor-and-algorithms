var logicAlbums = [
  "Bobby Tarantino",
  "The Incredible True Story",
  "Supermarket",
  "Under Pressure"
];

Array.prototype.eachAlbum = function(callback) {
  // callback here is the callback function
  // which actual .forEach() function accepts
  for (var i = 0; i < this.length; i++) {
    console.log("this ", this);
    callback(this[i], i, this); // currentValue, index, array
  }
};
logicAlbums.eachAlbum(function(word) {
  console.log(word);
  // Bobby Tarantino,
  // The Incredible True Story,
  // Supermarket,
  // Under Pressure;
});
