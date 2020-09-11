// 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

let memorizeObjs = {};
console.log(fib(100, memorizeObjs));
function fib(n, obj) {
  if (obj[n]) {
    return obj[n];
  }

  if (n <= 2) {
    return 1;
  }
  let res = fib(n - 1, obj) + fib(n - 2, obj);
  obj[res] = res;
  return res;
}
