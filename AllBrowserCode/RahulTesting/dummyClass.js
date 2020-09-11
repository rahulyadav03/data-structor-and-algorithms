//length = 5;
let objNew = {
  length: 6,
  call: function() {
    console.log(this);
    //console.log(this.length);
  }
};

function abc() {
  arguments[0]();
}

newCall = objNew.call;
newCall();
objNew.call();
abc(objNew.call);
