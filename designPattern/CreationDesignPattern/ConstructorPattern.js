var Task = function(name, value) {
  this.name = name;
  this.value = value;

  this.completed = function() {
    this.value = 100;
  };
};

Task.prototype.save = function() {
  console.log(this.value);
};

var task1 = new Task("running", 10);
task1.completed();
task1.save();

var task2 = new Task("running", 10000);
task2.save();
