var v1 = "abc";
var v2 = true;
var v3 = 10;
var obj = Object.assign({}, v1, null, v2, undefined, v3);
console.log(obj);

let list = [2, 4, 6];
let square = x => x * x;
list.map(square);
console.log(list);

console.log(0.1 + 0.2);

var [a = 3, b] = [4];
console.log(a, b);

var v1 = "abc";
var v2 = true;
var v3 = 10;
var obj = Object.assign({}, v1, null, v2, undefined, v3);
console.log(obj);

var a = {
  prop: -1
};

var k = new Function("a", "b", "return a.prop + b").bind(undefined, a);
console.log(k(3));

var arr = (a, b) => ({
  a: 5,
  b: 5
});

console.log("sadfsd ", arr(4, 5));

var a = {
  prop: -1
};

var k = new Function("a", "b", "return a.prop + b").bind(undefined, a);
console.log(k(3));

var obj = { firstname: "Rahul", secondName: "Yadav" };

for (let key in obj) {
  console.log(key);
}

console.log(obj.__proto__);
